import { useQuizQuestion } from "../../../../contexts/contextExport";
import { QuestionProps } from "../../../../types/Question.types";

export const Question = ({ options, question }: QuestionProps) => {
  const {
    questionState: { currentAnswer },
    questionDispatch,
  } = useQuizQuestion();

  return (
    <>
      <p className="question mg-vrtl-sm">{question}</p>
      <div className="option-container mg-vrtl-sm">
        {options.map((item, index) => (
          <div
            onClick={() =>
              questionDispatch({
                type: "SET_CURRENT_ANSWER",
                payload: { currentAnswer: item },
              })
            }
            className={`option ${
              currentAnswer === item ? "selected-option" : ""
            } mg-vrtl-sm`}
            key={index}
          >
            {item}
          </div>
        ))}
      </div>
    </>
  );
};
