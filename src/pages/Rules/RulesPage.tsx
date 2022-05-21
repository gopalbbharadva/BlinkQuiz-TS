import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useQuizQuestion } from "../../contexts/QuestionContext";
import "./RulesPage.css";

export const RulesPage = () => {
  const {
    questionState: { questions },
  } = useQuizQuestion();

  const navigate = useNavigate();

  useEffect(() => {
    questions.length === 0 && navigate("/");
  }, [questions]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="rules-grid">
      <div className="rules-container flex-center flex-dir-col">
        <h2 className="rules-header">Follow the rules</h2>
        <ul className="rules-list">
          <li className="rule-item">
            <p className="rule">1. Each question will get you 10 points.</p>
          </li>
          <li className="rule-item">
            <p className="rule">
              2. To reach to the next you need at least 60% marks.
            </p>
          </li>
          <li className="rule-item">
            <p className="rule">
              3. You can't go back to previous question once you reach to next
              question.
            </p>
          </li>
        </ul>
        <Link
          to="/question"
          className="btn is-outline fs-btw-ml bg-transparent"
        >
          Start quiz
        </Link>
      </div>
    </div>
  );
};
