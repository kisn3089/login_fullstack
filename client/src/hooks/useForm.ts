import React, { useState } from "react";

const useForm = () => {
  const [inputFocus, setInputFocus] = useState("");

  const focusHandler = (e: React.FocusEvent<HTMLInputElement>) => {
    const { id } = e.target;
    setInputFocus(id);
  };

  const blurHandler = (e: React.FocusEvent<HTMLInputElement>) => {
    setInputFocus("");
  };

  return { inputFocus, focusHandler, blurHandler };
};

export default useForm;
