import { AuthValidationRules } from './types';

export const rules = {
    email: {
        required: true,
        isEmail: true
    },
    password: {
        required: true,
        minLength: 6
    }
};


export const validation = ( value: string, rules: AuthValidationRules, type: string) => {
    let isValid = true;
    let msg = '';
    if ( !rules ) {
        return true;
    }

    if ( rules.required ) {
        isValid = value.trim() !== '' && isValid;
        if (!isValid) return { isValid, msg: `${type} is require` };
    }

    if ( rules.minLength ) {
        isValid = value.length >= rules.minLength && isValid;
        if (!isValid) return { isValid, msg: `${type} need to have min ${rules.minLength} characters` };
    }

    if ( rules.maxLength ) {
        isValid = value.length <= rules.maxLength && isValid;
        if (!isValid) return { isValid, msg: `${type} need to have max ${rules.maxLength} characters` };
    }

    if ( rules.isEmail ) {
        const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        isValid = pattern.test( value ) && isValid;
        if (!isValid) return { isValid, msg: 'Invalid email address' };
    }

    return { isValid, msg };
};