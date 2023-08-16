import React from "react";
import { Input, Label, LabelInputContainer } from "./styles";
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
