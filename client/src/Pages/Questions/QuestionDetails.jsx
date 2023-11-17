import React from "react";
import { useParams } from "react-router-dom";
import { FaThumbsDown, FaThumbsUp } from "react-icons/fa";
const QuestionDetails = () => {
  var questionList = [
    {
      _id: 1,
      upVotes: 3,
      downVotes: 2,
      noOfAnswers: 2,
      questionTitle: "what is function?",
      questionTags: "It meant to be",
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
      questionTags: "It meant to be",
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
      questionTags: "It meant to be",
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
  const { id } = useParams();
  return (
    <div className='question-details-page'>
      {questionList === null ? (
        <h1>Loading...</h1>
      ) : (
        <>
          {questionList
            .filter((question) => question._id === id)
            .map((question) => (
              <div key={question._id}>
                <section className='question-details-container'>
                  <h1>{question.questionTitle}</h1>
                  <div className='question-details-container-2'></div>
                </section>
              </div>
            ))}
        </>
      )}
    </div>
  );
};
export default QuestionDetails;
