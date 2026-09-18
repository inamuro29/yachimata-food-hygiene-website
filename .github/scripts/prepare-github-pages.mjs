import { promises as fs } from 'node:fs';
import path from 'node:path';

const basePath = '/yachimata-food-hygiene-website';
const projectRoot = process.cwd();

async function exists(filePath) {
  try { await fs.access(filePath); return true; } catch { return false; }
}

async function walk(dir) {
  if (!(await exists(dir))) return [];
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...(await walk(fullPath)));
    else files.push(fullPath);
  }
  return files;
}

const appDir = path.join(projectRoot, 'app');
const publicDir = path.join(projectRoot, 'public');
const appFiles = await walk(appDir);
const publicFiles = await walk(publicDir);
const pageFiles = appFiles.filter((filePath) => path.basename(filePath) === 'page.tsx');

const routes = new Set(['/']);
for (const filePath of pageFiles) {
  const relativeDir = path.relative(appDir, path.dirname(filePath));
  if (relativeDir) routes.add('/' + relativeDir.split(path.sep).join('/'));
}
const assets = new Set(publicFiles.map((filePath) => '/' + path.relative(publicDir, filePath).split(path.sep).join('/')));
const knownPaths = [...routes, ...assets].sort((a, b) => b.length - a.length);

function shouldPrefix(value) {
  if (!value.startsWith('/') || value.startsWith('//') || value.startsWith(basePath)) return false;
  return knownPaths.some((known) => {
    if (known === '/') return value === '/' || value.startsWith('/#') || value.startsWith('/?');
    return value === known || value === `${known}/` || value.startsWith(`${known}#`) || value.startsWith(`${known}?`);
  });
}

function prefixKnownPaths(source) {
  return source.replace(/(['"])(\/(?!\/)[^'"\n]*)\1/g, (match, quote, value) => {
    if (!shouldPrefix(value)) return match;
    return `${quote}${basePath}${value}${quote}`;
  });
}

const sourceRoots = ['app', 'components', 'hooks', 'lib'];
const sourceExtensions = new Set(['.ts', '.tsx', '.js', '.jsx', '.css']);
let changedCount = 0;
for (const root of sourceRoots) {
  const files = await walk(path.join(projectRoot, root));
  for (const filePath of files) {
    if (!sourceExtensions.has(path.extname(filePath))) continue;
    const before = await fs.readFile(filePath, 'utf8');
    const after = prefixKnownPaths(before);
    if (after !== before) {
      await fs.writeFile(filePath, after, 'utf8');
      changedCount += 1;
    }
  }
}

const pagesDir = path.join(projectRoot, '.github', 'pages');
await fs.mkdir(pagesDir, { recursive: true });
await fs.writeFile(path.join(pagesDir, 'index.html'), `<!doctype html>\n<html lang="ja">\n<head>\n<meta charset="UTF-8" />\n<meta name="viewport" content="width=device-width, initial-scale=1.0" />\n<meta name="description" content="八街市の食品事業者と地域の食の安全を支える八街市食品衛生連合会のウェブサイトです。" />\n<title>八街市食品衛生連合会</title>\n<link rel="icon" href="${basePath}/favicon.svg" />\n</head>\n<body>\n<div id="root"></div>\n<script type="module" src="./entry.tsx"></script>\n</body>\n</html>\n`, 'utf8');

await fs.writeFile(path.join(pagesDir, 'entry.tsx'), `import React from 'react';\nimport { createRoot } from 'react-dom/client';\nimport '../../app/globals.css';\nimport Home from '../../app/page';\nimport Faq from '../../app/faq/page';\nimport Fees from '../../app/fees/page';\nimport Insurance from '../../app/insurance/page';\nimport Join from '../../app/join/page';\nimport Links from '../../app/links/page';\nimport Members from '../../app/members/page';\nimport Payment from '../../app/payment/page';\n\nconst basePath = '${basePath}';\nconst routeMap: Record<string, React.ComponentType> = {\n  '/': Home,\n  '/faq': Faq,\n  '/fees': Fees,\n  '/insurance': Insurance,\n  '/join': Join,\n  '/links': Links,\n  '/members': Members,\n  '/payment': Payment,\n};\nlet pathname = window.location.pathname;\nif (pathname.startsWith(basePath)) pathname = pathname.slice(basePath.length) || '/';\npathname = '/' + pathname.replace(/^\\/+|\\/+$/g, '');\nif (pathname === '//') pathname = '/';\nconst Page = routeMap[pathname] ?? Home;\ncreateRoot(document.getElementById('root')!).render(<Page />);\n`, 'utf8');

await fs.writeFile(path.join(pagesDir, 'vite.config.ts'), `import { fileURLToPath, URL } from 'node:url';\nimport react from '@vitejs/plugin-react';\nimport { defineConfig } from 'vite';\n\nconst root = fileURLToPath(new URL('.', import.meta.url));\nexport default defineConfig({\n  root,\n  base: '${basePath}/',\n  publicDir: fileURLToPath(new URL('../../public', import.meta.url)),\n  plugins: [react()],\n  build: {\n    outDir: fileURLToPath(new URL('../../dist-pages', import.meta.url)),\n    emptyOutDir: true,\n  },\n});\n`, 'utf8');

console.log(`GitHub Pages SPA preparation complete. Rewrote ${changedCount} source file(s).`);
console.log(`Routes: ${[...routes].sort().join(', ')}`);
