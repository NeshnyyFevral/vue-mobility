import { createApp as _createApp } from 'vue';
import App from '../App.vue';

export default function createApp() {
	const app = _createApp(App);

	return {
		app,
	};
}
