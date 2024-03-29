import axios from "axios";

const API = axios.create({ baseURL: "https://5000-fabc14-stackoverflowclo-l5ut8rh65tm.ws-us108.gitpod.io" });

export const signUp = (authData) => API.post("/user/signup", authData);
export const logIn = (authData) => API.post("/user/login", authData);

export const postQuestion = (questionData) => API.post('/questions/Ask',questionData)

export const getAllquestions  = ()=>API.get('/questions/get')

export const postAnswer = (id,noOfAnswers,answerBody,userAnswered)=>API.patch(`/answer/post/${id}`,{noOfAnswers,answerBody,userAnswered});