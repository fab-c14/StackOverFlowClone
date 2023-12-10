import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./HomeMainbar.css";

import QuestionList from "./QuestionList";
const HomeMainbar = () => {
  var questionList = [
    {
      _id: 1,
      upVotes: 3,
      downVotes: 2,
      noOfAnswers: 2,
      questionTitle: "what is function?",
 
      questionTags: ["java", "node js", "react js", "mongo db"],
      userPosted: "faisal",
      askedOn: "jan 1",
      userId: 1,
      answer: [
        {
          answerBody: "Answer",
          userAnswered: "kumar",
          answeredOn: "jan 2",
          userId: 2,
        },
      ],
    },

    {
      _id: 2,
      upVotes: 3,
      downVotes: 2,
      noOfAnswers: 0,
      questionTitle: "what is function?",

      questionTags: ["js", "R", "python"],
      userPosted: "faisal",
      askedOn: "jan 1",
      userId: 1,
      answer: [
        {
          answerBody: "Answer",
          userAnswered: "kumar",
          answeredOn: "jan 2",
          userId: 2,
        },
      ],
    },

    {
      _id: 3,
      upVotes: 3,
      downVotes: 2,
      noOfAnswers: 0,
      questionTitle: "what is function?",

      questionTags: ["javascript", "R", "python"],
      userPosted: "faisal",
      askedOn: "jan 1",
      userId: 1,
      answer: [
        {
          answerBody: "Answer",
          userAnswered: "kumar",
          answeredOn: "jan 2",
          userId: 2,
        },
      ],
    },
  ];
  const user = 1;
  const location = useLocation();
  const navigate = useNavigate();

  const checkAuth = () => {
    if (user === null) {
      alert("login or signup to ask a question.");
      navigate("/Auth");
    } else {
      navigate("/AskQuestion");
    }
  };
  return (
    <div className='main-bar'>
      <div className='main-bar-header'>
        {location.pathname === "/" ? (
          <h1>Top Questions</h1>
        ) : (
          <h1>All Questions</h1>
        )}
        <button onClick={checkAuth} className='ask-btn'>
          Ask Question
        </button>
      </div>
      <div>
        {questionList === null ? (
          <h1>Loading...</h1>
        ) : (
          <>
            <p>{questionList.length} questions</p>
            <QuestionList questionList={questionList} />
          </>
        )}
      </div>
    </div>
  );
};

export default HomeMainbar;
