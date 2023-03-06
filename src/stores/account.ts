import type { IUser as IUserData } from '@/api/services/auth';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export interface IUser extends IUserData {
    isLoaded: boolean;
}

const useAccountStore = defineStore('account', () => {
    const user = ref<IUser>({
        email: 'user@m.co',
        name: 'User Full Name',
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

export default useAccountStore;
