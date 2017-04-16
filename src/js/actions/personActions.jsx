import axios from "axios";

export const FETCH_PERSON = "FETCH_PERSON";
export const FETCH_PERSON_REJECTED = "FETCH_PERSON_REJECTED";

export function showPerson() {
    return (dispatch, getState) => {
        axios.get("https://randomuser.me/api/")
            .then((response) => {
                dispatch({type: FETCH_PERSON, payload: response.data})
            })
            .catch((err) => {
                dispatch({type: FETCH_PERSON_REJECTED, payload: err})
            })
    }
}