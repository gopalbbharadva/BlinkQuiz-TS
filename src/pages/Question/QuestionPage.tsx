import { useQuizQuestion } from "../../contexts/contextExport";
import { QuestionInfo } from "./components/QuestionInfo/QuestionInfo";
import "./QuestionPage.css";

export const QuestionPage = () => {
  const {
    questionState: { questions, currentQuestionIndex },
  } = useQuizQuestion();

  const currentQuestion = questions[currentQuestionIndex];

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
