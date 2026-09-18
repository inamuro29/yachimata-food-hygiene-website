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

function markPageStatic(source) {
  const config = "export const dynamic = 'force-static';\nexport const revalidate = false;\n";
  if (source.includes("export const dynamic = 'force-static'")) return source;
  const directive = source.match(/^(?:'use client'|\"use client\");\s*\n/);
  if (directive) {
    return `${directive[0]}\n${config}\n${source.slice(directive[0].length)}`;
  }
  return `${config}\n${source}`;
}

const sourceRoots = ['app', 'components', 'hooks', 'lib'];
const sourceExtensions = new Set(['.ts', '.tsx', '.js', '.jsx', '.css']);
let changedCount = 0;

for (const root of sourceRoots) {
  const files = await walk(path.join(projectRoot, root));
  for (const filePath of files) {
    if (!sourceExtensions.has(path.extname(filePath))) continue;
    const before = await fs.readFile(filePath, 'utf8');
    let after = prefixKnownPaths(before);
    if (pageFiles.includes(filePath)) after = markPageStatic(after);
    if (after !== before) {
      await fs.writeFile(filePath, after, 'utf8');
      changedCount += 1;
    }
  }
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
console.log(`Marked ${pageFiles.length} page module(s) as explicit static routes.`);
console.log(`Base path: ${basePath}`);
console.log(`Detected routes: ${[...routes].sort().join(', ')}`);
console.log(`Detected public assets: ${[...assets].sort().join(', ')}`);
