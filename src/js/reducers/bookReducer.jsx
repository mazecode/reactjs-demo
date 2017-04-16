import {ALL_BOOK, ALL_BOOK_REJECTED} from "../actions/bookActions";

const initialState = {
    books: [],
    error: null,
};

export default function reducer(state = initialState, action) {
    if (typeof state === 'undefined') {
        return (initialState);
    }

    switch (action.type) {
        case ALL_BOOK:
            return Object.assign({}, state, {books: action.payload});
        case ALL_BOOK_REJECTED:
            return Object.assign({}, state, {error: action.payload});
        default:
            return state
    }
}