import axios from "axios";

export function fetchPerson() {
    return function (dispatch) {
        axios.get("https://randomuser.me/api/")
            .then((response) => {
                dispatch({type: "FETCH_PERSONS_FULFILLED", payload: response.data})
            })
            .catch((err) => {
                dispatch({type: "FETCH_PERSONS_REJECTED", payload: err})
            })
    }
}

export function addPerson(id, text) {
    return {
        type: 'ADD_PERSON',
        payload: {},
    }
}

export function updatePerson(id, text) {
    return {
        type: 'UPDATE_PERSON',
        payload: {},
    }
}

export function deletePerson(id) {
    return {type: 'DELETE_PERSON', payload: id}
}
