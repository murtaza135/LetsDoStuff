import styled from 'styled-components';
import { primaryTheme as theme } from 'constants';

export const FormSelect = styled.select`
  background-color: ${theme.primaryShaded};
  border: ${({ $error }) => (
    $error ? `2px solid ${theme.danger}` : `1px solid ${theme.secondary}`
  )};
  color: ${theme.secondary};
  padding: 10px;
  font-size: 1.1rem;
  border-radius: 5px;
  cursor: pointer;
  outline: none !important;

  &:focus {
    border: ${({ $error }) => (
    $error ? `2px solid ${theme.danger}` : `2px solid ${theme.warning}`
  )};
  }

  & > * {
    font-size: 1.05rem;
  }
`;
