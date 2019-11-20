import { AuthUserData } from '../../actions/types'

// TODO: refactor all fetches to common method

export async function authSign(data: AuthUserData): Promise<any> {
    const url = 'api/v1/auth/signup';
    const toSend = { 
        ...data,
        username: data.email
    }

    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(toSend)
    };

    const response = await fetch(`${process.env.REACT_APP_HOST}/${url}`, options);

    if (!response.ok) {
        const msg = await response.text();
        throw new Error(msg);
    }
 
    return await response.text();
}

export async function authLogin(data: AuthUserData): Promise<any> {
    const url = 'api/v1/auth/login';

    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    };

    const response = await fetch(`${process.env.REACT_APP_HOST}/${url}`, options);

    if (!response.ok) {
        const msg = await response.text();
        throw new Error(msg);
    }
 
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
