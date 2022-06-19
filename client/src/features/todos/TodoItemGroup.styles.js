import styled from 'styled-components';
import { widths, sizes } from 'constants';

export const TodoItemGroupContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.85rem;
  width: 100%;
`;

export const TodoMetaData = styled.div`
  max-width: ${widths.todoContainer};
  font-size: ${sizes.s};
  font-weight: bold;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;

  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const TodoItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.35rem;
  width: 100%;
  & > * {width: 100%;}
`;
