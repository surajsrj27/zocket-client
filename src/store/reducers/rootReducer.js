import { combineReducers } from "redux";
import authReducers from "./authReducer";
import userReducers from "./userReducer";

const rootReducer = combineReducers({
    auth: authReducers,
    user: userReducers
});

export default rootReducer;