import styled from 'styled-components';
import { widths, sizes } from 'constants';
import { noSelectMixin } from 'global-components/other';

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
  justify-content: space-between;
  align-items: center;
  text-align: center;
`;

export const TodoItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.35rem;
  width: 100%;
  & > * {width: 100%;}
`;
