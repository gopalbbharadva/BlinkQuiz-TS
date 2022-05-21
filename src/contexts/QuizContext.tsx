import { getDocs } from "firebase/firestore";
import { createContext, useContext, useEffect, useReducer } from "react";
import { categoryRef, quizzesRef } from "../firebase/FirebaseConfig";
import { initialState, QuizReducer } from "../reducers/QuizReducer";
import { QuizContextProps } from "../types/ContextTypes/QuizContext.types";
import { ChildrenProps } from "../types/ReactEvents.types";

const QuizContext = createContext({} as QuizContextProps);

const QuizProvider = ({ children }: ChildrenProps) => {
  const [quizState, quizDispatch] = useReducer(QuizReducer, initialState);

  useEffect(() => {
    (async () => {
      try {
        quizDispatch({
          type: "FETCH_CATEGORIES",
          payload: { isLoading: true },
        });
        const res = await getDocs(categoryRef);
        quizDispatch({
          type: "GET_CATEGORIES",
          payload: {
            categories: res.docs.map((category) => ({
              ...category.data(),
              id: category.id,
            })),
            isLoading: false,
          },
        });
      } catch (error) {
        console.log(error);
      }
    })();

    (async () => {
      try {
        const res = await getDocs(quizzesRef);
        quizDispatch({
          type: "GET_QUIZZES",
          payload: {
            quizzes: res.docs.map((item) => ({ ...item.data(), id: item.id })),
          },
        });
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <QuizContext.Provider value={{ quizState, quizDispatch }}>
      {children}
    </QuizContext.Provider>
  );
};

const useQuiz = () => useContext(QuizContext);

export { QuizProvider, useQuiz };
