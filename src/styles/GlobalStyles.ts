import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    box-sizing: border-box;
  }
  html {
    background: var(--white-color);
  }
  *, button, input {
    border: 0;
    background: none;
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



  /* animations */
/* 
  .animate-before{
    transform: translateY(40px);
    opacity: 0;
    pointer-events: none;
  }
  .animate-after{
    transform: translateY(-40px);
    opacity: 0;
    pointer-events: none;
  } */

  .active {
    visibility: visible;
    max-height: unset;
    pointer-events: auto;
  }
`;
