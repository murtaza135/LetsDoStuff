import styled from 'styled-components';
import { sizes, primaryTheme as theme } from 'constants';

export const TodoItemContainer = styled.div`
  max-width: ${({ $stretch }) => ($stretch ? '1000rem' : '37.5rem')};
  & > * { width: 100%; }
  border-radius: 10px;
  background-color: ${theme.primaryShaded};
  padding: 1rem 2.5rem;

  display: flex;
  flex-direction: column;
`;

export const TodoItemTitle = styled.h1`
  font-size: ${sizes.m};
  font-weight: bold;
`;

export const TodoItemDate = styled.p`
  font-size: ${sizes.s};
  transform: translateY(-1px);
`;

export const TodoItemDescription = styled.p`

`;

export const TodoItemImportant = styled.div`

`;

export const TagsContainer = styled.div`
  display: flex;
  gap: 0.75rem;
  margin-top: 0.7rem;
`;
