import { useState } from "react";
import { useParams, Link,useNavigate } from "react-router-dom";
import { IoCaretUp, IoCaretDown } from "react-icons/io5";
import "./Questions.css";
import Avatar from "../../components/Avatar/Avatar";
import DisplayAnswer from "./DisplayAnswer";
import { useDispatch, useSelector } from "react-redux";
import { postAnswer } from "../../actions/question";

const QuestionDetails = () => {
  const { id } = useParams();
  const questionsList = useSelector(state => state.questionsReducer);
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const [Answer,setAnswer] = useState('');
  if (!questionsList.data) {
    return <h1>Loading...</h1>;
  }
  const User = useSelector(state=>state.currentUserReducer);
  const handlePostAns = (e,answerLength)=>{
    e.preventDefault();
    if(User===null){
      alert("Login or Singup To Answer A Question")
      Navigate('/Auth')
    }
    else{
      if(Answer ===''){
        alert('Enter An Answer Before Submitting')
      }
      else{
        dispatch(postAnswer({id,noOfAnswers:answerLength+1,answerBody:Answer,userAnswered:User.result.name}))

      }
    }
  }

  const question = questionsList.data.find(question => question._id === id);

  if (!question) {
    return <h1>Question not found</h1>;
  }

  const userPosted = typeof question.userPosted === "string" ? question.userPosted : "";

  return (
    <div className="question-details-page">
      <section className="question-details-container">
        <h1>{question.questionTitle}</h1>
        <div className="question-details-container-2">
          <div className="question-votes">
            <IoCaretUp width="18" className="votes-icon" />
            <p>{question.upVotes - question.downVotes}</p>
            <IoCaretDown width="18" className="votes-icon" />
          </div>
          <div style={{ width: "100%" }}>
            <p className="question-body">{question.questionBody}</p>
            <div className="question-details-tags">
              {question.questionTags.map(tag => (
                <p key={tag}>{tag}</p>
              ))}
            </div>

            <div className="question-actions-user">
              <div>
                <button type="button">Share</button>
                <button type="button">Delete</button>
              </div>
              <div>
                <p>asked {question.askedOn}</p>
                <Link
                  to={`/User/${question.userId}`}
                  className="user-link"
                  style={{ color: "#0086d9" }}
                >
                  <Avatar
                    backgroundColor="orange"
                    px={"8px"}
                    py={"5px"}
                  >
                    {userPosted.length > 0 ? userPosted.charAt(0).toUpperCase() : ""}
                  </Avatar>
                  <div>
                    {userPosted}
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {question.noOfAnswers !== 0 && (
        <section>
          <h3>{question.noOfAnswers} answers</h3>
          <DisplayAnswer key={question._id} question={question} />
        </section>
      )}
      <section className="post-ans-container">
        <h3>Your Answer</h3>
        <form onSubmit={(e)=>{handlePostAns(e,question.answer.length)}}>
          <textarea
            placeholder="Type your answer here"
            name=""
            id=""
            cols="30"
            rows="10"
            onChange={e=>setAnswer(e.target.value)}
          />
          <br />
          <input
            type="submit"
            className="post-ans-btn"
            value="Post Your Answer"
          />
        </form>
        <p>
          Browse Other Question tagged{" "}
          {question.questionTags.map(tag => (
            <Link
              to={`/Tags/${tag}`} // Change the link to include the tag
              key={tag}
              className="ans-tags"
              style={{ textDecoration: "none", color: "#009dff" }}
            >
              {tag}
            </Link>
          ))}{" "}
          or{" "}
          <Link
            to="/AskQuestion" // Change the link to the ask question page
            style={{ textDecoration: "none", color: "#009dff" }}
          >
            Ask Your Own Question
          </Link>
        </p>
      </section>
    </div>
  );
};

export default QuestionDetails;
