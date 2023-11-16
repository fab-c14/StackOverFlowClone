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
            <label htmlFor='ask-ques-title'>
              <h4>Title</h4>
              <p>Be specific and imagine you're asking another person</p>
              <input
                type='text'
                id='ask-ques-title'
                placeholder='is There any question ask here'
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
              ></textarea>
            </label>
            <label htmlFor='ask-ques-tags'>
              <h4>Tags</h4>
              <p>Add up to 5 tags </p>
              <input
                type='text'
                id='ask-ques-tags'
                placeholder='type in your tags here'
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
