import React from "react";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar/Avatar";
import "./Questions.css";

const DisplayAnswer = ({ question }) => {
  return (
    <div>
      {question.answer.map((ans) => (
        <div className='display-answer' key={ans._id}>
          <p>{ans.answerBody}</p>
          <div className='question-actions-user'>
            <div>
              <button type='button' onClick={() => handleShare(ans)}>Share</button>
              <button type='button' onClick={() => handleDelete(ans._id)}>Delete</button>
            </div>
            <div>
              <p>Answered on: {ans.answeredOn}</p>
              <Link to={`/User/${question.userId}`} className='user-link' style={{ color: "#0086d9" }}>
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
