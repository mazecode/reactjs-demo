import axios from "axios";

export const ALL_BOOK = 'ALL_BOOK';
export const ALL_BOOK_REJECTED = 'ALL_BOOK_REJECTED';

export function allBook() {
    return (dispatch, getState) => {
        axios.get("http://localhost:8000/api/v1/book")
            .then((response) => {
                dispatch({type: ALL_BOOK, payload: response.data})
            })
            .catch((err) => {
                dispatch({type: ALL_BOOK_REJECTED, payload: err})
            })
    }
}

export function getByIdBook() {

}

export function postBook() {

}

export function putBook() {

}

export function deleteBook() {

}