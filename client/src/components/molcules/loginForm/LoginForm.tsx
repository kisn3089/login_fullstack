import useForm from "@/hooks/useForm";
import useLogin from "@/hooks/useLogin";
import React from "react";
import {
  Button,
  CenterBtn,
  FormBackground,
  FormContainer,
  FormLayout,
  InfoContainer,
  NoticeBySuccess,
  TitleContainer,
  TitleText,
  ToJoinContainer,
  ValidateContainer,
} from "./styles";
import LabelInput from "../labelInput/LabelInput";
import TextAtoms from "@/components/atoms/Text/TextAtoms";
import * as Svg from "../../icons/index";
import { colorSpace } from "@/styles/ColorSpace";
import { useMutation } from "@tanstack/react-query";
import { loginAPI } from "@/lib/api/getUserAPI";
import { AxiosError } from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const LoginForm = () => {
  const { userInfo, userInfoChange } = useLogin();
  const { inputFocus, focusHandler, blurHandler } = useForm();
  const navigator = useNavigate();
  const location = useLocation();

  const emailValidation = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  const disabledValid = !(
    userInfo.email.match(emailValidation) && userInfo.password.length > 7
  );

  const {
    mutate: loginMutataion,
    isError,
    error,
  } = useMutation(loginAPI, {
    onSuccess: (data) => console.log("success: ", data),
    onError: (data: AxiosError<string>) =>
      console.log("error: ", data.response?.data),
  });

  const passClick = () =>
    loginMutataion({ email: userInfo.email, password: userInfo.password });

  const pressEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") passClick();
  };

  return (
    <FormContainer>
      <FormBackground $isJoin={false}>
        {location.state && (
          <NoticeBySuccess>
            <Svg.Warning />
            <TextAtoms
              content="회원가입을 축하드립니다. 👾"
              color={colorSpace.aqua}
              fontSize="18px"
              fontWeight="400"
            />
          </NoticeBySuccess>
        )}
        <FormLayout>
          <TitleContainer>
            <TitleText>LOGIN</TitleText>
          </TitleContainer>
          <InfoContainer $isJoin={false}>
            <LabelInput
              title="Email"
              id="email"
              inputType="text"
              inputValue={userInfo.email}
              inputFocus={inputFocus}
              focusHandler={focusHandler}
              blurHandler={blurHandler}
              inputChange={userInfoChange}
              enterSubmit={pressEnter}
            />
            <LabelInput
              title="Password"
              id="password"
              inputType="password"
              inputValue={userInfo.password}
              inputFocus={inputFocus}
              focusHandler={focusHandler}
              blurHandler={blurHandler}
              inputChange={userInfoChange}
              enterSubmit={pressEnter}
            />
          </InfoContainer>
          <CenterBtn>
            <Button onClick={passClick} disabled={disabledValid}>
              {disabledValid ? "" : "pass"}
            </Button>
          </CenterBtn>
          <ToJoinContainer onClick={() => navigator("/join")}>
            <TextAtoms content="가입하기" fontSize="16px" />
          </ToJoinContainer>
        </FormLayout>
        {isError && (
          <ValidateContainer>
            <Svg.Warning />
            <TextAtoms
              content={error.response?.data || ""}
              color={colorSpace.pink}
              fontSize="18px"
              fontWeight="400"
            />
          </ValidateContainer>
        )}
      </FormBackground>
    </FormContainer>
  );
};

export default React.memo(LoginForm);
