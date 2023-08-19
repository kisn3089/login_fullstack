import React from "react";
import { Input, Label, LabelInputContainer, ValidComment } from "./styles";
import { LabelInputType } from "./type";

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
}: LabelInputType) => {
  const validComment: { [index: string]: string } = {
    Name: "",
    Email: "Email 형식으로 입력해주세요.",
    Password: "8자리 이상 입력해주세요.",
    PasswordConfirm: "",
  };

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
        autoComplete="off"
      />
      {inputFocus === id && <ValidComment>{validComment[title]}</ValidComment>}
    </LabelInputContainer>
  );
};

export default LabelInput;
