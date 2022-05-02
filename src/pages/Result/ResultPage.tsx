import { Link } from "react-router-dom";
import { questionsArray } from "../../constants/constants";
import { ResultQuestion } from "./components/ResultQuestion";
import "./ResultPage.css";

export const ResultPage = () => {
  return (
    <div className="flex-center flex-dir-col">
      <h2 className="question-header">Result</h2>
      <p className="final-score">
        Final Score: <span>10 / 20</span>
      </p>
      <div className="flex-center flex-dir-col question-container">
        <div className="result-question">
          {questionsArray.map(({ options, question, answer }) => (
            <ResultQuestion
              options={options}
              answer={answer}
              question={question}
            />
          ))}
        </div>
      </div>

      <Link to="/">
        <button className=" btn is-outline fs-btw-ml bg-transparent">
          Go back to home
        </button>
      </Link>
    </div>
  );
};
