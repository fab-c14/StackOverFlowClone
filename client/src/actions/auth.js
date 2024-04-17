// to sync and update modify data to redux store - actions
import * as api from "../api";
import { setCurrentUser } from "./currentUser";
// thunk is used to do asynchronous operations
export const signup = (authData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.signUp(authData);
    dispatch({ type: "AUTH", data });
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))
    navigate("/");
  } catch (error) {
    console.log(error.message);
  }
};

export const login = (authData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.logIn(authData);
    dispatch({ type: "AUTH", data });
    navigate("/");
  } catch (error) {
    console.log(error.message);
  }
};
