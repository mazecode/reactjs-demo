import {FETCH_PERSON, FETCH_PERSON_REJECTED} from "../actions/personActions";

// TODO: Initial state must be the same object (empty) that REST return
const initialState = {
    person: {
        info: {},
        results: []
    },
    error: null,
};

export default function reducer(state = initialState, action) {
    if (typeof state === 'undefined') {
        return (initialState);
    }

    switch (action.type) {
        case FETCH_PERSON:
            return Object.assign({}, state, {person: action.payload});
        case FETCH_PERSON_REJECTED:
            return Object.assign({}, state, {error: action.payload});
        default:
            return state
    }
}