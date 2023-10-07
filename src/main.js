import { createSSRApp } from "vue";
import App from "./App.vue";
import axios from "axios";
// import router from router;
// import { createRouter} from 'router';
export function createApp() {
	const app = createSSRApp(App);
	// const router = createRouter();
	// app.use(router);
	// app.mount('#app');
	return {
		app,
	};
}
