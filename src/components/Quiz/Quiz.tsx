import { useNavigate } from "react-router-dom";
import { useQuestion } from "../../hooks/useQuestion";
import { QuizProps } from "../../types/Quiz.types";

export const Quiz = ({ quizItem }: QuizProps) => {
  const { id, title, imgSrc } = quizItem;
  const { getQuestions } = useQuestion();
  const navigate = useNavigate();

  const setQuestions = async () => {
    await getQuestions(id);
    navigate("/rules");
  };

  return (
    <div className="quiz-container flex-center">
      <h3 className="quiz-header">{title}</h3>
      <div className="quiz-image-container flex-center">
        <img className="quiz-image" src={imgSrc} alt="linux logo" />
      </div>
      <button
        onClick={setQuestions}
        className="btn is-outline fs-btw-ml mg-top-1 bg-transparent"
      >
        Play
      </button>
    </div>
  );
};
