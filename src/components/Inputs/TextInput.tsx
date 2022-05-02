import { LoginInputProps } from "../../types/Auth.types";

export const TextInput = ({
  changeHandler,
  inputName,
  inputType,
  inputValue,
  inputPlaceHolder,
  inputClass,
}: LoginInputProps) => {
  return (
    <input
      required
      name={inputName}
      type={inputType}
      value={inputValue}
      onChange={changeHandler}
      className={inputClass}
      placeholder={inputPlaceHolder}
    />
  );
};
