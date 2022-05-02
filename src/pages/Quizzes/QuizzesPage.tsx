import { Quiz } from "../../components/Quiz/Quiz";
import { quiz } from "../../constants/constants";
import "../Home/components/QuizCategory";

export const QuizzesPage = () => {
  return (
    <div className="quiz-wrapper">
      <Quiz quizItem={quiz} />
    </div>
  );
};
