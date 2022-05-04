import { useState } from "react";
import { Link } from "react-router-dom";
import "./SignupPage.css";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useTogglePassword } from "../../../hooks/hookExport";
import { TextInput } from "../../../components/Inputs/TextInput";
import { SignupFormErrors, SignupFormProps } from "../../../types/Auth.types";
import {
  ReactChangeInput,
  ReactFormEvent,
} from "../../../types/ReactEvents.types";
import { validateSignupForm } from "../../../utils/AuthValidation";
import { getAuth } from "firebase/auth";
import { useAuth } from "../../../contexts/AuthContext";

export const SignupPage = () => {
  const auth = getAuth();
  const { signUp } = useAuth();
  const {
    passwordToggle,
    checkPasswordView,
    confirmPasswordToggle,
    checkConfirmPasswordView,
  } = useTogglePassword();

  const [newUserData, setNewUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  } as SignupFormProps);

  const [signupFormErrors, setSignupFormErrors] = useState(
    {} as SignupFormErrors
  );

  const formHandler = (e: ReactChangeInput) => {
    const { name, value } = e.target;
    setNewUserData({ ...newUserData, [name]: value });
    validateSignupForm(
      name,
      value,
      signupFormErrors,
      setSignupFormErrors,
      newUserData
    );
  };

  const submitHandler = async (e: ReactFormEvent) => {
    e.preventDefault();
    try {
      await signUp(auth, newUserData.email, newUserData.password);
    } catch (error) {
      console.log(error);
    }
    setNewUserData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <div className="flex-center">
      <div className="signup-card mg-lg">
        <p title="hello" className="text-signup fs-lg">
          Signup
        </p>
        <form onSubmit={submitHandler}>
          <div className="name-section">
            <TextInput
              inputValue={newUserData.firstName}
              inputName="firstName"
              inputType="text"
              changeHandler={formHandler}
              inputPlaceHolder="rowman"
              inputClass="input is-input-primary"
            />
            <TextInput
              inputValue={newUserData.lastName}
              inputName="lastName"
              inputType="text"
              changeHandler={formHandler}
              inputPlaceHolder="charlie"
              inputClass="input is-input-primary"
            />
          </div>
          <div className="flex-between">
            {signupFormErrors.firstName && (
              <p className="clr-red">{signupFormErrors.firstName}</p>
            )}
            {signupFormErrors.lastName && (
              <p className="clr-red l-name">{signupFormErrors.lastName}</p>
            )}
          </div>
          <div className="mg-top input-icon-container-su">
            <TextInput
              inputValue={newUserData.email}
              inputName="email"
              inputType="email"
              changeHandler={formHandler}
              inputPlaceHolder="abc@gmail.com"
              inputClass="input is-input-primary"
            />
          </div>
          {signupFormErrors.email && (
            <p className="clr-red">{signupFormErrors.email}</p>
          )}

          <div className="mg-top input-icon-container-su input-primary">
            <TextInput
              inputValue={newUserData.password}
              inputName="password"
              inputType={passwordToggle.type}
              changeHandler={formHandler}
              inputPlaceHolder="*********"
              inputClass="input"
            />
            {passwordToggle.isEyeIcon ? (
              <FaRegEye
                className="cursor pd-hztl-sm fs-lg"
                onClick={checkPasswordView}
              />
            ) : (
              <FaRegEyeSlash
                onClick={checkPasswordView}
                className="cursor pd-hztl-sm fs-lg"
              />
            )}
          </div>
          {signupFormErrors.password && (
            <p className="clr-red">{signupFormErrors.password}</p>
          )}

          <div className="mg-top input-icon-container-su input-primary">
            <TextInput
              inputValue={newUserData.confirmPassword}
              inputName="confirmPassword"
              inputType={confirmPasswordToggle.type}
              changeHandler={formHandler}
              inputPlaceHolder="*********"
              inputClass="input"
            />
            {confirmPasswordToggle.isEyeIcon ? (
              <FaRegEye
                className="cursor pd-hztl-sm fs-lg"
                onClick={checkConfirmPasswordView}
              />
            ) : (
              <FaRegEyeSlash
                className="cursor pd-hztl-sm fs-lg"
                onClick={checkConfirmPasswordView}
              />
            )}
          </div>
          {signupFormErrors.confirmPassword && (
            <p className="clr-red">{signupFormErrors.confirmPassword}</p>
          )}
          <button
            disabled={
              Object.entries(signupFormErrors).length === 0 &&
              Object.entries(newUserData).length === 5
                ? false
                : true
            }
            className="btn is-solid wd-100 mg-top"
          >
            Sign Up
          </button>
        </form>
        <p className="align-center">
          Already have an account?{" "}
          <Link to="/login">
            <span className="auth-link"> Login</span>
          </Link>
        </p>
      </div>
    </div>
  );
};
