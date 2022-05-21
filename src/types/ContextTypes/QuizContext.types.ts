import { DocumentData } from "firebase/firestore";

export type QuizContextProps = {
  quizState: QuizStateProps;
  quizDispatch: React.Dispatch<ActionProps>;
};
export type QuizStateProps = {
  isLoading: boolean;
  error: string;
  categories: DocumentData;
  quizzes: DocumentData;
};

type FetchCategoriesAction = {
  type: "FETCH_CATEGORIES";
  payload: {
    isLoading: boolean;
  };
};



type GetCategoriesAction = {
  type: "GET_CATEGORIES";
  payload: {
    categories: DocumentData;
    isLoading: boolean;
  };
};

type GetQuizzesAction = {
  type: "GET_QUIZZES";
  payload: {
    quizzes: DocumentData;
  };
};

export type ActionProps =
  | FetchCategoriesAction
  | GetCategoriesAction
  | GetQuizzesAction;
