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
  border: 1px solid ${theme.secondary};
  border-radius: 5px;
  outline: none !important;
  padding: 0.75rem 0.7rem;

  @media screen and (max-width: ${breakpoints.sm}) {
    padding: 0.6rem;
  }
`;

export const TagsField = styled.input.attrs((props) => ({
  ...props,
  autoComplete: 'off'
}))`
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
