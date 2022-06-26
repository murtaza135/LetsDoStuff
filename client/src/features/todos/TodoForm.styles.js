import React from 'react';
import styled from 'styled-components';
import { breakpoints, primaryTheme as theme } from 'constants';
import AnimateHeight from 'react-animate-height';
import { Form as FormikForm } from 'global-components/form';
import { FaTimes } from 'react-icons/fa';

export const Form = styled(FormikForm)`
  position: relative;
`;

export const CloseButton = styled(({ children, ...props }) => (
  React.createElement(FaTimes, props, children)
))`
  width: auto;
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 1.6rem;
  padding: 0.3rem;
  border: 1px solid ${theme.secondary};
  border-radius: 50%;
  cursor: pointer;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.75;
  }
`;

export const TodoFormDataContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.5rem;

  @media screen and (max-width: ${breakpoints.s}) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const TodoFormButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.5rem;
  width: 100%;

  @media screen and (max-width: ${breakpoints.s}) {
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
  }
`;

export const AnimateHeightContainer = styled(AnimateHeight)`
  & > div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;
