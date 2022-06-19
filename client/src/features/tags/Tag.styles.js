import React from 'react';
import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import { sizes, breakpoints, primaryTheme as theme } from 'constants';

export const TagContainer = styled.div.attrs((props) => ({
  ...props,
  $color: props.$color
}))`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  gap: 0.65rem;
  background-color: ${({ $color }) => (theme[$color] || $color || theme.warning)};
  color: ${theme.primaryShaded};
  border: none;
  border-radius: 7px;
  padding: 0.3rem 0.45rem;
  cursor: default;
`;

export const TagText = styled.p`
  color: ${theme.primaryShaded};
  font-size: ${({ $small }) => ($small ? '0.8em' : sizes.s)};
  font-weight: bold;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  @media screen and (max-width: ${breakpoints.xs}) {
    font-size: ${({ $small }) => ($small ? '0.7em' : '0.9rem')};
  }
`;

export const TagCloseIcon = styled(({ children, ...props }) => (
  React.createElement(FaTimes, props, children)
))`
  font-size: ${sizes.xs};
  color: ${theme.primaryShaded};
  cursor: pointer;
`;
