import { Link } from "react-router-dom";
import "./RulesPage.css";

export const RulesPage = () => {
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
              2. For wrong answer 5 marks will deduct from total.
            </p>
          </li>
          <li className="rule-item">
            <p className="rule">
              3. To reach to the next you need at least 60% marks.
            </p>
          </li>
          <li className="rule-item">
            <p className="rule">4. You can't your answer once you selected.</p>
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
