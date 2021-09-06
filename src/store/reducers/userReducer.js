import { toast } from "react-toastify";

const initialState = {
    email: null,
    id: null
}

const userReducers = (state = initialState, action) => {
    switch(action.type) {
        case "GET_USER": 
            return {
                ...state,
                email: action.user.email,
                id: action.user.id,
            };
            
        default :
            return state;
    }
}

export default userReducers;