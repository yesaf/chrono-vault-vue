import type { IUser as IUserData } from '@/api/services/auth';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export interface IUser extends IUserData {
    isLoaded: boolean;
}

const useUserStore = defineStore('user', () => {
    const user = ref<IUser>({
        email: '',
        name: '',
        isLoaded: false,
    });

    const setUser = (loadedUser: IUserData) => {
        user.value = {...loadedUser, isLoaded: true};
    }

    return {
        user,
        setUser,
    };
})

export default useUserStore;
