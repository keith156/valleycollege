/**
 * Parses an image filename to extract a caption.
 * Expected format: "something$Caption Text.jpg"
 * Everything after the '$' and before the extension is the caption.
 */
export function parseImageCaption(filename: string): string | null {
  if (!filename || !filename.includes('$')) return null;
  
  // Remove file extension
  const nameWithoutExt = filename.substring(0, filename.lastIndexOf('.'));
  
  // Split by '$' and get the part after it
  const parts = nameWithoutExt.split('$');
  if (parts.length < 2) return null;
  
  // Return the last part as the caption, trimmed
  return parts[parts.length - 1].trim();
}
