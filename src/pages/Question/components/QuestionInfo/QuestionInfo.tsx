import { DocumentData } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";
import { useQuizQuestion } from "../../../../contexts/contextExport";
import { useQuestion } from "../../../../hooks/useQuestion";
import { Question } from "../Question/Question";

export const QuestionInfo = ({ questionItem, index }: DocumentData) => {
  const { question, options, answer, questionTitle } = questionItem;

  const {
    questionState: { currentAnswer, questions, totalScore },
    questionDispatch,
  } = useQuizQuestion();

  const navigate = useNavigate();
  const { changeQuestion, navigateToHome } = useQuestion();

  return (
    <div className="question-container">
      <h2 className="question-header mg-vrtl-xlg align-center">
        {questionTitle}
      </h2>
      <div className="flex-between mg-vrtl-lg">
        <p>
          Question:{" "}
          <span className="current-question">
            {index + 1} / {questions.length}
          </span>
        </p>
        <p>
          Score: <span className="current-score">{totalScore}</span>
        </p>
      </div>
      <Question options={options} answer={answer} question={question} />
      <div className="flex-between mg-vrtl-lg">
        <Link to="/">
          <button
            onClick={navigateToHome}
            className="quit-btn btn b-none fs-btw-ml bg-transparent"
          >
            Quit
          </button>
        </Link>
        {index < questions.length - 1 ? (
          <button
            onClick={() => {
              questionDispatch({
                type: "SET_USER_ANSWER",
                payload: { userAnswers: currentAnswer },
              });
              questions.map((item: DocumentData) =>
                item.answer === currentAnswer
                  ? questionDispatch({
                      type: "TOTAL_SCORE",
                      payload: { totalScore: 10 },
                    })
                  : questionDispatch({
                      type: "TOTAL_SCORE",
                      payload: { totalScore: 0 },
                    })
              );
              changeQuestion();
            }}
            className="btn is-outline fs-btw-ml bg-transparent"
          >
            Next
          </button>
        ) : (
          <button
            onClick={() => {
              questionDispatch({
                type: "SET_USER_ANSWER",
                payload: { userAnswers: currentAnswer },
              });
              questions.map((item: DocumentData) =>
                item.answer === currentAnswer
                  ? questionDispatch({
                      type: "TOTAL_SCORE",
                      payload: { totalScore: 10 },
                    })
                  : questionDispatch({
                      type: "TOTAL_SCORE",
                      payload: { totalScore: 0 },
                    })
              );
              navigate("/result");
            }}
            className="btn is-outline fs-btw-ml bg-transparent"
          >
            Submit
          </button>
        )}
      </div>
    </div>
  );
};
