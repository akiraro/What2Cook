import axios from "axios";

export const registerUser = userData => {
  console.log("ACTION SIGNUP");
  return dispatch => {
    axios
      .post("http://localhost:5000/auth/signup", userData)
      .then(res => console.log(res));
  };
};

export const loginUser = (userData, alert) => {
  console.log("ACTION LOGIN");
  return dispatch => {
    axios.post("http://localhost:5000/auth/signin", userData).then(res => {
      console.log(res);
      sessionStorage.setItem("token", res.data.token);
      alert();
    });
  };
};
