import React from "react";
import { Link, useLocation } from "react-router-dom";
// import "./HomeMainbar.css";
const Questions = () => {

  const questionsList = useSelector(state=>state.questionsReducer)

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
        {questionsList.data === null ? (
          <h1>Loading...</h1>
        ) : (
          <>
            <p>{questionsList.data.length} questions</p>
            
          </>
        )}
      </div>
    </div>
  );
};

export default Questions;
