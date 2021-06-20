import './lib/zero.scss';
import './index.scss';
import {createApp} from 'vue';
import App from './App.vue';
import {router} from "./router/router";
import 'github-markdown-css';

createApp(App).use(router).mount('#app');
