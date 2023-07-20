import path from "node:path";
import vue from '@vitejs/plugin-vue'
import {createSvgIconsPlugin} from 'vite-plugin-svg-icons';
import {defineConfig, loadEnv} from 'vite'
import {fileURLToPath, URL} from "node:url";

export default ({mode}) => {

	process.env = {
		...process.env,
		...loadEnv(mode, process.cwd() + '/', '')
	};

	return defineConfig({
		base: "./",
		build: {
			assetsDir: 'r',
		},
		plugins: [
			vue(),
			createSvgIconsPlugin({
				iconDirs: [
					path.resolve(process.cwd(), 'src/assets/icon')
				],
				symbolId: 'icon-[dir]-[name]',
				customDomId: '__svg__icons__dom__',
			})
		],
		envPrefix: [
			'PROJECT_'
		],
		resolve: {
			alias: {
				'@': fileURLToPath(new URL('./src/', import.meta.url)),
				'@assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
				'@config': fileURLToPath(new URL('./src/config', import.meta.url)),
				'@modules': fileURLToPath(new URL('./src/modules', import.meta.url)),
				'@routes': fileURLToPath(new URL('./src/routes', import.meta.url)),
				'@ui': fileURLToPath(new URL('./src/ui', import.meta.url)),
			}
		},
		server: {
			port: 3000
		}
	})
};
