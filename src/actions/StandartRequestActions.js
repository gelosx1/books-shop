export  const CLIENT_REQUEST = 'CLIENT_REQUEST';
export  const RESPONSE_SUCCESS = 'RESPONSE_SUCCESS';
export  const RESPONSE_ERROR = 'RESPONSE_ERROR';

export const clientRequest = (info) => ({
    type: CLIENT_REQUEST,
    payload: info
});

export const responseSuccess = (payload) => ({
    type: RESPONSE_SUCCESS,
    payload: payload
});

export const responseError = (error) => ({
    type: RESPONSE_ERROR,
    payload: error
});