import {createWebHistory, createRouter} from 'vue-router';
import Home from '../views/Home.vue';
import Doc from '../views/Doc.vue';
import SwitchDemo from "../components/SwitchDemo.vue";
import DocDemo from "../components/DocDemo.vue";
import ButtonDemo from "../components/ButtonDemo.vue";
import DialogDemo from "../components/DialogDemo.vue";
import TabsDemo from "../components/TabsDemo.vue";
import CardDemo from "../components/CardDemo.vue";

const history = createWebHistory();
const router = createRouter({
    history,
    routes: [
        {path: '/', component: Home},
        {
            path: '/doc', component: Doc,
            children: [
                {path: "", component: DocDemo},
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