import { keyframes } from "styled-components";

export const fadeDown = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-30%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const fadeUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-10%);
  } 
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;
