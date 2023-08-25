import React from "react";
import { Input, Label, LabelInputContainer, ValidComment } from "./styles";
import { LabelInputType } from "./type";

const LabelInput = ({
  title,
  id,
  inputType,
  inputValue,
  inputFocus,
  isSamepassword = true,
  focusHandler,
  blurHandler,
  inputChange,
  enterSubmit,
}: LabelInputType) => {
  const validComment: { [index: string]: string } = {
    name: "",
    email: "Email 형식으로 입력해주세요.",
    password: "8자리 이상 입력해주세요.",
    confirmPassword: isSamepassword ? "" : "비밀번호와 같지 않습니다.",
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
      {(!isSamepassword || inputFocus === id) && (
        <ValidComment
          $isConfirmPassword={id === "confirmPassword" && !isSamepassword}>
          {validComment[id]}
        </ValidComment>
      )}
    </LabelInputContainer>
  );
};

export default LabelInput;
