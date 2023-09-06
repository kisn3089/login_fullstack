import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { GlobalStyle } from "./styles/GlobalStyle.ts";
import { ThemeProvider } from "styled-components";
import { colorSpace } from "./styles/ColorSpace.ts";
import { RecoilRoot } from "recoil";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RecoilRoot>
    <ThemeProvider theme={{ colorSpace }}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </RecoilRoot>
);
