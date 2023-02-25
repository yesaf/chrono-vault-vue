export interface IUser {
    email: string;
    name: string;

}

interface IResponse<T> {
    data: T;
}

class AuthService {

    public getMe(): Promise<IResponse<IUser>> {
        return Promise.resolve({
            data: {
                email: 'example@mail.com',
                name: 'John Doe',
            },
        });
    }
}

export default new AuthService();
