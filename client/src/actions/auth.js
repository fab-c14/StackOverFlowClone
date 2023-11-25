// to sync and update modify data to redux store - actions
import * as api from "../api";
// thunk is used to do asynchronous operations
export const signup = (authData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.signUp(authData);
    dispatch({ type: "AUTH", data });
    navigate("/");
  } catch (error) {
    console.log(error);
  }
};

export const login = (authData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.signUp(authData);
    dispatch({ type: "AUTH", data });
    navigate("/");
  } catch (error) {
    console.log(error);
  }
};
