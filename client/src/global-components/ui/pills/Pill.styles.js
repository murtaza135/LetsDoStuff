import styled from 'styled-components';
import getVariantCSS from './Pill.variants';

export const Pill = styled.span`
  ${({ $variant, $active }) => getVariantCSS($variant, $active)};
  padding: 0.29rem 0.75rem 0.25rem;
  border-radius: 1000px;
  cursor: pointer;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.7;
  }

  margin-left: 0.5rem;
`;
