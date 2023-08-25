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
    name: "",
    email: "Email 형식으로 입력해주세요.",
    password: "8자리 이상 입력해주세요.",
    confirmPassword: "비밀번호를 한번 더 입력해주세요.",
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
      {inputFocus === id && <ValidComment>{validComment[id]}</ValidComment>}
    </LabelInputContainer>
  );
};

export default LabelInput;
