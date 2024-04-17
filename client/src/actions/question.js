
import * as api from '../api'
export const askQuestion = (questionData,navigate) => async (dispatch)=> {

    try {
        const {data} = await api.postQuestion(questionData)
        dispatch({type:'POST_QUESTION',payload:data})
        dispatch(fetchAllQuestions())
        navigate('/')
        
    } catch (error) {
        console.log(error)
    }
}
export const fetchAllQuestions = ()=>async (dispatch)=>{
    try{
        const {data} = await api.getAllquestions()
        dispatch({type:'FETCH_ALL_QUESTIONS',payload:data})
    }
    catch(error){
        console.log(error )
    }
}

export const postAnswer = (answerdata)=>async(dispatch)=>{
    try{

        const {id,noOfAnswers,answerBody,userAnswered} = answerdata;
        const {data} = await api.postAnswer(id,noOfAnswers,answerBody,userAnswered)
        dispatch({type:'POST_ANSWER',payload:data});
        dispatch(fetchAllQuestions);
    }catch(error){
        console.log(error)
    }
}


 