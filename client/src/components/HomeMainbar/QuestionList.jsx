import React from "react";
import Questions from "./Questions";
function QuestionList({ questionsList }) {
  return (
    <>
      {questionsList.map((question) => {
        return <Questions question={question} key={question.id} />;
      })}
    </>
  );
}

export default QuestionList;
