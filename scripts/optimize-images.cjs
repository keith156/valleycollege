/**
 * optimize-images.cjs
 * Bulk-compresses all JPEG/PNG images in the /public folder to WebP.
 * Run with: node scripts/optimize-images.cjs
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const PUBLIC_DIR = path.join(__dirname, '..', 'public');
const QUALITY = 80; // 0-100, 80 is a great balance of quality vs size

let totalOriginal = 0;
let totalCompressed = 0;
let processed = 0;
let skipped = 0;

/**
 * Recursively gets all image files from a directory.
 */
function getImageFiles(dir) {
  let results = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results = results.concat(getImageFiles(fullPath));
    } else if (/\.(jpe?g|png)$/i.test(entry.name)) {
      results.push(fullPath);
    }
  }
  return results;
}

async function optimizeImage(filePath) {
  const outputPath = filePath.replace(/\.(jpe?g|png)$/i, '.webp');

  // Skip if webp already exists and is newer than the original
  if (fs.existsSync(outputPath)) {
    const origStat = fs.statSync(filePath);
    const webpStat = fs.statSync(outputPath);
    if (webpStat.mtimeMs > origStat.mtimeMs) {
      skipped++;
      return;
    }
  }

  const origSize = fs.statSync(filePath).size;

  try {
    await sharp(filePath)
      .webp({ quality: QUALITY, effort: 6 })
      .toFile(outputPath);

    const newSize = fs.statSync(outputPath).size;
    const saving = (((origSize - newSize) / origSize) * 100).toFixed(1);

    totalOriginal += origSize;
    totalCompressed += newSize;
    processed++;

    const rel = path.relative(PUBLIC_DIR, filePath);
    console.log(`✅  ${rel}  |  ${(origSize / 1024).toFixed(0)}KB → ${(newSize / 1024).toFixed(0)}KB  (${saving}% saved)`);
  } catch (err) {
    console.error(`❌  Failed: ${filePath}`, err.message);
  }
}

async function main() {
  console.log('🔍 Scanning public/ for images...\n');
  const files = getImageFiles(PUBLIC_DIR);
  console.log(`Found ${files.length} image(s). Optimizing...\n`);

  for (const file of files) {
    await optimizeImage(file);
  }

  console.log('\n─────────────────────────────────────────');
  console.log(`📦 Processed : ${processed}  |  Skipped (already optimized): ${skipped}`);
  console.log(`📉 Total saved: ${((totalOriginal - totalCompressed) / 1024 / 1024).toFixed(2)} MB`);
  console.log(`   Original  : ${(totalOriginal / 1024 / 1024).toFixed(2)} MB`);
  console.log(`   Compressed: ${(totalCompressed / 1024 / 1024).toFixed(2)} MB`);
  console.log('─────────────────────────────────────────');
  console.log('\n✅ Done! Update your <img src> paths to use .webp, or see the next step.\n');
}

main();
