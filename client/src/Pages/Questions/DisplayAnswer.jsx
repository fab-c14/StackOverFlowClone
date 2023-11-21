import React from "react";
import QuestionDetails from "./QuestionDetails";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar/Avatar";
import "./Questions.css";
const DisplayAnswer = ({ id, question }) => {
  return (
    <div>
      {question.answer.map((ans) => (
        <div className='display-ans' key={ans._id}>
          <p>{ans.answerBody}</p>
          <div className='question-actions-user'>
            <div>
              <button type='button'>Share</button>
              <button type='button'>Delete</button>
            </div>
            <div>
              <p> answer {ans.answeredOn}</p>
              <Link
                to={`/User/${question.userId}`}
                className='user-link'
                style={{ color: "#0086d9" }}
              >
                <Avatar backgroundColor='green' px={"8px"} py={"5px"}>
                  {ans.userAnswered.charAt(0).toUpperCase()}
                </Avatar>
                <div>{ans.userAnswered}</div>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DisplayAnswer;
