import React from 'react';
import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import { sizes, breakpoints, primaryTheme as theme } from 'constants';

export const TagsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  flex-wrap: wrap;
  gap: 0.75rem;
  color: ${theme.secondary};
  background-color: ${theme.primaryShaded};
  border: 1px solid ${theme.secondary};
  border-radius: 5px;
  outline: none !important;
  padding: 0.75rem 0.7rem;

  @media screen and (max-width: ${breakpoints.sm}) {
    padding: 0.6rem;
  }
`;

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
  border-radius: 5px;
  padding: 0.35rem 0.5rem;
  cursor: default;
`;

export const Tag = styled.p`
  color: ${theme.primaryShaded};
  font-weight: bold;
  cursor: default;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const TagCloseIcon = styled(({ children, ...props }) => (
  React.createElement(FaTimes, props, children)
))`
  font-size: ${sizes.xs};
  color: ${theme.primaryShaded};
  cursor: pointer;
`;

export const TagsField = styled.input.attrs((props) => ({
  ...props,
  autoComplete: 'off'
}))`
  flex-grow: 1;
  width: 4rem;
  height: 2rem;
  color: ${theme.secondary};
  background-color: transparent;
  border: none;
  outline: none !important;
  padding: 0.25rem 0;
  font-size: 1.1rem;
`;
