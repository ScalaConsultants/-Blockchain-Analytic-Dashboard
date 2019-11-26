import { AuthUserData } from '../../actions/types'
import { doPost } from '../../helpers/fetch';

export async function authSign(data: AuthUserData): Promise<any> {
    const url = 'api/v1/auth/signup';

    // Prepare this data before passing here
    const dataToSend = { 
        ...data,
        username: data.email
    }

    const response = await doPost(url, dataToSend);

    if (!response.ok) {
        const msg = await response.text();
        throw new Error(msg);
    }
 
    return await response.text();
}

export async function authLogin(data: AuthUserData): Promise<any> {
    const url = 'api/v1/auth/login';

    const response = await doPost(url, data);

    if (!response.ok) {
        const msg = await response.text();
        throw new Error(msg);
    }
 
    return await response.json();
}

export async function authToken(token: string) {
    const url = 'api/v1/auth/token';

    const response = await doPost(url, { token });

    return await response.json();
}

export async function authForgotPassword(data: AuthUserData) {
    const url = 'api/v1/auth/forgotpassword';

    const response = await doPost(url, data);

    return await response.json();
}
