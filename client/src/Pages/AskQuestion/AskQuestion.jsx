import React from "react";
import { useNavigate } from "react-router-dom";
import "./AskQuestion.css";
const AskQuestion = () => {
  const user = null;
  return (
    <div className='ask-question'>
      <div className='ask-ques-container'>
        <h1>Ask a public Question</h1>
        <form>
          <div className='ask-form-container'>
            <h4>Title</h4>
            <label htmlFor='ask-ques-title'>
              <p>Be specific and imagine you're asking another person</p>
              <input
                type='text'
                id='ask-ques-title'
                placeholder='is There any question ask here'
              />
            </label>
            <h4>Body</h4>
            <label htmlFor='ask-ques-body'>
              <p>
                Include all information someone would need to answer your
                question
              </p>
              <input
                type='text'
                id='ask-ques-body'
                placeholder='is There any question ask here'
              />
            </label>
            <h4>Tags</h4>
            <label htmlFor='ask-ques-tags'>
              <p>Add up to 5 tags </p>
              <input
                type='text'
                id='ask-ques-tags'
                placeholder='type in your tags here'
              />
            </label>
          </div>
          <input type='submit' value='Review Your Question' />
        </form>
      </div>
    </div>
  );
};

export default AskQuestion;
