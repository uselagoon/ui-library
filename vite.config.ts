import path from 'path';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';
import { peerDependencies, dependencies } from './package.json';

// https://vite.dev/config/

export default defineConfig({
	plugins: [
		react({
			jsxRuntime: 'automatic',
		}),
		tailwindcss(),
		dts({
			include: ['src/**/*'],
		}),
	],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
	build: {
		lib: {
			entry: resolve(__dirname, 'src', 'index.ts'),
			formats: ['es', 'cjs'],
			fileName: (ext) => `index.${ext}.js`,
		},

		rollupOptions: {
			external: Array.from(
				new Set([
					'react',
					/^react\/.*/,
					'react-dom',
					/react-dom\/.*/,
					...Object.keys(peerDependencies),
					...Object.keys(dependencies),
				]),
			),
			output: { preserveModules: true, exports: 'named' },
		},
		target: 'esnext',
		sourcemap: false,
	},
});
