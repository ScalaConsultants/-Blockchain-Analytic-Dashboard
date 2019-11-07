export interface AuthResetPasswordRouterProps {
    match: {
        params: {
            id: string,
            token: string
        }
    }
}

export interface AuthResetPasswordProps {
    unmount: () => void
}