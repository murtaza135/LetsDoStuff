import React from 'react';
import styled from 'styled-components';
import { sizes, primaryTheme as theme } from 'constants';

export const TodoItemContainer = styled.div`
  max-width: ${({ $stretch }) => ($stretch ? '1000rem' : '37.5rem')};
  & > * { width: 100%; }
  border-radius: 10px;
  background-color: ${theme.primaryShaded};
  padding: 1rem 3.5rem 1rem 2.5rem;

  position: relative;
  display: flex;
  flex-direction: column;
`;

export const TodoItemTitle = styled.h1`
  font-size: ${sizes.m};
  font-weight: bold;
  cursor: default;
`;

export const TodoItemDate = styled.p`
  font-size: ${sizes.s};
  transform: translateY(-1px);

  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const TodoItemDescription = styled.p`

`;

export const TodoItemImportant = styled.div.attrs(() => ({
  children: ['!', <span className="tooltiptext">Important</span>]
}))`
  font-size: ${sizes.m};
  background-color: ${theme.primaryShaded};
  color: ${theme.danger};
  border: 3px solid ${theme.danger};
  border-radius: 50%;
  height: 35px;
  width: 35px;
  
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  position: absolute;
  top: -10px;
  left: -10px;

  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  & > .tooltiptext {
    visibility: hidden;
    background-color: ${theme.medium};
    color: ${theme.light};
    text-align: center;
    padding: 0.3rem 0.5rem;
    border-radius: 6px;
    font-size: 0.8rem;

    /* Position the tooltip text */
    position: absolute;
    z-index: 1;
    bottom: 125%;
    left: 50%;
    margin-left: -35.5px;
    margin-bottom: 3px;

    /* Fade in tooltip */
    opacity: 0;
    transition: opacity 0.3s;
  }

  /* Tooltip arrow */
  & > .tooltiptext::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: ${theme.medium} transparent transparent transparent;
  }

  &:hover > .tooltiptext {
    visibility: visible;
    opacity: 1;
  }
`;

export const TagsContainer = styled.div`
  display: flex;
  gap: 0.75rem;
  margin-top: 0.7rem;
`;

export const IconsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 0.4rem;
  width: auto;

  position: absolute;
  top: 0.7rem;
  right: 0.7rem;

`;

export const Icon = styled(({ element, children, ...props }) => (
  React.createElement(element, props, children)
))`
  font-size: ${sizes.s};
  transition: color 0.3s ease;
  cursor: pointer;
  
  &:hover {
    color: ${theme.warning};
    opacity: 0.8;
  }
`;
