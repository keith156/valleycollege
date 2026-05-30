/**
 * Pre-render script for SEO
 * 
 * This script runs after `vite build` and generates static HTML
 * for each route by launching a headless browser, navigating to
 * each page, and saving the rendered HTML to disk.
 * 
 * This ensures Google sees full page content instead of an empty
 * <div id="root"></div>.
 * 
 * Usage: node scripts/prerender.mjs
 */

import puppeteer from 'puppeteer-core';
import { createServer } from 'http';
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST_DIR = join(__dirname, '..', 'dist');

// Routes to pre-render
const ROUTES = [
  '/',
  '/about',
  '/academics',
  '/admissions',
  '/alumni',
  '/contact',
];

// Find Chrome on the system
function findChrome() {
  const paths = [
    'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
    '/usr/bin/google-chrome',
    '/usr/bin/chromium-browser',
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  ];
  for (const p of paths) {
    if (existsSync(p)) return p;
  }
  return null;
}

// Simple static file server for the dist directory
function startServer(port) {
  return new Promise((resolve) => {
    const server = createServer((req, res) => {
      const url = req.url.split('?')[0]; // strip query params
      let filePath = join(DIST_DIR, url === '/' ? 'index.html' : url);
      
      // If file doesn't exist, serve index.html (SPA fallback)
      if (!existsSync(filePath) || !filePath.includes('.')) {
        filePath = join(DIST_DIR, 'index.html');
      }
      
      try {
        const content = readFileSync(filePath);
        const ext = filePath.split('.').pop();
        const mimeTypes = {
          html: 'text/html',
          js: 'application/javascript',
          css: 'text/css',
          png: 'image/png',
          jpg: 'image/jpeg',
          jpeg: 'image/jpeg',
          svg: 'image/svg+xml',
          json: 'application/json',
          woff2: 'font/woff2',
          woff: 'font/woff',
          webp: 'image/webp',
        };
        res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'application/octet-stream' });
        res.end(content);
      } catch (err) {
        res.writeHead(404);
        res.end('Not found');
      }
    });

    server.listen(port, () => {
      console.log(`📦 Static server running on http://localhost:${port}`);
      resolve(server);
    });
  });
}

async function prerender() {
  const chromePath = findChrome();
  if (!chromePath) {
    console.log('⚠️  Chrome not found. Skipping pre-rendering.');
    console.log('   The SEO improvements (structured data, meta tags, noscript fallback) will still help.');
    process.exit(0);
  }

  console.log(`🌐 Using Chrome: ${chromePath}`);

  const PORT = 4173;
  const server = await startServer(PORT);
  
  let browser;
  try {
    browser = await puppeteer.launch({
      headless: 'new',
      executablePath: chromePath,
      args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu'],
    });
    
    for (const route of ROUTES) {
      console.log(`🔄 Pre-rendering: ${route}`);
      
      const page = await browser.newPage();
      
      // Set a desktop viewport
      await page.setViewport({ width: 1280, height: 800 });
      
      // Navigate and wait for network to be idle
      await page.goto(`http://localhost:${PORT}${route}`, {
        waitUntil: 'networkidle0',
        timeout: 60000,
      });
      
      // Wait for React to finish rendering
      await page.waitForSelector('#root > *', { timeout: 20000 });
      await new Promise(r => setTimeout(r, 2000));
      
      // Get the full rendered HTML
      let html = await page.content();
      
      // Clean up: remove scripts that would cause hydration issues
      // We keep the original scripts so the page becomes interactive after load
      
      // Determine output path
      const outputDir = route === '/' 
        ? DIST_DIR 
        : join(DIST_DIR, route);
      
      if (!existsSync(outputDir)) {
        mkdirSync(outputDir, { recursive: true });
      }
      
      const outputFile = join(outputDir, 'index.html');
      writeFileSync(outputFile, html, 'utf-8');
      
      console.log(`✅ Saved: ${outputFile}`);
      await page.close();
    }
    
    console.log('\n🎉 Pre-rendering complete! All pages now have full static HTML for SEO.');
    
  } catch (error) {
    console.error('❌ Pre-rendering failed:', error.message);
    console.log('\n⚠️  The build succeeded without pre-rendering. The SEO improvements');
    console.log('   (structured data, meta tags, noscript fallback) will still help significantly.');
    process.exit(0);
  } finally {
    if (browser) await browser.close();
    server.close();
  }
}

prerender();
