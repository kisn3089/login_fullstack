import { fadeDown } from "@/styles/animation";
import { keyframes, styled } from "styled-components";

const fadeAfter = keyframes`
  0% {
    opacity: 1;
  }

  70% {
    opacity: 1;
    transform: translateY(0);
  }

  100% {
    opacity: 0;
    transform: translateY(-100%);
  }
`;

export const FormContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    to right top,
    #2e282b,
    #3d2f3a,
    #48374c,
    #4f4160,
    #504d77,
    #42517b,
    #30547d,
    #18577d,
    #0a4f67,
    #124551,
    #1c3a3d,
    #212f2e
  );
  min-width: 900px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormBackground = styled.div<{ $isJoin: boolean }>`
  position: relative;
  width: 70%;
  max-width: 1500px;
  height: ${({ $isJoin: isJoin }) => (isJoin ? "910px" : "45%")};
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 5%;
`;

export const NoticeBySuccess = styled.div`
  position: absolute;
  top: -15%;
  width: 90%;
  max-width: 730px;
  height: 65px;
  border-radius: 30px;
  backdrop-filter: brightness(88%);
  animation: ${fadeAfter} 3s ease-in-out forwards;
  padding: 0 20px;
  display: flex;
  align-items: center;
  gap: 3%;
  svg {
    width: 30px;
    stroke: ${({ theme }) => theme.colorSpace.aqua};
  }
`;

export const FormLayout = styled.div`
  width: 90%;
  max-width: 730px;
  height: 90%;
  max-height: 850px;
  border-radius: 30px;
  backdrop-filter: brightness(88%);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const TitleContainer = styled.div`
  width: 100%;
  height: 20%;
`;

export const TitleText = styled.span`
  width: 100%;
  height: 100%;
  font-size: 48px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  color: #4a82ea;
`;

export const InfoContainer = styled.div<{ $isJoin: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: ${({ $isJoin: isJoin }) => (isJoin ? "60%" : "50%")};
`;

export const CenterBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
`;

export const Button = styled.button`
  width: 200px;
  height: 100%;
  background-color: #4a82ea;
  border-radius: 10px;
  border: none;
  outline: none;
  font-size: 20px;
  font-weight: 500;
  color: #fff;
  cursor: pointer;
  transition: 0.5s ease-in-out;
  text-transform: uppercase;
  letter-spacing: 1.1px;
  margin-bottom: 20px;
  box-shadow: 0px 0px 10px 5px #3a3a3a;

  &:hover {
    background-color: ${({ theme }) => theme.colorSpace.pink};
    transform: translateY(-10%);
  }

  &:disabled {
    height: 8px;
    width: 120px;
    background-color: #fff;
    box-shadow: 0px 0px 10px 3px #fff;
    cursor: default;
    font-size: 0;
  }
`;

export const ValidateContainer = styled.div`
  position: absolute;
  bottom: -5%;
  width: 90%;
  max-width: 730px;
  height: 65px;
  border-radius: 30px;
  backdrop-filter: brightness(88%);
  animation: ${fadeDown} 0.4s ease-in-out;
  padding: 0 20px;
  display: flex;
  align-items: center;
  gap: 3%;
  svg {
    width: 30px;
    stroke: ${({ theme }) => theme.colorSpace.pink};
  }
`;

export const ToJoinContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 50px;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  transition: 0.5s ease-in-out;

  &:hover {
    transform: translateY(20%);
    ::before {
      transform: translateY(0);
    }
    span {
      color: #222;
    }
  }

  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    background-color: #fff;
    width: 100%;
    height: 100%;
    transform: translateY(-100%);
    transition: 0.5s ease-in-out;
    z-index: -1;
  }

  span {
    text-align: center;
    text-decoration-line: underline;
    transition: 0.3s ease-in-out;
    z-index: 1;
  }
`;
