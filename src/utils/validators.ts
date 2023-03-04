const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

export const isEmail = (email: string): boolean => {
    return emailRegex.test(email);
}
