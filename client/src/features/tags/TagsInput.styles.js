import styled from 'styled-components';
import { breakpoints, primaryTheme as theme } from 'constants';

export const TagsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
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

export const Tag = styled.p.attrs((props) => ({
  ...props,
  $color: props.$color
}))`
  background-color: ${({ $color }) => (theme[$color] || $color || theme.warning)};
  color: ${theme.dark};
  font-weight: bold;
  border: none;
  border-radius: 5px;
  outline: none !important;
  padding: 0.25rem 0.4rem;
  cursor: default;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const TagsField = styled.input`
  width: 100%;
  height: 2rem;
  color: ${theme.secondary};
  background-color: transparent;
  border: none;
  outline: none !important;
  padding: 0.25rem 0.4rem;
  font-size: 1.1rem;
`;
