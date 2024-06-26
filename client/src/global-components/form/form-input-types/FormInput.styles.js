import styled from 'styled-components';
import { Field } from 'formik';
import { breakpoints, primaryTheme as theme } from 'constants';
import { marginMixin } from 'global-components/layout';

// @props $error
export const FormInputStyled = styled(Field)`
  ${marginMixin};
  color: ${theme.secondary};
  background-color: ${theme.primaryShaded};
  border: ${({ $error }) => (
    $error ? `2px solid ${theme.danger}` : `1px solid ${theme.secondary}`
  )};
  border-radius: 5px;
  outline: none !important;
  padding: 0.75rem;
  font-size: 1.1rem;

  &:focus {
    border: 
      ${({ $error }) => ($error ? `2px solid ${theme.danger}` : `2px solid ${theme.warning}`)};
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 100px ${theme.primaryShaded} inset !important;
    -webkit-text-fill-color: ${theme.secondary} !important;
  }

  @media screen and (max-width: ${breakpoints.sm}) {
    padding: 0.6rem;
    font-size: 1rem;
  }
`;
