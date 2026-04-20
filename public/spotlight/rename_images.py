import os
import csv
import re

import difflib

def normalize_name(name, is_file=False):
    # Remove file extension only if it's a file
    if is_file:
        name = os.path.splitext(name)[0]
    # Remove titles
    name = re.sub(r'\b(Eng|Hon|Counsel|Dr|Mr|Mrs|Ms|CEng)\.?\b', ' ', name, flags=re.IGNORECASE)
    # Remove anything in parenthesis
    name = re.sub(r'\(.*?\)', ' ', name)
    # Replace non-alphanumeric characters with spaces
    name = re.sub(r'[^a-zA-Z0-9\s]', ' ', name)
    name = name.lower().strip()
    return name

def get_name_parts(name, is_file=False):
    normalized = normalize_name(name, is_file=is_file)
    parts = [p for p in normalized.split() if len(p) > 2]
    return parts

def matches(csv_name, file_name):
    csv_parts = get_name_parts(csv_name, is_file=False)
    file_parts = get_name_parts(file_name, is_file=True)
    
    if not csv_parts:
        return False
        
    csv_set = set(csv_parts)
    file_set = set(file_parts)
    
    # Matches count
    matched_parts = set()
    
    for cp in csv_parts:
        # Exact match
        if cp in file_set:
            matched_parts.add(cp)
            continue
        
        # Substring or fuzzy
        for fp in file_parts:
            if cp in fp or fp in cp or difflib.SequenceMatcher(None, cp, fp).ratio() > 0.7:
                matched_parts.add(cp)
                break
                
    # If we matched enough parts
    return len(matched_parts) >= min(len(csv_set), 2)

def sanitize_filename(name):
    # Replace slashes with hyphens
    name = name.replace('/', '-')
    # Remove other characters that are illegal in Windows filenames
    name = re.sub(r'[\\*?:"<>|]', '', name)
    # Collapse multiple spaces
    name = re.sub(r'  +', ' ', name)
    # Remove trailing dots/spaces before extension
    base, ext = os.path.splitext(name)
    base = base.rstrip('. ')
    return f"{base}{ext}"

def main(dry_run=False):
    csv_path = 'Untitled form.csv'
    directory = '.'
    
    if not os.path.exists(csv_path):
        print(f"Error: {csv_path} not found.")
        return

    alumni_data = []
    with open(csv_path, mode='r', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        for row in reader:
            alumni_data.append(row)

    files = [f for f in os.listdir(directory) if f.lower().endswith(('.jpg', '.jpeg', '.png', '.gif'))]
    
    renames = []
    unmatched = []
    
    for filename in files:
        # Skip if already renamed according to the new pattern precisely
        if filename.startswith('[') and ']_' in filename and filename.count('_') >= 3:
             continue
            
        found = False
        for row in alumni_data:
            csv_name = row['NAME']
            if matches(csv_name, filename):
                period = row['PERIOD OF STUDY'].strip()
                name = row['NAME'].strip()
                profession = row['Profession'].strip()
                work = row['Current Work Station'].strip()
                
                ext = os.path.splitext(filename)[1]
                
                # Format: peroid of study_Name_Profession_Current work station
                new_name = f"[{period}]_{name}_{profession}_{work}{ext}"
                new_name = sanitize_filename(new_name)
                
                renames.append((filename, new_name))
                found = True
                break
        
        if not found:
            unmatched.append(filename)

    print(f"--- Renaming Files (Dry Run: {dry_run}) ---")
    for old, new in renames:
        if old == new: continue
        print(f"'{old}' -> '{new}'")
        if not dry_run:
            try:
                os.rename(old, new)
            except Exception as e:
                print(f"Error renaming {old}: {e}")
                
    print(f"\n--- Unmatched Files ({len(unmatched)}) ---")
    for f in unmatched:
        print(f"'{f}'")
        # Trace why it didn't match
        f_parts = set(get_name_parts(f, is_file=True))
        for row in alumni_data:
            c_name = row['NAME']
            c_parts = set(get_name_parts(c_name, is_file=False))
            if not c_parts: continue
            intersect = c_parts.intersection(f_parts)
            # Check similarity of parts that didn't match
            fuzzy_count = 0
            for cp in c_parts:
                if cp in f_parts:
                    fuzzy_count += 1
                else:
                    for fp in f_parts:
                        if difflib.SequenceMatcher(None, cp, fp).ratio() > 0.8:
                            fuzzy_count += 1
                            break
            
            # If it almost matched, print info
            if fuzzy_count >= 1:
                print(f"  ? Almost matched '{c_name}' (Fuzzy count: {fuzzy_count}/{len(c_parts)})")
                print(f"    CSV Parts: {c_parts}")
                print(f"    File Parts: {f_parts}")

if __name__ == "__main__":
    main(dry_run=False)
