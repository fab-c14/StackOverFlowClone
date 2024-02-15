import Questions from '../models/Questions.js';
import mongoose from 'mongoose'
export const AskQuestion = async (req,res)=>{

    const postQuestionData = req.body;
    const postQuestion = new Question({...postQuestionData,userId:req.userId})
    try{
        await postQuestion.save(); // saving data to database 
        res.status(200).json("Post a question Successfully.")
    }catch(error){
        console.log('error')
        res.status(409).json("couldn't post your question")
    }
}

export const getAllquestions  = async (req,res)=>{
    try{
        const questionList  = await Questions.find(); // find all records in database
        res.status(200).json(questionList);
    }
    catch(error){
        res.status(404).json({message:error.message})
    }
}