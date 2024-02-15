import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./HomeMainbar.css";

import QuestionList from "./QuestionList";
import { useSelector } from "react-redux";
const HomeMainbar = () => {
  // var questionList = [
  //   {
  //     _id: 1,
  //     upVotes: 3,
  //     downVotes: 2,
  //     noOfAnswers: 2,
  //     questionTitle: "what is function?",
 
  //     questionTags: ["java", "node js", "react js", "mongo db"],
  //     userPosted: "faisal",
  //     askedOn: "jan 1",
  //     userId: 1,
  //     answer: [
  //       {
  //         answerBody: "Answer",
  //         userAnswered: "kumar",
  //         answeredOn: "jan 2",
  //         userId: 2,
  //       },
  //     ],
  //   },

  //   {
  //     _id: 2,
  //     upVotes: 3,
  //     downVotes: 2,
  //     noOfAnswers: 0,
  //     questionTitle: "what is function?",

  //     questionTags: ["js", "R", "python"],
  //     userPosted: "faisal",
  //     askedOn: "jan 1",
  //     userId: 1,
  //     answer: [
  //       {
  //         answerBody: "Answer",
  //         userAnswered: "kumar",
  //         answeredOn: "jan 2",
  //         userId: 2,
  //       },
  //     ],
  //   },

  //   {
  //     _id: 3,
  //     upVotes: 3,
  //     downVotes: 2,
  //     noOfAnswers: 0,
  //     questionTitle: "what is function?",

  //     questionTags: ["javascript", "R", "python"],
  //     userPosted: "faisal",
  //     askedOn: "jan 1",
  //     userId: 1,
  //     answer: [
  //       {
  //         answerBody: "Answer",
  //         userAnswered: "kumar",
  //         answeredOn: "jan 2",
  //         userId: 2,
  //       },
  //     ],
  //   },
  // ];
  const user = 1;
  const location = useLocation();
  const navigate = useNavigate();
  const questionsList = useSelector(state=>state.questionsReducer)
  console.log(questionsList)
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
        {questionsList.data === null ? (
          <h1>Loading...</h1>
        ) : (
          <>
            <p>{questionsList.data.length} questions</p>
            <QuestionList questionsList={questionsList.data} />
          </>
        )}
      </div>
    </div>
  );
};

export default HomeMainbar;
