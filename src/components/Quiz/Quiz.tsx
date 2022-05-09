import { Link } from "react-router-dom";
import { QuizProps } from "../../types/Quiz.types";

export const Quiz = ({ quizItem }: QuizProps) => {
  const { quizTitle, imgSrc } = quizItem;

  return (
    <div className="quiz-container flex-center">
      <h3 className="quiz-header">{quizTitle}</h3>
      <div className="quiz-image-container flex-center">
        <img className="quiz-image" src={imgSrc} alt="linux logo" />
      </div>
      <Link
        to="/rules"
        className="btn is-outline fs-btw-ml mg-top-1 bg-transparent"
      >
        Play
      </Link>
    </div>
  );
};
