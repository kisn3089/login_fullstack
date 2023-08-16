import React, { useState } from "react";

const useJoin = () => {
  const [createUser, setCreateUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  return {};
};

export default useJoin;
