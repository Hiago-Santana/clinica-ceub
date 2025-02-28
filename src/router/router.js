import { createRouter, createWebHistory } from "vue-router";
import WelcomePage from "../pages/landingPage/WelcomePage.vue";

const routes = [
    {
        path: '/',
        name: "welcome",
        component: WelcomePage,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;