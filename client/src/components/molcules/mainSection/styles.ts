import { keyframes, styled } from "styled-components";

const slideUp = keyframes`
    0% {
        transform: translateX(120%);
    }
    100% {
        transform: translateX(0);
    }
`;

export const MainSectionContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colorSpace.black};
  color: ${({ theme }) => theme.colorSpace.white};
`;

export const Header = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 0 20px;
`;

export const UserName = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 140px;
  height: 40px;
  border: ${({ theme }) => `1px solid ${theme.colorSpace.gray300}`};
  border-radius: 8px;
  font-size: 18px;
  color: ${({ theme }) => theme.colorSpace.white};
  background-color: ${({ theme }) => theme.colorSpace.black};
  animation: ${slideUp} 0.7s ease-in-out;
  cursor: pointer;
  transition: 0.3s;
  margin-right: 10px;

  &:hover {
    background-color: ${({ theme }) => theme.colorSpace.gray200};
  }
`;

export const LoginMessage = styled.div`
  width: 100%;
  height: calc(100vh - 100px);
  display: flex;
  justify-content: center;
  align-items: center;
`;
