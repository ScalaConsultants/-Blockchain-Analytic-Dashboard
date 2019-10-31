import { AuthUserData } from '../../actions/types'

export async function auth(data: AuthUserData): Promise<any> {
    const { shouldSignUp } = data;
    let url = 'api/v1/auth/login';

    if (shouldSignUp) {
        url = 'api/v1/auth/signup';
        data.username = 'Test'
    }

    delete data.shouldSignUp;

    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    };

    const response = await fetch(`${process.env.REACT_APP_HOST}/${url}`, options);

    return await response.json();
}

export async function authToken(token: string) {
    const url = 'api/v1/auth/token';

    const data = { token };

    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    };

    const response = await fetch(`${process.env.REACT_APP_HOST}/${url}`, options);

    return await response.json();
}

export async function authForgotPassword(data: AuthUserData) {
    const url = 'api/v1/auth/forgotpassword';

    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    };

    const response = await fetch(`${process.env.REACT_APP_HOST}/${url}`, options);

    return await response.json();
}