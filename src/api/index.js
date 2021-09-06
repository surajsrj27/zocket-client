export const url = "https://zocket-assignment.herokuapp.com/api";
// export const url = "http://localhost:5000/api";

export const setHeaders = () => {
    const headers = {
      headers: {
        "x-auth-token": localStorage.getItem("token"),
      },
    };
  
    return headers;
};
  

