import {createApp} from 'vue'
import App from './App.vue'
import './index.css'
import {createWebHistory, createRouter} from 'vue-router'
import Test from './components/Test.vue'

const history = createWebHistory()
const router=createRouter({
    history,
    routes:[{
        path:'/test',component:Test
    }]
})

createApp(App).use(router).mount('#app')
