import React from 'react';
import styled from 'styled-components';
import { widths, sizes, breakpoints, primaryTheme as theme } from 'constants';
import { noSelectMixin } from 'global-components/other';

export const TodoItemContainer = styled.div`
  max-width: ${({ $stretch }) => ($stretch ? '1000rem' : widths.todoContainer)};
  border-radius: 10px;
  background-color: ${theme.primaryShaded};
  padding: 1rem 5rem 1rem 2.5rem;

  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  border: ${({ $important }) => (
    $important ? `1px solid ${theme.danger}` : `1px solid ${theme.secondary}`
  )};
`;

export const TodoDataContainer = styled.div`
  width: 100%;
`;

export const TodoItemTitle = styled.h1`
  font-size: ${sizes.m};
  font-weight: bold;
  cursor: default;
`;

export const TodoItemDate = styled.p`
  ${noSelectMixin};
  font-size: ${sizes.s};
  transform: translateY(-1px);
`;

export const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 0.25rem;

  @media screen and (max-width: ${breakpoints.xs}) {
    gap: 0.5rem;
  }
`;

export const IconsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 0.35rem;
  width: auto;

  position: absolute;
  top: 0.7rem;
  right: 0.7rem;

`;

export const Icon = styled(({ element, children, ...props }) => (
  React.createElement(element, props, children)
))`
  font-size: ${({ $size }) => $size || sizes.s};
  color: ${({ $color }) => $color || theme.secondary};
  transition: opacity 0.25s ease;
  cursor: pointer;
  
  &:hover {
    opacity: 0.6;
  }
`;

export const TodoItemImportant = styled.div.attrs(() => ({
  children: ['!', <span key="1" className="tooltiptext">Important</span>]
}))`
  ${noSelectMixin};
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
