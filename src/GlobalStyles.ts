import { createGlobalStyle } from "styled-components";
import spidermanBg from "./assets/img/spiderman.jpg";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Open Sans', sans-serif;
    background: 
      linear-gradient(
        45deg,
        rgba(0, 110, 193, 0.3),
        rgba(0, 115, 138, 0.1)
      ) no-repeat fixed center,
      url(${spidermanBg}) no-repeat fixed center;
    background-size: cover;
  }
`;
