import { createContext, useContext, useReducer } from "react";
import {
  questionInitialState,
  questionReducer,
} from "../reducers/QuestionReducer";
import { QuestionContextProps } from "../types/ContextTypes/QuestionContext.types";
import { ChildrenProps } from "../types/ReactEvents.types";

const QuestionContext = createContext({} as QuestionContextProps);

const QuestionProvider = ({ children }: ChildrenProps) => {
  const [questionState, questionDispatch] = useReducer(
    questionReducer,
    questionInitialState
  );

  return (
    <QuestionContext.Provider value={{ questionState, questionDispatch }}>
      {children}
    </QuestionContext.Provider>
  );
};

const useQuizQuestion = () => useContext(QuestionContext);

export { useQuizQuestion, QuestionProvider };
