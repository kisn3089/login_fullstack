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
}: {
  type: "login" | "join";
  emailValue: string;
  pwValue: string;
  inputFocus: string;
  focusHandler: (e: React.FocusEvent<HTMLInputElement>) => void;
  blurHandler: (e: React.FocusEvent<HTMLInputElement>) => void;
  valueChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  submitHandler: (e: React.MouseEvent<HTMLButtonElement>) => void;
  enterSubmit: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}) => {
  return (
    <FormContainer>
      <FormBackground>
        <FormLayout>
          <TitleContainer>
            <Text>{type === "login" ? "LOGIN" : "JOIN"}</Text>
          </TitleContainer>
          <InfoContainer>
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
            <Button onClick={submitHandler}>Join</Button>
          </InfoContainer>
        </FormLayout>
      </FormBackground>
    </FormContainer>
  );
};

export default Form;
