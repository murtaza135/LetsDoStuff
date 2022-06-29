import styled from 'styled-components';
import { breakpoints, primaryTheme as theme } from 'constants';

export const TagsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  flex-wrap: wrap;
  gap: 0.75rem;
  color: ${theme.secondary};
  background-color: ${theme.primaryShaded};
  border: ${({ $error }) => (
    $error ? `2px solid ${theme.danger}` : `1px solid ${theme.secondary}`
  )};
  border-radius: 5px;
  outline: none !important;
  padding: 0.75rem 0.7rem;

  &:focus-within {
    border: 
      ${({ $error }) => ($error ? `2px solid ${theme.danger}` : `2px solid ${theme.warning}`)};
  }

  @media screen and (max-width: ${breakpoints.sm}) {
    padding: 0.6rem;
  }
`;

export const TagsInnerInput = styled.input`
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
