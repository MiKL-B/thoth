export interface LoginPayload {
    email: string;
    password: string;
    remember: boolean;
}

export interface RegisterPayload {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    condition: boolean;
}