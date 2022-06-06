import { css } from 'styled-components';

const variantCSS = (fontSize, textAlign = 'left') => css`
  font-size: ${fontSize};
  text-align: ${textAlign};
`;

const variants = {
  bigtitle: variantCSS('2.25rem', 'center'),
  title: variantCSS('1.8rem', 'center'),
  subtitle: variantCSS('1.3rem', 'center'),
  text: variantCSS('1.025rem', 'left')
};

export const getValidVariant = (variantToValidate) => {
  const isVariantValid = Object.keys(variants).some((variant) => (
    variant === variantToValidate
  ));

  return isVariantValid ? variantToValidate : 'text';
};

export default variants;
