import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition:0.3s;
  }
  html {
    background: var(--white-color);
  }
  *, button, input {
    border: 0;
    background: none;
    font-family: Helvetica, Arial, sans-serif;
    color: var(--black-create);
    transition: color .2s ease-out;
    text-decoration: none;
    font-size: 1.2rem;
  }

  ul{
    list-style: none;
  }
  :root {
    --primary-color: #e60023;
    --white-color: #fff;
    --black-create: #111;
    --gray-ligth: #efefef;
    --fade-duration:1s;
    --columns-transition-delay: 0.2s;
  }
`;
