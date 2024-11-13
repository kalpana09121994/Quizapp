
import React, { createContext, useContext, useState } from "react";
import questions from "./Question.json";

const QuizContext = createContext();

export const useQuiz = () => {
  return useContext(QuizContext);
};

export const QuizProvider = ({ children }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isQuizFinished, setIsQuizFinished] = useState(false);

  const question = questions[currentQuestionIndex];

  const handleAnswer = (answer) => {
    if (answer === question.answer) {
      setScore(score + 1);
    }

    const nextIndex = currentQuestionIndex + 1;

    if (nextIndex < questions.length) {
      setCurrentQuestionIndex(nextIndex);
    } else {
      setIsQuizFinished(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setIsQuizFinished(false);
  };

  return (
    <QuizContext.Provider
      value={{
        currentQuestionIndex,
        question,
        score,
        isQuizFinished,
        handleAnswer,
        restartQuiz,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};
