/**
 * update-image-refs.cjs
 * Replaces .jpg / .jpeg / .png image references with .webp in all .tsx, .ts, .css files.
 * Skips files in node_modules and .git directories.
 * Run with: node scripts/update-image-refs.cjs
 */

const fs = require('fs');
const path = require('path');

const SRC_DIR = path.join(__dirname, '..', 'src');
const PUBLIC_DIR = path.join(__dirname, '..', 'public');

// Regex: matches any string containing an image path ending in .jpg/.jpeg/.png
// We only replace references where the WebP version actually exists in public/
const IMAGE_PATTERN = /(["'`])([^"'`]+?\.(jpg|jpeg|png))(["'`])/gi;

let totalFiles = 0;
let modifiedFiles = 0;
let totalReplacements = 0;

/**
 * Check if the corresponding .webp file exists in the public directory.
 * @param {string} imagePath - relative web path like "/images/foo.jpg"
 */
function webpExists(imagePath) {
  const webpPath = imagePath.replace(/\.(jpg|jpeg|png)$/i, '.webp');
  // Resolve against public dir (strip leading slash)
  const absPath = path.join(PUBLIC_DIR, webpPath.replace(/^\//, ''));
  return fs.existsSync(absPath);
}

/**
 * Recursively gets all .tsx, .ts, .css files from a directory.
 */
function getSourceFiles(dir) {
  let results = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.name === 'node_modules' || entry.name === '.git') continue;
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results = results.concat(getSourceFiles(fullPath));
    } else if (/\.(tsx?|css)$/i.test(entry.name)) {
      results.push(fullPath);
    }
  }
  return results;
}

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let replacements = 0;

  const updated = content.replace(IMAGE_PATTERN, (match, openQuote, imgPath, ext, closeQuote) => {
    // Only replace if webp counterpart exists
    if (webpExists(imgPath)) {
      const webpPath = imgPath.replace(/\.(jpg|jpeg|png)$/i, '.webp');
      replacements++;
      return `${openQuote}${webpPath}${closeQuote}`;
    }
    return match; // leave unchanged
  });

  if (replacements > 0) {
    fs.writeFileSync(filePath, updated, 'utf8');
    modifiedFiles++;
    totalReplacements += replacements;
    const rel = path.relative(path.join(__dirname, '..'), filePath);
    console.log(`✅  ${rel}  (${replacements} replacement${replacements > 1 ? 's' : ''})`);
  }

  totalFiles++;
}

function main() {
  console.log('🔍 Scanning src/ for image references...\n');
  const files = getSourceFiles(SRC_DIR);

  for (const file of files) {
    processFile(file);
  }

  console.log('\n─────────────────────────────────────────');
  console.log(`📝 Files scanned    : ${totalFiles}`);
  console.log(`✏️  Files modified   : ${modifiedFiles}`);
  console.log(`🔁 Total replacements: ${totalReplacements}`);
  console.log('─────────────────────────────────────────\n');
}

main();
