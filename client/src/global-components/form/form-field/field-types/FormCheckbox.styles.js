import styled from 'styled-components';
import { Field } from 'formik';
import { sizes, breakpoints, primaryTheme as theme } from 'constants';

export const FormCheckboxContainer = styled.div`
  display: inline;
  color: ${theme.secondary};
  background-color: ${theme.primaryShaded};
  border: ${({ $error }) => (
    $error ? `2px solid ${theme.danger}` : `1px solid ${theme.secondary}`
  )};
  border-radius: 5px;
  outline: none !important;
  padding: 0.75rem;
  font-size: 1.1rem;
  width: ${({ $stretch }) => ($stretch ? '100%' : 'auto')};
`;

export const FormCheckboxLabelContainer = styled.label`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  gap: 0.5rem;
  cursor: pointer;

  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const FormCheckboxInput = styled.input`
  -webkit-appearance: none;
  background-color: ${theme.primaryShaded};
  border: 2px solid ${theme.secondary};
  color: ${theme.secondary};
  padding: 10px;
  border-radius: 3px;
  position: relative;
  cursor: pointer;

  &:hover {
    opacity: 0.875;
  }

  &:checked:after {
    content: "✓";
    position: absolute;
    top: 0px;
    left: 4px;
    font-size: 15px;
    font-weight: bold;
  }
`;

export const FormCheckboxLabel = styled.p`
  font-size: 1.1rem;
`;
