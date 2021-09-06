import axios from "axios";
import { url } from "../../api";
import { toast } from "react-toastify";

export const register = (user) => {
    return (dispatch) => {
      axios
        .post(`${url}/register`, user)
        .then(({ data }) => {
            console.log("result:", data.token);
            localStorage.setItem("token", data.token);
    
            dispatch({
                type: "SIGN_UP",
                token: data.token,
            });
        })
        .catch((error) => {
          console.log(error);
          console.log(error.response);
  
          toast.error(error.response.data.error, {
            position: toast.POSITION.TOP_CENTER,
          });
        });
    };
};

export const login = (creds) => {
    return (dispatch) => {
      axios
        .post(`${url}/login`, creds)
        .then(({ data }) => {
          localStorage.setItem("token", data.token);
  
          dispatch({
            type: "SIGN_IN",
            token: data.token,
          });
        })
        .catch((error) => {
          console.log("login errror:", error.response.data.error);
          
          toast.error(error.response.data.error, {
            position: toast.POSITION.TOP_CENTER,
          });
        });
    };
};

export const loadUser = () => {
    return (dispatch, getState) => {
      const token = getState().auth.token;
      if (token) {
        dispatch({
          type: "USER_LOADED",
          token,
        });
      } else return null;
    };
};
  

export const logout = () => {
    return (dispatch) => {
      dispatch({
        type: "SIGN_OUT",
      });
    };
};