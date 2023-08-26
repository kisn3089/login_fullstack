import { keyframes, styled } from "styled-components";

const slideUp = keyframes`
    0% {
        transform: translateY(70%);
    }
    100% {
        transform: translateY(0);
    }
`;

export const MainSectionContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colorSpace.black};
  color: ${({ theme }) => theme.colorSpace.white};

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10%;

  :nth-child(1) {
    animation: ${slideUp} 0.6s ease-in-out;
  }

  :nth-child(2) {
    animation: ${slideUp} 0.6s ease-in-out 0.1s;
  }
`;

export const Block = styled.div`
  width: 20%;
  height: 20%;
  background-color: ${({ theme }) => theme.colorSpace.white};
  border-radius: 20px;
`;
