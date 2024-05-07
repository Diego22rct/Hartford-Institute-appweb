/**
 * Vue Router
 * @description: Vue Router configuration
 * @docs: https://router.vuejs.org/
 */

import {createRouter, createWebHistory} from "vue-router";
import HomeComponent from "../public/pages/home.component.vue";
import notFoundComponent from "../public/pages/notFound.component.vue";


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/home',    component: HomeComponent, meta: { title: 'Home' } },
        //{ path: '/nursing/mental-state-exams',   component: , meta: { title: 'Mental state exams' } },
        { path: '/', redirect: '/home' },
        { path: "/:pathMatch(.*)*", component: notFoundComponent },
    ],
});

/**
 * Set Business name as prefix for each page title
 */
router.beforeEach((to, from, next) => {
    let baseTitle = 'ACME Learning Center';
    document.title = `${baseTitle} | ${to.meta['title']}`;
    next();
});

export default router;