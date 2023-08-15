import { getUser } from "@/lib/api/getUser";
import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";

const useLogin = () => {
  const [userInfo, setUserInfo] = useState({ email: "", pw: "" });

  const userInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setUserInfo((prev) => {
      return { ...prev, [id]: value };
    });
  };

  const { mutate: loginMutataion } = useMutation(getUser, {
    onSuccess: (data) => console.log("success: ", data),
    onError: (data) => console.log("error: ", data),
  });

  const passClick = () =>
    loginMutataion({ email: userInfo.email, pw: userInfo.pw });

  const passByEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter")
      loginMutataion({ email: userInfo.email, pw: userInfo.pw });
  };
  return { userInfo, userInfoChange, passClick, passByEnter };
};

export default useLogin;
