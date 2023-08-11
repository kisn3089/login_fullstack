import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        padding: 0;
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
        color: #fff;
    }
`;
