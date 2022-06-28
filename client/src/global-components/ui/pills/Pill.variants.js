import { css } from 'styled-components';
import { primaryTheme as theme } from 'constants';

const variantCSS = (borderColor, backgroundColor, color) => css`
  border: 1px solid ${borderColor};
  background-color: ${backgroundColor};
  color: ${color};
`;

const variants = {
  nonActive: {
    primary: variantCSS(theme.primary, 'transparent', theme.primary),
    secondary: variantCSS(theme.secondary, 'transparent', theme.secondary),
    danger: variantCSS(theme.danger, 'transparent', theme.danger),
    warning: variantCSS(theme.warning, 'transparent', theme.warning),
    success: variantCSS(theme.success, 'transparent', theme.success)
  },
  active: {
    primary: variantCSS(theme.primary, theme.primary, theme.secondary),
    secondary: variantCSS(theme.secondary, theme.secondary, theme.primaryShaded),
    danger: variantCSS(theme.danger, theme.danger, theme.primaryShaded),
    warning: variantCSS(theme.warning, theme.warning, theme.primaryShaded),
    success: variantCSS(theme.success, theme.success, theme.primaryShaded)
  }
};

const getVariantCSS = (variant, isActive) => {
  const isActiveKey = isActive ? 'active' : 'nonActive';
  return variants[isActiveKey][variant] || variants.nonActive.secondary;
};

export default getVariantCSS;
