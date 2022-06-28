import styled from 'styled-components';
import { widths, sizes, primaryTheme as theme } from 'constants';
import { noSelectMixin, hideScrollBarMixin } from 'global-components/other';

export const TodoItemGroupContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.85rem;
  width: 100%;
  max-width: ${widths.todoContainer};
`;

export const TodoMetaData = styled.div`
  ${noSelectMixin};
  max-width: ${widths.todoContainer};
  font-size: ${sizes.s};
  font-weight: bold;
  width: 100%;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  gap: 1rem;
`;

export const TodoMetaDataItem = styled.span`
  flex-shrink: 0;
`;

export const PillContainer = styled.span`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  gap: 0.5rem;
  border-left: 1px solid ${theme.medium};
  padding: 0.15rem 1rem;
  overflow-x: scroll;
  ${hideScrollBarMixin};
`;

export const TodoItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.35rem;
  width: 100%;
  & > * {width: 100%;}
`;
