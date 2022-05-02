export type LoginErrorsProps = {
  email?: string;
  password?: string;
};

export type LoginProps = {
  email: string;
  password: string;
};

export type SignupFormProps = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export type SignupFormErrors = {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
};

export type LoginInputProps = {
  changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputValue: string;
  inputName: string;
  inputType: string;
  inputPlaceHolder: string;
  inputClass: string;
};
