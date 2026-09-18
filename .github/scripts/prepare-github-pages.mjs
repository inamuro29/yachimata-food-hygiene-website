import { promises as fs } from 'node:fs';
import path from 'node:path';

const basePath = '/yachimata-food-hygiene-website';
const projectRoot = process.cwd();

async function exists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
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
  if (!relativeDir) continue;
  routes.add('/' + relativeDir.split(path.sep).join('/'));
}

const assets = new Set(
  publicFiles.map((filePath) => '/' + path.relative(publicDir, filePath).split(path.sep).join('/')),
);

const knownPaths = [...routes, ...assets].sort((a, b) => b.length - a.length);

function shouldPrefix(value) {
  if (!value.startsWith('/') || value.startsWith('//') || value.startsWith(basePath)) return false;
  return knownPaths.some((known) => {
    if (known === '/') return value === '/' || value.startsWith('/#') || value.startsWith('/?');
    return (
      value === known ||
      value === `${known}/` ||
      value.startsWith(`${known}#`) ||
      value.startsWith(`${known}?`)
    );
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

// vinext's export-mode classifier only treats routes as definitely static when
// the page module itself has an explicit static route config. Wrap each page in
// CI only so the checked-in site source and client components stay untouched.
for (const pageFile of pageFiles) {
  const dir = path.dirname(pageFile);
  const originalName = '__github-pages-content.tsx';
  const originalPath = path.join(dir, originalName);
  await fs.rename(pageFile, originalPath);
  await fs.writeFile(
    pageFile,
    `import Page from './${originalName.replace(/\.tsx$/, '')}';\n\nexport const dynamic = 'force-static';\nexport const revalidate = false;\n\nexport default Page;\n`,
    'utf8',
  );
}

await fs.writeFile(
  path.join(projectRoot, 'next.config.ts'),
  `import type { NextConfig } from 'next';\n\nconst nextConfig: NextConfig = {\n  output: 'export',\n  basePath: '${basePath}',\n  trailingSlash: true,\n};\n\nexport default nextConfig;\n`,
  'utf8',
);

await fs.writeFile(
  path.join(projectRoot, 'vite.config.ts'),
  `import tailwindcss from '@tailwindcss/postcss';\nimport vinext from 'vinext';\nimport { defineConfig } from 'vite';\n\nexport default defineConfig({\n  css: { postcss: { plugins: [tailwindcss()] } },\n  plugins: [vinext()],\n});\n`,
  'utf8',
);

console.log(`GitHub Pages preparation complete. Rewrote ${changedCount} source file(s).`);
console.log(`Wrapped ${pageFiles.length} page module(s) as explicit static routes.`);
console.log(`Base path: ${basePath}`);
console.log(`Detected routes: ${[...routes].sort().join(', ')}`);
console.log(`Detected public assets: ${[...assets].sort().join(', ')}`);
