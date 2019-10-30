export const INIT_AUTH_LOGIN = 'INIT_AUTH_LOGIN';

export const initAuthLogin = (email: string, password: string) => {
  return {
    type: 'INIT_AUTH_LOGIN',
    data: {
      email,
      password
    }
  };
};