import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

html {
  box-sizing: border-box;
}

*, ::after, ::before {
  box-sizing: inherit;
}

body {
    display: flex;
    flex-direction: column;
    font-family: "Montserrat", sans-serif;
    margin: 0 auto;
    max-width: 900px;
    background: rgba(219, 216, 216, 0.733);
    font-size: 15px;
}
`;
