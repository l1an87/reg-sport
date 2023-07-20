import {createApp} from "@config/app.js";
import {createHead} from "@vueuse/head";
import {createPluginRouter} from "@config/router";
import 'virtual:svg-icons-register';

(async () => {

	const app = createApp();
	const head = createHead();
	const router = createPluginRouter();

	app.use(head);
	app.use(router);

	router.isReady().then(() => app.mount('#app'))

})();
