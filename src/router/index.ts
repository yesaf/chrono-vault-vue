import { createRouter, createWebHistory } from 'vue-router';
import authService from '@/api/services/auth';
import HomeView from '../views/HomeView.vue';
import useUserStore from '@/stores/user';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
        },
        {
            path: '/auth',
            name: 'auth',
            component: () => import('../views/AuthView.vue'),
        },
    ],
});

router.beforeEach((to, from, next) => {
    const userStore = useUserStore();
    if (to.name !== 'auth' && !localStorage.getItem('token')) {
        authService.getMe().then((response) => {
            if (response.data) {
                userStore.setUser(response.data);
                next();
            } else {
                next({ name: 'auth' });
            }
        });
    }
});

export default router;
