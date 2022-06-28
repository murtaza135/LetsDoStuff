import styled, { css } from 'styled-components';
import getVariantCSS from './Pill.variants';

export const Pill = styled.span`
  ${({ $variant, $active }) => getVariantCSS($variant, $active)};
  padding: 0.2rem 0.75rem 0.15rem;
  border-radius: 1000px;
  cursor: pointer;
  transition: opacity 0.2s ease;
  white-space: nowrap;
  font-size: 0.9rem;
  font-weight: bold;

  ${({ $active }) => (!$active && (css`
    &:hover {
      opacity: 0.7;
    }
  `))};
`;
