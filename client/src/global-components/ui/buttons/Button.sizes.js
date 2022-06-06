import { css } from 'styled-components';

const sizeCSS = (padding, fontSize) => css`
  padding: ${padding};
  font-size: ${fontSize};
`;

const sizes = {
  s: sizeCSS('0.5rem 1.1rem', '1rem'),
  m: sizeCSS('0.6rem 2.2rem', '1.1rem'),
  l: sizeCSS('0.8rem 3.3rem', '1.2rem'),
};

export const getValidSize = (sizeToValidate) => {
  const isSizeValid = Object.keys(sizes).some((size) => (
    size === sizeToValidate
  ));

  return isSizeValid ? sizeToValidate : 'm';
};

export default sizes;
