export const TABLE_PAGINATION = 'TABLE_PAGINATION';
export const FIND_BOOK_TYPE = 'FIND_BOOK_TYPE';
export const SEARCH_QUERY = 'SEARCH_QUERY';
export const ACTIVE_PAGE = 'ACTIVE_PAGE';

export const tablePagination = (info) => ({
    type: TABLE_PAGINATION,
    payload: info
});

export const findBookType = (type) => ({
    type: FIND_BOOK_TYPE,
    payload: type
});

export const searchBookQuery = (query) => ({
    type: SEARCH_QUERY,
    payload: query
});

export const switchActivePage = (active) => ({
    type: ACTIVE_PAGE,
    payload: active
});









