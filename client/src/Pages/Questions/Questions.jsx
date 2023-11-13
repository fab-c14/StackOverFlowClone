import React from "react";
import { Link, useLocation } from "react-router-dom";
// import "./HomeMainbar.css";
const Questions = () => {
  var questionList = [
    {
      id: 1,
      votes: 3,
      noOfAnswers: 2,
      questionTitle: "what is function?",
      questionTags: "It meant to be",
      questionTags: ["java", "node js", "react js", "mongo db"],
      userPosted: "faisal",
      askedOn: "jan 1",
    },

    {
      id: 2,
      votes: 0,
      noOfAnswers: 0,
      questionTitle: "what is function?",
      questionTags: "It meant to be",
      questionTags: ["js", "R", "python"],
      userPosted: "faisal",
      askedOn: "jan 1",
    },

    {
      id: 3,
      votes: 1,
      noOfAnswers: 0,
      questionTitle: "what is function?",
      questionTags: "It meant to be",
      questionTags: ["javascript", "R", "python"],
      userPosted: "faisal",
      askedOn: "jan 1",
    },
  ];

  const location = useLocation();
  return (
    <div className='main-bar'>
      <div className='main-bar-header'>
        {location.pathname === "/" ? (
          <h1>Top Questions</h1>
        ) : (
          <h1>All Questions</h1>
        )}
        <Link to='/AskQuestion' className='ask-btn'>
          Ask Question
        </Link>
      </div>
      <div>
        {questionList === null ? (
          <h1>Loading...</h1>
        ) : (
          <>
            <p>{questionList.length} questions</p>
            
          </>
        )}
      </div>
    </div>
  );
};

export default Questions;
