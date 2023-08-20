import React from "react";
import {
  Button,
  CenterBtn,
  FormBackground,
  FormContainer,
  FormLayout,
  InfoContainer,
  TitleText,
  TitleContainer,
  ValidateContainer,
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
    type === "login"
      ? !(emailValue.match(emailValidation) && passwordValue.length > 7)
      : !(
          emailValue.match(emailValidation) &&
          passwordValue.length > 7 &&
          nameValue?.trim() !== ""
        );

  const isDisabledFc = disabledValid ? () => {} : enterSubmit;

  if (type === "login")
    return (
      <FormContainer>
        <FormBackground $isJoin={false}>
          <FormLayout>
            <TitleContainer>
              <TitleText>LOGIN</TitleText>
            </TitleContainer>
            <InfoContainer $isJoin={false}>
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
            </InfoContainer>
            <CenterBtn>
              <Button onClick={submitHandler} disabled={disabledValid}>
                {disabledValid ? "" : "pass"}
              </Button>
            </CenterBtn>
          </FormLayout>
          <ValidateContainer></ValidateContainer>
        </FormBackground>
      </FormContainer>
    );

  return (
    <FormContainer>
      <FormBackground $isJoin={true}>
        <FormLayout>
          <TitleContainer>
            <TitleText>JOIN</TitleText>
          </TitleContainer>
          <InfoContainer $isJoin={true}>
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
