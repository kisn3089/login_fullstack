import { LoginType } from "@/types/login.type";
import React, { useState } from "react";

const useLogin = () => {
  const [userInfo, setUserInfo] = useState<LoginType>({
    email: "",
    password: "",
  });

  const userInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setUserInfo((prev) => {
      return { ...prev, [id]: value };
    });
  };

  return { userInfo, userInfoChange };
};

export default useLogin;
