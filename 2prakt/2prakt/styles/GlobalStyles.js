import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Arial', sans-serif;
  }

  body {
    background: linear-gradient(to right, #6a11cb, #331652);
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyle;