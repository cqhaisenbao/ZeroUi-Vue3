import {createWebHistory, createRouter} from 'vue-router';
import Home from '../views/Home.vue';
import Doc from '../views/Doc.vue';
import SwitchDemo from "../components/demo/SwitchDemo.vue";
import ButtonDemo from "../components/demo/ButtonDemo.vue";
import DialogDemo from "../components/demo/DialogDemo.vue";
import TabsDemo from "../components/demo/TabsDemo.vue";
import CardDemo from "../components/demo/CardDemo.vue";
import IconDemo from "../components/demo/IconDemo.vue";
import Intro from "../views/Intro.vue";
import GetStarted from "../views/GetStarted.vue";
import Install from "../views/Install.vue";

const history = createWebHistory();
const router = createRouter({
    history,
    routes: [
        {path: '/', component: Home},
        {
            path: '/doc', component: Doc,
            children: [
                {path: "", redirect: '/doc/intro'},
                {path: "intro", component: Intro},
                {path: "get-started", component: GetStarted},
                {path: "install", component: Install},
                {path: "switch", component: SwitchDemo},
                {path: "button", component: ButtonDemo},
                {path: "dialog", component: DialogDemo},
                {path: "tabs", component: TabsDemo},
                {path: "card", component: CardDemo},
                {path: "icon", component: IconDemo}
            ]
        }
    ]
});

export {router};
