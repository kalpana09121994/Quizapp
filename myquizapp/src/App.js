
import React from "react";
import { QuizProvider, useQuiz } from "./asset/Context";
import User from "./Component/User";
import Quiz from "./Component/Quiz";
import Result from "./Component/Result";
import "./App.css";

function App() {
  const { isQuizFinished } = useQuiz();

  return (
    <div className="App">
      <User />
      {isQuizFinished ? <Result /> : <Quiz />}
    </div>
  );
}

export default function AppWrapper() {
  return (
    <QuizProvider>
      <App />
    </QuizProvider>
  );
}


