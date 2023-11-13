import React from "react";
import Questions from "./Questions";
function QuestionList({ questionList }) {
  return (
    <>
      <h1>All Questions</h1>
      {questionList.map((question) => {
        <Questions question={question} key={question.id} />;
      })}
    </>
  );
}

export default QuestionList;
