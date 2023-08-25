import React, { useState } from "react";

const useForm = () => {
  const [inputFocus, setInputFocus] = useState("");
  const [user, setuser] = useState();

  const focusHandler = (e: React.FocusEvent<HTMLInputElement>) => {
    const { id } = e.target;
    setInputFocus(id);
  };

  const blurHandler = () => {
    setInputFocus("");
  };

  return { inputFocus, focusHandler, blurHandler };
};

export default useForm;
