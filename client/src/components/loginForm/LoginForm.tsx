import React, { useState } from "react";
import {
  FormContainer,
  FormBackground,
  FormLayout,
  TitleContainer,
  Text,
  Input,
  InfoContainer,
  Button,
} from "./styles";
import { getUser } from "@/lib/api/getUser";
import { useMutation } from "@tanstack/react-query";

const LoginForm = () => {
  const [userInfo, setUserInfo] = useState({ id: "", pw: "" });

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

  const passClick = () => loginMutataion({ id: userInfo.id, pw: userInfo.pw });

  const passByEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") loginMutataion({ id: userInfo.id, pw: userInfo.pw });
  };

  return (
    <FormContainer>
      <FormBackground>
        <FormLayout>
          <TitleContainer>
            <Text>LOGIN</Text>
          </TitleContainer>
          <InfoContainer>
            <Input
              type="text"
              value={userInfo.id}
              id="id"
              onChange={userInfoChange}
              autoComplete="off"
              onKeyDown={passByEnter}
              data-dark={userInfo.id}
            />
            <Input
              type="password"
              value={userInfo.pw}
              id="pw"
              onChange={userInfoChange}
              autoComplete="off"
              onKeyDown={passByEnter}
            />
            <Button onClick={passClick}>pass</Button>
          </InfoContainer>
        </FormLayout>
      </FormBackground>
    </FormContainer>
  );
};

export default LoginForm;
