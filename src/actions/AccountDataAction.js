export  const USER_DATA = 'USER_DATA';

export const userData = (user) => ({
    type: USER_DATA,
    payload: user
});