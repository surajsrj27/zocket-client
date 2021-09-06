import { toast } from "react-toastify";
import jwtDecode from "jwt-decode";

const initialState = {
    token: localStorage.getItem("token"),
    email: null,
    id: null
}

const authReducers = (state = initialState, action) => {
    switch(action.type) {
        case "SIGN_UP": 
            toast.success("Registered..Notification Sent to Your Email Address", {
                position: toast.POSITION.TOP_CENTER,
            });
            const user = jwtDecode(action.token);
            return {
                ...initialState,
                token: action.token,
                email: user.email,
                id: user.id,
            };
        
        case "USER_LOADED":
        case "SIGN_IN":
            toast.info("Welcome...", {
                position: toast.POSITION.TOP_CENTER,
            });
            const usr = jwtDecode(action.token); 
            return {
                ...initialState,
                token: action.token,
                email: usr.email,
                id: usr.id,
            };
        case "SIGN_OUT":
            localStorage.removeItem("token");
            toast.info("GoodBye...", {
                position: toast.POSITION.TOP_CENTER,
            });
            return {
                token: null,
                email: null,
                id: null
            };
                
        default :
            return state;
    }
}

export default authReducers;
