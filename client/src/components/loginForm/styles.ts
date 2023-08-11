import { styled } from "styled-components";

export const FormContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormBackground = styled.div`
  width: 70%;
  max-width: 1500px;
  height: 50%;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormLayout = styled.div`
  width: 90%;
  max-width: 730px;
  height: 70%;
  border-radius: 30px;
  backdrop-filter: brightness(88%);
`;

export const TitleContainer = styled.div`
  width: 100%;
  height: 30%;
`;

export const Text = styled.span`
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

export const InfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 70%;
  gap: 20%;
`;

export const Input = styled.input`
  width: 80%;
  height: 60px;
  font-size: 18px;
  font-weight: 500;
  color: #fff;
  border: 1px solid #de74ab;
  border-radius: 10px;
  background-color: transparent;
  outline: none;
  padding: 0 10px;
  letter-spacing: 1.1px;
  transition: 0.3s ease-in-out;
  &:focus {
    transform: translateY(-10%);
  }
`;

export const Button = styled.button`
  width: 200px;
  height: 50px;
  background-color: #4a82ea;
  border-radius: 10px;
  border: none;
  outline: none;
  font-size: 20px;
  font-weight: 500;
  color: #fff;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  text-transform: uppercase;
  letter-spacing: 1.1;
  margin-bottom: 20px;

  &:hover {
    background-color: #de74ab;
    transform: translateY(-20%);
  }
`;
