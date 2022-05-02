import {
  LoginErrorsProps,
  SignupFormErrors,
  SignupFormProps,
} from "../types/Auth.types";
import { omit } from "lodash";
import { emailRegex, passwordRegex } from "../constants/constants";

export const AuthValidation = () => {};

export const valiDateForm = (
  name: string,
  value: string,
  loginFormErrors: LoginErrorsProps,
  setLoginFormErrors: (loginFormErrors: LoginErrorsProps) => void
) => {
  switch (name) {
    case "email":
      if (!value.match(emailRegex)) {
        setLoginFormErrors({
          ...loginFormErrors,
          email: "Enter valid email",
        });
      } else {
        const newObj = omit(loginFormErrors, "email");
        setLoginFormErrors(newObj);
      }
      break;

    case "password":
      if (value.trim().length === 0) {
        setLoginFormErrors({
          ...loginFormErrors,
          password: "Password cannot be empty",
        });
      } else {
        const newObj = omit(loginFormErrors, "password");
        setLoginFormErrors(newObj);
      }
      break;
  }
};

export const validateSignupForm = (
  name: string,
  value: string,
  signupFormErrors: SignupFormErrors,
  setSignupFormErrors: (SignupFormErrors: SignupFormErrors) => void,
  newUserData: SignupFormProps
) => {
  switch (name) {
    case "firstName":
      if (value.trim().length === 0) {
        setSignupFormErrors({
          ...signupFormErrors,
          firstName: "Enter valid first name",
        });
      } else {
        const newObj = omit(signupFormErrors, "firstName");
        setSignupFormErrors(newObj);
      }
      break;

    case "lastName":
      if (value.trim().length === 0) {
        setSignupFormErrors({
          ...signupFormErrors,
          lastName: "Enter valid last name",
        });
      } else {
        const newObj = omit(signupFormErrors, "lastName");
        setSignupFormErrors(newObj);
      }
      break;

    case "email":
      if (!value.match(emailRegex)) {
        setSignupFormErrors({
          ...signupFormErrors,
          email: "Enter valid email",
        });
      } else {
        const newObj = omit(signupFormErrors, "email");
        setSignupFormErrors(newObj);
      }
      break;

    case "password":
      if (!value.match(passwordRegex)) {
        setSignupFormErrors({
          ...signupFormErrors,
          password: "Enter valid password",
        });
      } else {
        const newObj = omit(signupFormErrors, "password");
        setSignupFormErrors(newObj);
      }
      break;

    case "confirmPassword":
      if (value !== newUserData.password) {
        setSignupFormErrors({
          ...signupFormErrors,
          confirmPassword: "Confirm password doesn't match",
        });
      } else {
        const newObj = omit(signupFormErrors, "confirmPassword");
        setSignupFormErrors(newObj);
      }
      break;
  }
};
