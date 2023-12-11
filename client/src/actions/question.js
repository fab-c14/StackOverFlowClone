
import * as api from '../api'
export const askQuestion = (questionData,navigate) => async (dispatch)=> {

    try {
        const {data} = await api.postQuestion(questionData)
        dispatch({type:'POST_QUESTION',payload:data})
        
    } catch (error) {
        console.log(error)
    }
}


 