import React from "react";
import { useParams, Link } from "react-router-dom";
import { IoCaretUp, IoCaretDown } from "react-icons/io5";
import "./Questions.css";
import Avatar from "../../components/Avatar/Avatar";
import DisplayAnswer from "./DisplayAnswer";
import { useSelector } from "react-redux";
const QuestionDetails = () => {
  
  const { id } = useParams();
  const questionsList = useSelector(state=>state.questionsReducer)
  console.log(questionsList)
  return (
    <div className='question-details-page'>
      {questionsList.data === null ? (
        <h1 key={questionsList.data._id}>Loading...</h1>
      ) : (
        <>
          {questionsList.data
            .filter((question) => question._id === id)
            .map((question) => (
              <div key={question._id}>
          
                <section className='question-details-container'>
                  <h1>{question.questionTitle}</h1>
                  <div className='question-details-container-2'>
                    <div className='question-votes'>
                      <IoCaretUp width='18' className='votes-icon' />
                      <p>{question.upVotes - question.downVotes}</p>
                      <IoCaretDown width='18' className='votes-icon' />
                    </div>
                    <div style={{ width: "100%" }}>
                      <p className='question-body'>{question.questionBody}</p>
                      <div className='question-details-tags'>
                        {question.questionTags.map((tag) => (
                          <p key={tag}>{tag}</p>
                        ))}
                      </div>

                      <div className='question-actions-user'>
                        <div>
                          <button type='button'>Share</button>
                          <button type='button'>Delete</button>
                        </div>
                        <div>
                          <p>asked {question.askedOn}</p>
                          <Link
                            to={`/User/${question.userId}`}
                            className='user-link'
                            style={{ color: "#0086d9" }}
                          >
                            <Avatar
                              backgroundColor='orange'
                              px={"8px"}
                              py={"5px"}
                            >
                              {question.userPosted.charAt(0).toUpperCase()}
                            </Avatar>
                            <div>{question.userPosted}</div>
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
                <section className='post-ans-container'>
                  <h3>Your Answer</h3>
                  <form>
                    <textarea name='' id='' cols='30' rows='10'>
                      {" "}
                    </textarea>
                    <br />
                    <input
                      type='submit'
                      className='post-ans-btn'
                      value='Post Your Answer'
                    />
                  </form>
                  <p>
                    Browse Other Question tagged{" "}
                    {question.questionTags.map((tag) => (
                      <Link
                        to='/Tags'
                        key={tag}
                        className='ans-tags'
                        style={{ textDecoration: "none", color: "#009dff" }}
                      >
                        {tag}
                      </Link>
                    ))}{" "}
                    or{" "}
                    <Link
                      to='/AskQuestion'
                      style={{ textDecoration: "none", color: "#009dff" }}
                    >
                      Ask Your Own Question
                    </Link>
                  </p>
                </section>
              </div>
            ))}
        </>
      )}
    </div>
  );
};
export default QuestionDetails;
