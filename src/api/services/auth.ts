import api, {apiClear} from '../default';

export interface IUser {
    email: string;
    name: string;
}

class AuthService {
    public async login(username: string, password: string): Promise<string> {
        return apiClear.post<string>('/token', {
            username,
            password,
        }, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        })
            .then((response) => {
                localStorage.setItem('token', response.data);
                return response.data;
            });
    }

    public async signUp(email: string, name: string, password: string): Promise<string> {
        return apiClear.post<string>('/registration', {
            email,
            name,
            password,
        })
            .then((response) => {
                console.log('api', response)
                localStorage.setItem('token', response.data);
                return response.data;
            });
    }

    public me(): Promise<IUser> {
        return api.get<IUser>('/me')
            .then((response) => {
                return response.data;
            });
    }
}

export default new AuthService();
