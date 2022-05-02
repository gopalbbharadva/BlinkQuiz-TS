import { FormEvent, useState } from "react";

type TogglePasswordProps = {
  type: string;
  isEyeIcon: boolean;
};

export const useTogglePassword = () => {
  const [passwordToggle, setPasswordToggle] = useState({
    type: "password",
    isEyeIcon: false,
  } as TogglePasswordProps);

  const [confirmPasswordToggle, setConfirmPasswordToggle] = useState({
    type: "password",
    isEyeIcon: false,
  } as TogglePasswordProps);

  const checkPasswordView = () => {
    passwordToggle.isEyeIcon
      ? setPasswordToggle({
          isEyeIcon: false,
          type: "password",
        })
      : setPasswordToggle({ isEyeIcon: true, type: "text" });
  };

  const checkConfirmPasswordView = () => {
    confirmPasswordToggle.isEyeIcon
      ? setConfirmPasswordToggle({
          isEyeIcon: false,
          type: "password",
        })
      : setConfirmPasswordToggle({ isEyeIcon: true, type: "text" });
  };

  return {
    passwordToggle,
    checkPasswordView,
    confirmPasswordToggle,
    checkConfirmPasswordView,
  };
};
