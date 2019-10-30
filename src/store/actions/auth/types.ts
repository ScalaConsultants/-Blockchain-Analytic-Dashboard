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

export interface AuthUserResponse extends Type {
    data: {
        token: null | string,
        isAuthenticated: boolean
        user: {
            email: string;
            username: string;
        }
    },
    error: null | string
}
