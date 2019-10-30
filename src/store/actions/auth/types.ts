export interface Type {
    type: string;
}

export interface AuthUserData {
    email: string;
    password: string;
    shouldSignUp: boolean
}

export interface AuthUser extends Type {
    data: AuthUserData;
}