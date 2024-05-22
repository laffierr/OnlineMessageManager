import { createSSRApp } from "vue";
import App from "./App.vue";
import './static/icon/font_10.30/iconfont.css'
// import io from 'weapp.socket.io'
import io from 'socket.io-client'
// import router from router;
// import { createRouter} from 'router';
export function createApp() {
	const app = createSSRApp(App);
	// const router = createRouter();
	// app.use(router);
	// app.mount('#app');
	app.config.productionTip = false;

	// 服务器地址
	app.config.globalProperties.$serverUrl = 'http://47.113.103.222:3000';
	// app.config.globalProperties.$socket = io('http://47.113.103.222:3002');

	return {
		app,
	};
}
