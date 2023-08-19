import { createUserAPI } from "@/lib/api/createUserAPI";
import { CreateUserType } from "@/types/createUser.type";
import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";

const useJoin = () => {
  const [createUser, setCreateUser] = useState<CreateUserType>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { mutate: createMutation } = useMutation(createUserAPI, {
    onSuccess: (data) => console.log("success: ", data),
    onError: (data) => console.log("error: ", data),
  });

  const joinClick = () => {
    createMutation({
      name: createUser.name,
      email: createUser.email,
      password: createUser.password,
    });
  };

  const joinClickByEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") joinClick();
  };

  const createInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.currentTarget;
    setCreateUser((prev) => {
      return { ...prev, [id]: value };
    });
  };

  return { createUser, createInfoChange, joinClick, joinClickByEnter };
};

export default useJoin;
