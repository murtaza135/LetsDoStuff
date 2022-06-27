import React from 'react';
import styled from 'styled-components';
import { sizes, widths } from 'constants';
import { FaTimes } from 'react-icons/fa';
import { noSelectMixin } from 'global-components/other';
import { marginMixin } from 'global-components/layout';
import getVariantCSS from './Alert.variants';

export const AlertContainer = styled.div`
  margin-bottom: 1.5rem;
  ${marginMixin};
  ${({ $variant }) => getVariantCSS($variant)};
  max-width: ${widths.alertContainer};
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  border: none;
  border-radius: 7px;
  padding: 1.2rem 1.5rem;
  cursor: default;
`;

export const AlertText = styled.p`
  ${noSelectMixin};
  flex-grow: 1;
  font-size: ${sizes.m};
  font-weight: bold;
`;

export const AlertCloseIcon = styled(({ children, ...props }) => (
  React.createElement(FaTimes, props, children)
))`
  width: auto;
  flex-shrink: 0;
  font-size: ${sizes.m};
  cursor: pointer;
  transition: opacity 0.25s ease, transform 0.5s ease;

  &:hover {
    opacity: 0.7;
    transform: rotate(180deg);
  }

  @media screen and (max-width: 292px) {
    display: none;
  }
`;
