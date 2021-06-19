import {createWebHistory, createRouter} from 'vue-router';
import Home from '../views/Home.vue';
import Doc from '../views/Doc.vue';
import SwitchDemo from "../components/SwitchDemo.vue";

const history = createWebHistory();
const router = createRouter({
    history,
    routes: [
        {path: '/', component: Home},
        {
            path: '/doc', component: Doc, children: [
                {path: 'switch', component: SwitchDemo}
            ]
        }
    ]
});

export {router}