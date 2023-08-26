import React from "react";
import useForm from "@/hooks/useForm";
import useJoin from "@/hooks/useJoin";
import {
  Button,
  CenterBtn,
  FormBackground,
  FormContainer,
  FormLayout,
  InfoContainer,
  TitleContainer,
  TitleText,
  ToJoinContainer,
  ValidateContainer,
} from "../loginForm/styles";
import LabelInput from "../labelInput/LabelInput";
import TextAtoms from "@/components/atoms/Text/TextAtoms";
import * as Svg from "../../icons/index";
import { useMutation } from "@tanstack/react-query";
import { createUserAPI } from "@/lib/api/createUserAPI";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";

const JoinForm = () => {
  const { inputFocus, focusHandler, blurHandler } = useForm();
  const { createUser, createInfoChange } = useJoin();
  const navigator = useNavigate();

  const emailValidation = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  const disabledValid = !(
    createUser.email.match(emailValidation) &&
    createUser.password.length > 7 &&
    createUser.password === createUser.confirmPassword &&
    createUser.name?.trim() !== ""
  );

  const {
    mutate: createMutation,
    isError,
    error,
  } = useMutation(createUserAPI, {
    onSuccess: () => navigator("/login", { replace: true, state: "success" }),
    onError: (data: AxiosError<string>) =>
      console.log("error: ", data.response?.data),
  });

  const joinClick = () => {
    createMutation({
      name: createUser.name,
      email: createUser.email,
      password: createUser.password,
    });
  };

  const pressEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") joinClick();
  };

  return (
    <FormContainer>
      <FormBackground $isJoin={true}>
        <FormLayout>
          <TitleContainer>
            <TitleText>JOIN</TitleText>
          </TitleContainer>
          <InfoContainer $isJoin={true}>
            <LabelInput
              title="Name"
              id="name"
              inputType="text"
              inputValue={createUser.name}
              inputFocus={inputFocus}
              focusHandler={focusHandler}
              blurHandler={blurHandler}
              inputChange={createInfoChange}
              enterSubmit={pressEnter}
            />
            <LabelInput
              title="Email"
              id="email"
              inputType="text"
              inputValue={createUser.email}
              inputFocus={inputFocus}
              focusHandler={focusHandler}
              blurHandler={blurHandler}
              inputChange={createInfoChange}
              enterSubmit={pressEnter}
            />
            <LabelInput
              title="Password"
              id="password"
              inputType="password"
              inputValue={createUser.password}
              inputFocus={inputFocus}
              focusHandler={focusHandler}
              blurHandler={blurHandler}
              inputChange={createInfoChange}
              enterSubmit={pressEnter}
            />
            <LabelInput
              title="Confirm Password"
              id="confirmPassword"
              inputType="password"
              inputValue={createUser.confirmPassword}
              inputFocus={inputFocus}
              isSamepassword={
                createUser.confirmPassword === "" ||
                createUser.password === createUser.confirmPassword
              }
              focusHandler={focusHandler}
              blurHandler={blurHandler}
              inputChange={createInfoChange}
              enterSubmit={pressEnter}
            />
          </InfoContainer>
          <CenterBtn>
            <Button onClick={joinClick} disabled={disabledValid}>
              {disabledValid ? "" : "join"}
            </Button>
          </CenterBtn>
          <ToJoinContainer onClick={() => navigator("/login")}>
            <TextAtoms content="로그인하기" fontSize="16px" />
          </ToJoinContainer>
        </FormLayout>
        {isError && (
          <ValidateContainer>
            <Svg.Warning />
            <TextAtoms
              content={error.response?.data || ""}
              // color={colorSpace.red}
              color="#de74ab"
              fontSize="18px"
              fontWeight="500"
            />
          </ValidateContainer>
        )}
      </FormBackground>
    </FormContainer>
  );
};

export default React.memo(JoinForm);
