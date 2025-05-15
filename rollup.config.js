import babel from 'rollup-plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';
import json from '@rollup/plugin-json';
import url from '@rollup/plugin-url';
import image from '@rollup/plugin-image';
import commonjs from '@rollup/plugin-commonjs';

import { defineConfig } from 'rollup';

const rollupConfig = defineConfig({
	input: './src/index.ts',
	output: [
		{
			file: 'dist/index.js',
			format: 'cjs',
		},
		{
			file: 'dist/index.es.js',
			format: 'es',
			exports: 'named',
		},
	],
	plugins: [
		url({
			include: ['**/*.woff', '**/*.woff2'],
			// inline the fonts - avoids next searching in the "public" directory
			limit: Infinity,
		}),
		image(),
		postcss({
			plugins: [],
			minimize: true,
			extract: true,
		}),
		typescript({ tsconfig: './tsconfig.json' }),
		babel({
			exclude: 'node_modules/**',
			presets: ['@babel/preset-react'],
		}),
		commonjs(),
		external(),
		resolve(),
		json(),
		terser(),
	],
});

export default rollupConfig;
