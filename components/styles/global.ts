import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    font-size: 10px;
    background: rgba(247, 247, 247, 1);
    height: 100vh;
  }
  body {
    font-size: 1.5rem;
    height: 100vh;
    position: relative;
    overflow: auto;
  }
  :root {
    --step-up-5: 2em;
    --step-up-4: 1.7511em;
    --step-up-3: 1.5157em;
    --step-up-2: 1.3195em;
    --step-up-1: 1.1487em;
    /* baseline: 1em */
    --step-down-1: 0.8706em;
    --step-down-2: 0.7579em;
    --step-down-3: 0.6599em;
    --step-down-4: 0.5745em;
    --step-down-5: 0.5em;
    /* Colors */
    --header: rgb(0,0,0);
  }
  @font-face {
    font-family: 'pt-sans';
    src: url('/static/PT_Sans-Web-Regular.woff')
    format('woff2');
    font-weight: normal; 
    font-style: normal;
  }
  @font-face {
    font-family: 'pt-sans';
    src: url('/static/PT_Sans-Web-Bold.woff')
    format('woff2');
    font-weight: bold; 
    font-style: normal;
  }
  body, h1, h2, h3, h4, h5, h6, p, ol, ul, input[type=text], input[type=email], button {
    margin: 0;
    padding: 0;
    font-weight: 500;
    font-family: "pt-sans"
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  ol, ul {
    list-style: none;
  }
  img {
    max-width: 100%;
    height: auto;
  }
  button {
    background: none;
    border: none;
    box-shadow: 0 0 0 1pt rgb(0, 0, 0, 0.3);

    :hover {
      cursor: pointer;
    }
    :focus {
      outline: none;
    }
  }
  input {
    border: none;
    box-shadow: 0 0 0 1pt rgb(0, 0, 0, 0.3);
  }
  /* Links */
  a {
    text-decoration: none;
    color: inherit;
  &.active {
      text-decoration: none;
    }
  }
`;
