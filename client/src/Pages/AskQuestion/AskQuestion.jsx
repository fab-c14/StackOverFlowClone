import React,{useState} from "react";
import {useDispatch,useSelector} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import "./AskQuestion.css";
import {askQuestion} from '../../actions/question'
const AskQuestion = () => {
  const [questionTitle,setQuestionTitle] = useState('');
  const [questionBody,setQuestionBody] = useState('');
  const [questionTags,setQuestionTags] = useState('');
  const dispatch = useDispatch()
  const User = useSelector((state)=>state.currentUserReducer)
  const navigate = useNavigate()

  const handleSubmit = (e) =>{
    e.prevenDefault();
    // console.log({questionTitle,questionBody,questionTags})
    dispatch(askQuestion({questionTitle,questionBody,questionTags,userPosted:User.result.name},navigate))
  }
  const handleEnter = (e)=>{
    if (e.key === 'Enter'){
      setQuestionBody(questionBody + '\n')
    }
  }
  return (
    <div className='ask-question'>
      <div className='ask-ques-container'>
        <h1>Ask a public Question</h1>
        <form onSubmit={handleSubmit}>
          <div className='ask-form-container'>
            <label htmlFor='ask-ques-title'>
              <h4>Title</h4>
              <p>Be specific and imagine you're asking another person</p>
              <input
                type='text'
                id='ask-ques-title'
                placeholder='is There any question ask here'
                onChange={(e)=>{setQuestionTitle(e.target.value)}}
              />
            </label>
            <label htmlFor='ask-ques-body'>
              <h4>Body</h4>
              <p>
                Include all information someone would need to answer your
                question
              </p>
              <textarea
                name='ask-ques-body'
                id='ask-ques-body'
                cols='30'
                rows='10'
                onChange={(e)=>{setQuestionBody(e.target.value)}}
                onKeyDown={handleEnter}
              ></textarea>
            </label>
            <label htmlFor='ask-ques-tags'>
              <h4>Tags</h4>
              <p>Add up to 5 tags </p>
              <input
                type='text'
                id='ask-ques-tags'
                placeholder='type in your tags here'
                onChange={(e)=>{setQuestionTags(e.target.value.split())}}
              />
            </label>
          </div>
          <input
            type='submit'
            value='Review Your Question'
            className='review-btn'
          />
        </form>
      </div>
    </div>
  );
};

export default AskQuestion;
