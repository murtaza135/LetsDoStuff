import styled from 'styled-components';
import { breakpoints, primaryTheme as theme } from 'constants';

export const FormDateContainer = styled.div`
  & input[name=${({ name }) => (name)}] {
    color: ${theme.secondary};
    background-color: ${theme.primaryShaded};
    border: 
      ${({ $error }) => ($error ? `2px solid ${theme.danger}` : `1px solid ${theme.secondary}`)};
    border-radius: 5px;
    outline: none !important;
    padding: 0.75rem;
    width: 100%;
    font-size: 1.1rem;
    cursor: default;

    &:focus {
      border:
        ${({ $error }) => ($error ? `2px solid ${theme.danger}` : `2px solid ${theme.warning}`)};
    }

    @media screen and (max-width: ${breakpoints.sm}) {
      padding: 0.6rem;
      font-size: 1rem;
    }
  }
`;
