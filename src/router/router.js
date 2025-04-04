import { createRouter, createWebHistory } from "vue-router";
import WelcomePage from "../pages/landingPage/WelcomePage.vue";
import ScheduleAppointment from "../pages/consultations/ScheduleAppointment.vue";

const routes = [
    {
        path: '/',
        name: "welcome",
        component: WelcomePage,
    },
    {
        path: '/marcar-consulta',
        name: 'scheduleAppointment',
        component: ScheduleAppointment,
    }

]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
})

export default router;