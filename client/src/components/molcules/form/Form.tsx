import React from "react";
import {
  Button,
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
  pwValue,
  inputFocus,
  focusHandler,
  blurHandler,
  valueChange,
  submitHandler,
  enterSubmit,
}: FormType) => {
  return (
    <FormContainer>
      <FormBackground isJoin={type === "join"}>
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
                inputValue={pwValue}
                inputFocus={inputFocus}
                focusHandler={focusHandler}
                blurHandler={blurHandler}
                inputChange={valueChange}
                enterSubmit={enterSubmit}
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
              enterSubmit={enterSubmit}
            />
            <LabelInput
              title="Password"
              id="pw"
              inputType="password"
              inputValue={pwValue}
              inputFocus={inputFocus}
              focusHandler={focusHandler}
              blurHandler={blurHandler}
              inputChange={valueChange}
              enterSubmit={enterSubmit}
            />
            {type === "join" && (
              <LabelInput
                title="Confirm Password"
                id="confirm"
                inputType="text"
                inputValue={pwValue}
                inputFocus={inputFocus}
                focusHandler={focusHandler}
                blurHandler={blurHandler}
                inputChange={valueChange}
                enterSubmit={enterSubmit}
              />
            )}

            <Button onClick={submitHandler}>Join</Button>
          </InfoContainer>
        </FormLayout>
      </FormBackground>
    </FormContainer>
  );
};

export default Form;
