import {combineReducers} from "redux";

import books from './bookReducer';
import person from "./personReducer";

export default combineReducers({
    books,
    person,
})
