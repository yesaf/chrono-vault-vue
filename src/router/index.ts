import {createRouter, createWebHistory} from 'vue-router';
import authService from '@/api/services/auth';
import HomeView from '../views/HomeView.vue';
import useAccountStore from '@/stores/account';

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
    const userStore = useAccountStore();
    if (to.name !== 'auth') {
        if (!localStorage.getItem('token')) {
            router.replace({name: 'auth'});
            return;
        }
        authService.me()
            .then((user) => {
                if (user) {
                    userStore.setUser(user);
                    next();
                }
            })
            .catch(() => {
                router.replace({name: 'auth'});
            });
    }

    // if (to.name === 'auth' && localStorage.getItem('token')) {
    //     router.replace({name: 'home'})
    //     return;
    // }

    next();
});

export default router;
