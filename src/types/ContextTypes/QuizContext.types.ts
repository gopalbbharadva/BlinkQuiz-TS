import { DocumentData } from "firebase/firestore";

export type QuizContextProps = {
  quizState: QuizStateProps;
  quizDispatch: React.Dispatch<ActionProps>;
};
export type QuizStateProps = {
  categories: DocumentData;
  quizzes: DocumentData;
};

type GetCategoriesAction = {
  type: "GET_CATEGORIES";
  payload: {
    categories: DocumentData;
  };
};

type GetQuizzesAction = {
  type: "GET_QUIZZES";
  payload: {
    quizzes: DocumentData;
  };
};

export type ActionProps = GetCategoriesAction | GetQuizzesAction;
