import React from "react";
import {
  Button,
  CenterBtn,
  FormBackground,
  FormContainer,
  FormLayout,
  InfoContainer,
  Text,
  TitleContainer,
} from "./styles";
import LabelInput from "../labelInput/LabelInput";
import { FormType } from "./type";

const Form = ({
  type,
  emailValue,
  passwordValue,
  inputFocus,
  nameValue,
  passwordConfirmValue,
  focusHandler,
  blurHandler,
  valueChange,
  submitHandler,
  enterSubmit,
}: FormType) => {
  const emailValidation = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

  const disabledValid =
    emailValue.length === 0 ||
    !emailValue.includes("@") ||
    !emailValue.match(emailValidation);

  const isDisabledFc = disabledValid ? () => {} : enterSubmit;

  return (
    <FormContainer>
      <FormBackground $isJoin={type === "join"}>
        <FormLayout>
          <TitleContainer>
            <Text>{type === "login" ? "LOGIN" : "JOIN"}</Text>
          </TitleContainer>
          <InfoContainer>
            {type === "join" && (
              <LabelInput
                title="Name"
                id="name"
                inputType="text"
                inputValue={nameValue || ""}
                inputFocus={inputFocus}
                focusHandler={focusHandler}
                blurHandler={blurHandler}
                inputChange={valueChange}
                enterSubmit={isDisabledFc}
              />
            )}
            <LabelInput
              title="Email"
              id="email"
              inputType="text"
              inputValue={emailValue}
              inputFocus={inputFocus}
              focusHandler={focusHandler}
              blurHandler={blurHandler}
              inputChange={valueChange}
              enterSubmit={isDisabledFc}
            />
            <LabelInput
              title="Password"
              id="password"
              inputType="password"
              inputValue={passwordValue}
              inputFocus={inputFocus}
              focusHandler={focusHandler}
              blurHandler={blurHandler}
              inputChange={valueChange}
              enterSubmit={isDisabledFc}
            />
            {type === "join" && (
              <LabelInput
                title="Confirm Password"
                id="confirmPassword"
                inputType="password"
                inputValue={passwordConfirmValue || ""}
                inputFocus={inputFocus}
                focusHandler={focusHandler}
                blurHandler={blurHandler}
                inputChange={valueChange}
                enterSubmit={isDisabledFc}
              />
            )}
          </InfoContainer>
          <CenterBtn>
            <Button onClick={submitHandler} disabled={disabledValid}>
              {disabledValid ? "" : "join"}
            </Button>
          </CenterBtn>
        </FormLayout>
      </FormBackground>
    </FormContainer>
  );
};

export default Form;
