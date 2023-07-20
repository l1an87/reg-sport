import {createRouter, createWebHistory, Router, RouterView} from 'vue-router';
import RouteIndex from "@routes/route-index.vue";

export function createPluginRouter(): Router {
	const history = createWebHistory();

	return createRouter({
		history,
		scrollBehavior: (to, from, savedPosition) => {
			if (savedPosition) {
				return savedPosition;
			} else if (to.hash && from.matched.length) {
				return {el: to.hash, top: 64, behavior: 'smooth'};
			} else {
				return {top: 0, left: 0};
			}
		},
		routes: [
			{
				name: 'base',
				path: '/',
				component: RouterView,
				children: [
					{path: '', name: 'route-index', component: RouteIndex}
				]
			},
			{
				name: 'catchAll',
				path: '/:catchAll(.*)?',
				component: RouterView // TODO 404 if you need
			}
		],
	});
}
