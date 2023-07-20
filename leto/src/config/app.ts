import App from "@/App.vue";
import {createApp as _createApp} from "vue";

/**
 * Create application instance
 * @returns {ReturnType<typeof createApp>} - The created application instance
 */
export function createApp() {
	return _createApp(App);
}