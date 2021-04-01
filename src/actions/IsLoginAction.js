export const IS_ADMIN = 'IS_ADMIN';

export const isAdmin = (flag) => ({
    type: IS_ADMIN,
    payload: flag
});
