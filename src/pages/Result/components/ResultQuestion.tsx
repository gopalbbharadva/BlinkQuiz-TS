import { ResultQuestionProps } from "../../../types/ResultQuestion.types";

export const ResultQuestion = ({
  question,
  answer,
  options,
  userAnswer,
}: ResultQuestionProps) => {
  return (
    <div className="mg-vrtl-xlg">
      <p className="question">{question}</p>
      <div className="option-container">
        {options.map((item, index) => (
          <div
            className={`option mg-vrtl-sm event-none ${
              item === answer ? "right-answer" : ""
            } ${item !== answer && item === userAnswer ? "wrong-answer" : ""} `}
            key={index}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};
