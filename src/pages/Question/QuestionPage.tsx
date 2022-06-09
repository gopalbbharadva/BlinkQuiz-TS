import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useQuizQuestion } from "../../contexts/contextExport";
import { QuestionInfo } from "./components/QuestionInfo/QuestionInfo";
import "./QuestionPage.css";

export const QuestionPage = () => {
  const {
    questionState: { questions, currentQuestionIndex },
  } = useQuizQuestion();

  const navigate = useNavigate();
  const currentQuestion = questions[currentQuestionIndex];


  // useEffect(() => {
  //   questions.length === 0 && navigate("/");
  // }, [questions]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <div className="question-grid">
        <QuestionInfo
          totalQuestions={questions.length}
          index={currentQuestionIndex}
          questionItem={currentQuestion}
          key={currentQuestion}
        />
      </div>
    </>
  );
};
