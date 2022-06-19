import { createGlobalStyle } from 'styled-components';
import { primaryTheme as theme, typography } from 'constants';

const CSSReset = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body {
    height: 100%;
    min-height: 100vh;
    font-family: ${typography.primary};
    line-height: 1.5;
    background: ${theme.primary};
    color: ${theme.secondary};
  }

  body #root {
    display: flex;
    flex-direction: column;
    min-height: 100%;
  }

  a {
    text-decoration: none;
  }

  button {
    font-family: ${typography.primary};
    line-height: 1.5;
  }

  ul {
    list-style: none;
  }

  img {
    max-width: 100%;
  }

  textarea, input {
    font-family: ${typography.primary};
  }
`;

export default CSSReset;
