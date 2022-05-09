import { DocumentData } from "firebase/firestore";
import { useQuizQuestion } from "../../contexts/contextExport";
import { useQuestion } from "../../hooks/useQuestion";
import { ResultQuestion } from "./components/ResultQuestion";
import "./ResultPage.css";

export const ResultPage = () => {
  const {
    questionState: { questions, userAnswers, totalScore },
  } = useQuizQuestion();

  const { navigateToHome } = useQuestion();

  return (
    <div className="flex-center flex-dir-col">
      <h2 className="question-header">Result</h2>
      <p className="final-score">
        Final Score:{" "}
        <span>
          {totalScore || 0} / {questions.length * 10}
        </span>
      </p>
      <div className="flex-center flex-dir-col question-container">
        <div className="result-question">
          {questions.map((question: DocumentData, index: number) => (
            <ResultQuestion
              key={question.id}
              options={question.options}
              answer={question.answer}
              question={question.question}
              userAnswer={userAnswers[index]}
            />
          ))}
        </div>
      </div>
      <button
        onClick={navigateToHome}
        className=" btn is-outline fs-btw-ml bg-transparent"
      >
        Go back to home
      </button>
    </div>
  );
};
