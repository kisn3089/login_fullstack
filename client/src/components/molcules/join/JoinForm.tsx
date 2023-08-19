import React from "react";
import Form from "../form/Form";
import useForm from "@/hooks/useForm";
import useJoin from "@/hooks/useJoin";

const JoinForm = () => {
  const { inputFocus, focusHandler, blurHandler } = useForm();
  const { createUser, createInfoChange, joinClick, joinClickByEnter } =
    useJoin();

  return (
    <Form
      type="join"
      nameValue={createUser.name}
      emailValue={createUser.email}
      passwordValue={createUser.password}
      passwordConfirmValue={createUser.confirmPassword}
      inputFocus={inputFocus}
      focusHandler={focusHandler}
      blurHandler={blurHandler}
      valueChange={createInfoChange}
      submitHandler={joinClick}
      enterSubmit={joinClickByEnter}
    />
  );
};

export default React.memo(JoinForm);
