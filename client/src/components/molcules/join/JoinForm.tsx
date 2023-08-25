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
  ValidateContainer,
} from "../loginForm/styles";
import LabelInput from "../labelInput/LabelInput";
import TextAtoms from "@/components/atoms/Text/TextAtoms";
import { colorSpace } from "@/styles/ColorSpace";
import * as Svg from "../../icons/index";
import { useMutation } from "@tanstack/react-query";
import { createUserAPI } from "@/lib/api/createUserAPI";
import { AxiosError } from "axios";

const JoinForm = () => {
  const { inputFocus, focusHandler, blurHandler } = useForm();
  const { createUser, createInfoChange } = useJoin();

  const emailValidation = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  const disabledValid = !(
    createUser.email.match(emailValidation) &&
    createUser.password.length > 7 &&
    createUser.name?.trim() !== ""
  );

  const {
    mutate: createMutation,
    isError: isJoinError,
    error: joinError,
  } = useMutation(createUserAPI, {
    onSuccess: (data) => console.log("success: ", data),
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
        </FormLayout>
        {isJoinError && (
          <ValidateContainer>
            <Svg.Warning />
            <TextAtoms
              content={joinError.response?.data || ""}
              color={colorSpace.red}
              fontSize="18px"
              fontWeight="400"
            />
          </ValidateContainer>
        )}
      </FormBackground>
    </FormContainer>
  );
};

export default React.memo(JoinForm);
