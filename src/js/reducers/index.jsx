import {combineReducers} from "redux";

import person from "./personReducer";
import tweets from "./tweetsReducer";
import user from "./userReducer";

export default combineReducers({
    person,
    tweets,
    user,
})
