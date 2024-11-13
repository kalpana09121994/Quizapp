import React from "react";
import { useQuiz } from "../asset/Context";

function Result() {
  const { score, restartQuiz } = useQuiz();

  return (
    <div className="result">
      <h2>Quiz Finished!</h2>
      <p>Your Score: {score}</p>
      <button onClick={restartQuiz}>Restart Quiz</button>
    </div>
  );
}

export default Result;


