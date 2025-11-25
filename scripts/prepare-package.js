#!/usr/bin/env node

/**
 * Prepares package.json for publishing to GitHub Packages
 * Adjusts paths to be relative to the dist directory
 */

import { readFileSync, writeFileSync, copyFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, '..');
const distDir = join(rootDir, 'dist');

try {
	// Verify dist directory exists
	if (!existsSync(distDir)) {
		throw new Error('dist directory does not exist. Run build first.');
	}

	// Read the original package.json
	const packageJson = JSON.parse(readFileSync(join(rootDir, 'package.json'), 'utf8'));

	// Adjust paths for publishing from dist directory
	packageJson.main = 'index.cjs.js';
	packageJson.module = 'index.es.js';
	packageJson.types = 'index.d.ts';

	// Preserve only the postinstall script as it's needed after package installation
	if (packageJson.scripts) {
		const { postinstall } = packageJson.scripts;
		packageJson.scripts = postinstall ? { postinstall } : undefined;
		if (!packageJson.scripts) {
			delete packageJson.scripts;
		}
	}

	// Remove devDependencies
	delete packageJson.devDependencies;

	// Update files list - include specific file types and patterns
	packageJson.files = ['*.js', '*.d.ts', '*.css', '*.cjs', 'components', '_util', 'hooks', 'lib', 'providers'];

	// Write the adjusted package.json to dist
	writeFileSync(
		join(distDir, 'package.json'),
		JSON.stringify(packageJson, null, '\t')
	);

	// Copy postinstall.cjs if it exists
	const postinstallPath = join(rootDir, 'postinstall.cjs');
	if (existsSync(postinstallPath)) {
		copyFileSync(postinstallPath, join(distDir, 'postinstall.cjs'));
	}

	console.log('✓ package.json prepared for publishing');
} catch (error) {
	console.error('✗ Error preparing package.json:', error.message);
	process.exit(1);
}
