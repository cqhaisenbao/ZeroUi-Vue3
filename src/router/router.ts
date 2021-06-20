import {createWebHistory, createRouter} from 'vue-router';
import Home from '../views/Home.vue';
import Doc from '../views/Doc.vue';
import SwitchDemo from "../components/SwitchDemo.vue";
import DocDemo from "../components/DocDemo.vue";
import ButtonDemo from "../components/ButtonDemo.vue";
import DialogDemo from "../components/DialogDemo.vue";
import TabsDemo from "../components/TabsDemo.vue";
import CardDemo from "../components/CardDemo.vue";
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
                {path: "", component: DocDemo},
                {path: "intro", component: Intro},
                {path: "get-started", component: GetStarted},
                {path: "install", component: Install},
                {path: "switch", component: SwitchDemo},
                {path: "button", component: ButtonDemo},
                {path: "dialog", component: DialogDemo},
                {path: "tabs", component: TabsDemo},
                {path: "card", component: CardDemo}
            ]
        }
    ]
});

export {router};