import React from "react";
import Form from "../form/Form";
import useForm from "@/hooks/useForm";

const JoinForm = () => {
  const { inputFocus, focusHandler, blurHandler } = useForm();

  return (
    <Form
      type="join"
      emailValue=""
      pwValue=""
      inputFocus={inputFocus}
      focusHandler={focusHandler}
      blurHandler={blurHandler}
      valueChange={() => {}}
      submitHandler={() => {}}
      enterSubmit={() => {}}
    />
  );
};

export default React.memo(JoinForm);
