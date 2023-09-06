import React from "react";
import { Header, LoginMessage, MainSectionContainer, UserName } from "./styles";
// import { useRecoilValue } from "recoil";
// import { userRecoil } from "@/components/store/userRecoil";
import { useLocation, useNavigate } from "react-router-dom";

const MainSection = () => {
  // const userState = useRecoilValue(userRecoil);
  const location = useLocation();
  const navigate = useNavigate();

  const logoutClick = () => {
    navigate("/login", { replace: true });
  };

  const loginClick = () => {
    navigate("/login", { replace: true });
  };

  return (
    <MainSectionContainer>
      <Header>
        {location.state ? (
          <>
            <UserName>{location.state}</UserName>
            <UserName onClick={logoutClick}>LOGOUT</UserName>
          </>
        ) : (
          <UserName onClick={loginClick}>LOGIN</UserName>
        )}
      </Header>
      {!location.state && (
        <LoginMessage>
          <h1>로그인을 해주세요.</h1>
        </LoginMessage>
      )}
    </MainSectionContainer>
  );
};

export default MainSection;
