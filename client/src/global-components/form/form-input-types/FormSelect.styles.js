import styled from 'styled-components';
import { breakpoints, primaryTheme as theme } from 'constants';
import { marginMixin } from 'global-components/layout';

export const FormSelect = styled.select`
  ${marginMixin};
  background-color: ${theme.primaryShaded};
  border: ${({ $error }) => (
    $error ? `2px solid ${theme.danger}` : `1px solid ${theme.secondary}`
  )};
  color: ${theme.secondary};
  padding: 0.75rem;
  font-size: 1.1rem;
  border-radius: 5px;
  cursor: pointer;
  outline: none !important;

  &:focus {
    border: 
      ${({ $error }) => ($error ? `2px solid ${theme.danger}` : `2px solid ${theme.warning}`)};
  }

  & > * {
    font-size: 1.05rem;
  }

  @media screen and (max-width: ${breakpoints.sm}) {
    padding: 0.6rem;
    font-size: 1rem;
  }
`;
