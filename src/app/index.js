import { createApp as _createApp } from 'vue';

// import { createPinia } from 'pinia';
import App from '../App.vue';

export default function createApp() {
	// const pinia = createPinia();
	const app = _createApp(App);

	return {
		// pinia,
		app,
	};
}
