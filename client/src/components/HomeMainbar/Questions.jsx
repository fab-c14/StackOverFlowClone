import React from "react";
import { Link } from "react-router-dom";
const Questions = ({ question }) => {
  return (
    <div className='display-ans-container'>
      <div className='display-votes-ans'>
        <p>{question.votes}</p>
        <p>votes</p>
      </div>
      <div className='display-votes-ans'>
        <p>{question.noOfAnswers}</p>
        <p>answers</p>
      </div>
      <div className='display-question-details'>
        <Link to={`/Questions/${question.id}`} className='question-title-link'>
          {question.questionTitle}
        </Link>
      </div>
    </div>
  );
};

export default Questions;
