import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./LoginPage.css";
import { AiOutlineLock, AiOutlineMail } from "react-icons/ai";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { TextInput } from "../../../components/Inputs/TextInput";
import { LoginErrorsProps, LoginProps } from "../../../types/Auth.types";
import { valiDateForm } from "../../../utils/AuthValidation";
import {
  ReactChangeInput,
  ReactFormEvent,
} from "../../../types/ReactEvents.types";
import { useTogglePassword } from "../../../hooks/hookExport";
import { getAuth } from "firebase/auth";
import { useAuth } from "../../../contexts/AuthContext";

// type stateType = {
//   state: { from: { pathname: string } };
// };

// interface CustomizeState {
//   myState: string;
// }

type LocationProps = {
  state: {
    from: Location;
  };
};

export const LoginPage = () => {
  const navigate = useNavigate();
  const auth = getAuth();
  const location = useLocation() as unknown as LocationProps;
  const { login } = useAuth();

  console.log(location?.state?.from?.pathname);

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  } as LoginProps);

  const [loginFormErrors, setLoginFormErrors] = useState(
    {} as LoginErrorsProps
  );

  const { passwordToggle, checkPasswordView } = useTogglePassword();

  const formHandler = (e: ReactChangeInput) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
    valiDateForm(name, value, loginFormErrors, setLoginFormErrors);
  };

  const submitHandler = async (e: ReactFormEvent) => {
    e.preventDefault();
    try {
      await login(auth, userData.email, userData.password);
      navigate(location?.state?.from?.pathname || "/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex-center">
      <div className="login-card mg-lg">
        <p className="text-login fs-lg">Login</p>
        <form onSubmit={submitHandler}>
          <div className="input-icon-container input-primary">
            <AiOutlineMail className="fs-lg" />
            <TextInput
              inputValue={userData.email}
              inputName="email"
              inputType="email"
              changeHandler={formHandler}
              inputPlaceHolder="abc@gmail.com"
              inputClass="input"
            />
          </div>
          {loginFormErrors.email && (
            <p className="clr-red">{loginFormErrors.email}</p>
          )}
          <div className="input-icon-container input-primary">
            <AiOutlineLock className="fs-lg" />
            <TextInput
              inputValue={userData.password}
              inputName="password"
              inputType={passwordToggle.type}
              changeHandler={formHandler}
              inputPlaceHolder="*******"
              inputClass="input"
            />
            {passwordToggle.isEyeIcon ? (
              <FaRegEye onClick={checkPasswordView} className="pointer fs-lg" />
            ) : (
              <FaRegEyeSlash
                className="pointer fs-lg"
                onClick={checkPasswordView}
              />
            )}
          </div>
          {loginFormErrors.password && (
            <p className="clr-red">{loginFormErrors.password}</p>
          )}
          <div className="horizontal-div">
            <label className="cursor" htmlFor="remember-me">
              <input id="remember-me" type="checkbox" />
              Remember me
            </label>
            <span className="forgot-link pointer">Forgot Password?</span>
          </div>
          <div className="btn-area">
            <button
              disabled={
                Object.entries(loginFormErrors).length === 0 &&
                Object.entries(userData).length === 2
                  ? false
                  : true
              }
              className="btn is-secondary"
            >
              Login With Test Credentials.
            </button>
            <button
              disabled={
                Object.entries(loginFormErrors).length === 0 &&
                Object.entries(userData).length === 2
                  ? false
                  : true
              }
              className="btn is-solid"
            >
              Login
            </button>
          </div>
        </form>
        <span className="text-or">Or</span>
        <p className="align-center">
          New user?{" "}
          <Link to="/signup">
            <span className="auth-link cursor">Create an account</span>
          </Link>
        </p>
      </div>
    </div>
  );
};
