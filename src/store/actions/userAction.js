import axios from "axios";
import { url, setHeaders } from "../../api";
import { toast } from "react-toastify";

export const user = (id) => {
    return (dispatch) => {
        axios
            .get(`${url}/user/${id}`, setHeaders())
            .then((user) => {
                console.log("user action:",user.data);
                dispatch({
                    type: "GET_USER",
                    user: user.data,
                });
            })
            .catch((error) => {
                toast.error(error.response.data.error, {
                    position: toast.POSITION.TOP_CENTER,
                });
            });
    };
};

