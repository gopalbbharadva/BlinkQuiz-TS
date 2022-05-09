import { Link } from "react-router-dom";
import { CategoryProps } from "../../../types/Category.types";

export const QuizCategory = ({ categoryItem }: CategoryProps) => {
  const { title, imgSrc, description } = categoryItem;

  return (
    <div className="quiz-container flex-center">
      <h3 className="quiz-header">{title}</h3>
      <div className="quiz-image-container flex-center">
        <img className="quiz-image" src={imgSrc} alt="linux logo" />
      </div>
      <p className="quiz-description">{description}</p>
      <Link
        to={`/category/${title}`}
        className="btn is-outline fs-btw-ml mg-top-1 bg-transparent"
      >
        Explore
      </Link>
    </div>
  );
};
