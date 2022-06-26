import { css } from 'styled-components';
import { primaryTheme as theme } from 'constants';

const variantCSS = (backgroundColor, color) => css`
  background-color: ${backgroundColor};
  color: ${color};
`;

const variants = {
  primary: variantCSS(theme.primary, theme.secondary),
  secondary: variantCSS(theme.secondary, theme.primaryShaded),
  danger: variantCSS(theme.danger, theme.primaryShaded),
  warning: variantCSS(theme.warning, theme.primaryShaded),
  success: variantCSS(theme.success, theme.primaryShaded)
};

const getVariantCSS = (variant) => variants[variant] || variants.secondary;

export default getVariantCSS;
