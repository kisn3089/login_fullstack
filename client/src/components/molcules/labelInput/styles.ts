import { fadeUp } from "@/styles/animation";
import { styled } from "styled-components";

export const LabelInputContainer = styled.div`
  position: relative;
  width: 80%;
  height: 60px;
  margin-bottom: 60px;
`;

export const Input = styled.input`
  width: 100%;
  height: 100%;
  font-size: 18px;
  font-weight: 500;
  color: #fff;
  border: 1px solid #de74ab;
  border-radius: 8px;
  background-color: transparent;
  outline: none;
  padding: 0 10px;
  letter-spacing: 1.1px;
  padding: 0 20px;
  transition: 0.3s ease-in-out;
`;
export const Label = styled.label<{ selected: boolean }>`
  position: absolute;
  width: 200px;
  top: 50%;
  transform: ${({ selected }) =>
    selected ? "translate3d(-10%, -240%, 0)" : "translateY(-50%)"};
  padding: 0 20px;
  font-size: 20px;
  font-weight: 500;
  color: ${({ selected }) => (selected ? "#4a82ea" : "#ccc")};
  pointer-events: none;
  transition: 0.3s ease-in-out;
`;

export const ValidComment = styled.div<{ $isConfirmPassword: boolean }>`
  display: flex;
  justify-content: end;
  color: ${({ $isConfirmPassword, theme }) =>
    $isConfirmPassword ? theme.colorSpace.red : "#56b8cf"};
  font-size: 18px;
  font-weight: 500;
  margin-top: 10px;
  animation: ${fadeUp} 0.3s ease-in-out;
`;
