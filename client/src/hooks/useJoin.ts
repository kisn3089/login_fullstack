import { CreateUserType } from "@/types/createUser.type";
import React, { useState } from "react";

const useJoin = () => {
  const [createUser, setCreateUser] = useState<CreateUserType>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const createInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.currentTarget;
    setCreateUser((prev) => {
      return { ...prev, [id]: value };
    });
  };
  return { createUser, createInfoChange };
};

export default useJoin;
