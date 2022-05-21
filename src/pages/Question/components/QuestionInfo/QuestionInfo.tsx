import { doc, updateDoc, DocumentData } from "firebase/firestore";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  useQuizQuestion,
  useAuth,
  useAllUsers,
} from "../../../../contexts/contextExport";
import { db } from "../../../../firebase/FirebaseConfig";
import { useQuestion } from "../../../../hooks/useQuestion";
import { Question } from "../Question/Question";

export const QuestionInfo = ({ questionItem, index }: DocumentData) => {
  const {
    questionState: { currentAnswer, questions, totalScore },
    questionDispatch,
  } = useQuizQuestion();
  const { user } = useAuth();
  const { users } = useAllUsers();
  const { changeQuestion, navigateToHome } = useQuestion();

  const currentUser = users?.find(
    (item: DocumentData) => item.email === user?.email
  );
  const userRef = doc(db, "users", currentUser?.id);
  const navigate = useNavigate();

  const submitHandler = async () => {
    questionDispatch({
      type: "SET_USER_ANSWER",
      payload: { userAnswers: currentAnswer },
    });
    questions.map((item: DocumentData) =>
      item.answer === currentAnswer
        ? questionDispatch({
            type: "TOTAL_SCORE",
            payload: { totalScore: 10 },
          })
        : questionDispatch({
            type: "TOTAL_SCORE",
            payload: { totalScore: 0 },
          })
    );
    await updateDoc(userRef, {
      result: totalScore,
      category: questionItem.questionTitle,
    });
    navigate("/result");
  };

  const questionChangeHandler = () => {
    questionDispatch({
      type: "SET_USER_ANSWER",
      payload: { userAnswers: currentAnswer },
    });
    questions.map((item: DocumentData) =>
      item.answer === currentAnswer
        ? questionDispatch({
            type: "TOTAL_SCORE",
            payload: { totalScore: 10 },
          })
        : questionDispatch({
            type: "TOTAL_SCORE",
            payload: { totalScore: 0 },
          })
    );
    changeQuestion();
  };

  useEffect(() => {
    questionItem === undefined && navigate("/");
  }, [questionItem]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="question-container">
      <h2 className="question-header mg-vrtl-xlg align-center">
        {questionItem?.questionTitle}
      </h2>
      <div className="flex-between mg-vrtl-lg">
        <p>
          Question:{" "}
          <span className="current-question">
            {index + 1} / {questionItem?.questions?.length}
          </span>
        </p>
        <p>
          Score: <span className="current-score">{totalScore}</span>
        </p>
      </div>
      <Question
        options={questionItem?.options}
        answer={questionItem?.answer}
        question={questionItem?.question}
      />
      <div className="flex-between mg-vrtl-lg">
        <Link to="/">
          <button
            onClick={navigateToHome}
            className="quit-btn btn b-none fs-btw-ml bg-transparent"
          >
            Quit
          </button>
        </Link>
        {index < questions.length - 1 ? (
          <button
            onClick={questionChangeHandler}
            className="btn is-outline fs-btw-ml bg-transparent"
          >
            Next
          </button>
        ) : (
          <button
            onClick={submitHandler}
            className="btn is-outline fs-btw-ml bg-transparent"
          >
            Submit
          </button>
        )}
      </div>
    </div>
  );
};
