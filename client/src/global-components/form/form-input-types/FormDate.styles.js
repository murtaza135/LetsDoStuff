import styled from 'styled-components';
import { breakpoints, primaryTheme as theme } from 'constants';
import { marginMixin } from 'global-components/layout';

export const FormDateContainer = styled.div`
  & input[name=${({ name }) => (name)}] {
    ${marginMixin};
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

  & button[aria-label="Close"] {
    padding-right: 0.65rem;
    transition: opacity 0.25s ease;

    &:hover {
      opacity: 0.6;
    }
  }

  & button[aria-label="Close"]::after {
    background-color: transparent;
    border: 2px solid ${theme.secondary};
    color: ${theme.secondary};
    font-size: 1rem;
    font-weight: bold;
    height: 1.1rem;
    width: 1.1rem;
    text-align: center;
  }
`;
