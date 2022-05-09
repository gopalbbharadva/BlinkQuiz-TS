import { collection, getDocs } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { useQuizQuestion } from "../contexts/QuestionContext";
import { db } from "../firebase/FirebaseConfig";

export const useQuestion = () => {
  const { questionDispatch } = useQuizQuestion();
  const navigate = useNavigate();

  const getQuestions = async (quizId: string) => {
    const questionRef = collection(db, `/quizzes/${quizId}/questions`);
    try {
      const res = await getDocs(questionRef);
      questionDispatch({
        type: "GET_QUESTIONS",
        payload: {
          questions: res.docs.map((question) => ({
            ...question.data(),
            id: question.id,
          })),
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const navigateToHome = () => {
    questionDispatch({
      type: "RESET_QUIZ",
    });
    navigate("/");
  };

  const changeQuestion = () => {
    questionDispatch({
      type: "SET_QUESTION_INDEX",
    });
  };

  return { getQuestions, navigateToHome, changeQuestion };
};
