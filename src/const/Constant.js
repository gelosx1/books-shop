export const urlApiAccount = 'http://localhost:8080';
export const publisherRadio = 'publisherRadio';
export const authorRadio = 'authorRadio';
export const isbnRadio = 'isbnRadio';
export const all = 'all';
export const defaultActivePage = 1;
export const itemsOnPage = 5;
export const errorMessage = 'Something went wrong - error: '

export const handleResponseHeader = (response) => {
    if(response.headers.get('X-Token')) {
        localStorage.setItem('user_t', response.headers.get('X-Token'));
    }
    return response;
};

export const handleRequestHeaders = () => {
    const _token = localStorage.getItem('user_t');
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('X-Token', `${_token}`);
    return headers
};


export const findBookSwitcher = (type, searchQuery, active, func) => {
        switch (type) {
            case isbnRadio:
                func(`${urlApiAccount}/book/id/${searchQuery}`);
                break;
            case authorRadio:
                func(`${urlApiAccount}/book/author/${searchQuery}/page/${active}/items/${itemsOnPage}`);
                break;
            case publisherRadio:
                func(`${urlApiAccount}/book/publisher/${searchQuery}/page/${active}/items/${itemsOnPage}`);
                break;
            default:func(`${urlApiAccount}/book/all/page/${active}/items/${itemsOnPage}`);
        }

};

