#!/usr/bin/env node

/**
 * Prepares package.json for publishing to GitHub Packages
 * Adjusts paths to be relative to the dist directory
 */

import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, '..');
const distDir = join(rootDir, 'dist');

// Read the original package.json
const packageJson = JSON.parse(readFileSync(join(rootDir, 'package.json'), 'utf8'));

// Adjust paths for publishing from dist directory
packageJson.main = 'index.cjs.js';
packageJson.module = 'index.es.js';
packageJson.types = 'index.d.ts';

// Remove build-related scripts and files configuration
delete packageJson.scripts;
delete packageJson.devDependencies;

// Update files list - when publishing from dist, we want all files in that directory
packageJson.files = ['*'];

// Write the adjusted package.json to dist
writeFileSync(
  join(distDir, 'package.json'),
  JSON.stringify(packageJson, null, '\t')
);

console.log('✓ package.json prepared for publishing');
