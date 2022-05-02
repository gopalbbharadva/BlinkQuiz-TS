import { questionsArray } from "../../constants/constants";
import { QuestionInfo } from "./components/QuestionInfo/QuestionInfo";
import "./QuestionPage.css";

export const QuestionPage = () => {
  return (
    <>
      <h2 className="question-header align-center">Linux Basics</h2>
      <div className="question-grid">
        {questionsArray.map((item, index) => (
          <QuestionInfo index={index} questionItem={item} key={index} />
        ))}
      </div>
    </>
  );
};
