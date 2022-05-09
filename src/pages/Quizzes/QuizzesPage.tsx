import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Quiz } from "../../components/compExport";
import { useQuiz } from "../../contexts/contextExport";
import { quizObj } from "../../types/Quiz.types";
import "../Home/components/QuizCategory";

export const QuizzesPage = () => {
  const [quizData, setQuizData] = useState<quizObj[]>();
  const {
    quizState: { quizzes },
  } = useQuiz();
  const { categoryId } = useParams();

  useEffect(() => {
    setQuizData(
      quizzes.filter((quiz: quizObj) => quiz.categoryName === categoryId)
    );
  }, [quizzes, categoryId]);

  return (
    <div className="quiz-wrapper">
      {quizData?.map((item: quizObj) => (
        <Quiz key={item.id} quizItem={item} />
      ))}
    </div>
  );
};
