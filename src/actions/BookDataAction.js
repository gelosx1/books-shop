export  const BOOKS_LIST_DATA = 'BOOKS_LIST_DATA';
export const IS_PURCHASED_LIST = 'IS_PURCHASED_LIST';

export const booksListData = (list) => ({
    type: BOOKS_LIST_DATA,
    payload: list
});

export const isPurchasedList = (flag) => ({
    type: IS_PURCHASED_LIST,
    payload: flag
});