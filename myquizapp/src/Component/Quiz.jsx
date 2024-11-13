import React from "react";
import { useQuiz } from "../asset/Context";

function Quiz() {
  const { question, handleAnswer } = useQuiz();

  return (
    <div className="quiz">
      <h2>{question.question}</h2>
      <div className="options">
        {question.options.map((option, index) => (
          <button key={index} onClick={() => handleAnswer(option)}>
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Quiz;
