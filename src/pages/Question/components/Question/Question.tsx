import { QuestionProps } from "../../../../types/Question.types";

export const Question = ({ options, question, answer }: QuestionProps) => {
  return (
    <>
      <p className="question">{question}</p>
      <div className="option-container">
        {options.map((item, index) => (
          <div className={`option mg-vrtl-sm`} key={index}>
            {item}
          </div>
        ))}
      </div>
    </>
  );
};
