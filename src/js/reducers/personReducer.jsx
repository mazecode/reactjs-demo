export default function reducer(state = {
                                    person: {},
                                    fetching: false,
                                    fetched: false,
                                    error: null,
                                }, action) {

    switch (action.type) {
        case "FETCH_PERSONS": {
            return {...state, fetching: true}
        }
        case "FETCH_PERSONS_REJECTED": {
            return {...state, fetching: false, error: action.payload}
        }
        case "FETCH_PERSONS_FULFILLED": {
            return {
                ...state,
                fetching: false,
                fetched: true,
                person: action.payload,
            }
        }
        case "ADD_PERSON": {
            return {
                ...state,
                person: [state.person, action.payload],
            }
        }
        case "UPDATE_PERSON": {
            const {id, text} = action.payload;
            const newPerson = [...state.person];
            const personToUpdate = newPerson.findIndex(person => person.id === id);
            newPerson[personToUpdate] = action.payload;

            return {
                ...state,
                person: newPerson,
            }
        }
        case "DELETE_PERSON": {
            return {
                ...state,
                person: state.person.filter(person => person.id !== action.payload),
            }
        }
    }

    return state
}
