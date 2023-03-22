/* Logic */
import { createGlobalStyle } from "styled-components";

export const globalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;

    @media screen and (min-width: 1900px) {
      font-size: 87.45%;
    }
    @media screen and (min-width: 2500px) {
      font-size: 100%;
    }

    /* Scroll style */
    scroll-behavior: smooth;
    scroll-padding-top: 1.5vh;
  }

  i {
    font-style: italic;
  }
`;

export default globalStyle;
