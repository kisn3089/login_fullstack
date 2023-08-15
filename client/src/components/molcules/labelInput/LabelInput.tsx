import React from "react";
import { Input, Label, LabelInputContainer } from "./styles";

const LabelInput = ({
  title,
  id,
  inputType,
  inputValue,
  inputFocus,
  focusHandler,
  blurHandler,
  inputChange,
  enterSubmit,
}: {
  title: string;
  id: string;
  inputValue: string;
  inputType: "text" | "password";
  inputFocus: string;
  focusHandler: (e: React.FocusEvent<HTMLInputElement>) => void;
  blurHandler: (e: React.FocusEvent<HTMLInputElement>) => void;
  inputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  enterSubmit: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}) => {
  return (
    <LabelInputContainer>
      <Label
        htmlFor={id}
        selected={inputFocus === id || inputValue.length !== 0}>
        {title}
      </Label>
      <Input
        type={inputType}
        id={id}
        value={inputValue}
        onFocus={focusHandler}
        onBlur={blurHandler}
        onChange={inputChange}
        onKeyDown={enterSubmit}
      />
    </LabelInputContainer>
  );
};

export default LabelInput;
