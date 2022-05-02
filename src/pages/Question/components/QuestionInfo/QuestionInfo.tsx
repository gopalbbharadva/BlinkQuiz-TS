import { Link } from "react-router-dom";
import { QuestionInfoProps } from "../../../../types/QuestionInfo.types";
import { Question } from "../Question/Question";

export const QuestionInfo = ({ questionItem, index }: QuestionInfoProps) => {
  const { question, options, answer } = questionItem;

  return (
    <div className="question-container">
      <div className="flex-between mg-vrtl-lg">
        <p>
          Question:
          <span className="current-question">{index + 1} / 5</span>
        </p>
        <p>
          Score: <span className="current-score">0</span>
        </p>
      </div>
      <Question options={options} answer={answer} question={question} />
      <div className="flex-between mg-vrtl-lg">
        <Link to="/">
          <button className="quit-btn btn b-none fs-btw-ml bg-transparent">
            Quit
          </button>
        </Link>
        <Link to="/result">
          <button className="btn is-outline fs-btw-ml bg-transparent">
            Next
          </button>
        </Link>
      </div>
    </div>
  );
};
