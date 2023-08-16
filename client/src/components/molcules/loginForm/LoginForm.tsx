import Form from "../form/Form";
import useForm from "@/hooks/useForm";
import useLogin from "@/hooks/useLogin";
import React from "react";

const LoginForm = () => {
  const { userInfo, userInfoChange, passClick, passByEnter } = useLogin();
  const { inputFocus, focusHandler, blurHandler } = useForm();

  return (
    <Form
      type="login"
      emailValue={userInfo.email}
      passwordValue={userInfo.password}
      inputFocus={inputFocus}
      focusHandler={focusHandler}
      blurHandler={blurHandler}
      valueChange={userInfoChange}
      submitHandler={passClick}
      enterSubmit={passByEnter}
    />
  );
};

export default React.memo(LoginForm);
