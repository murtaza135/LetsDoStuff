import { useMemo, useContext } from 'react';
import { parseDateString } from 'utils/date.utils';
import { useGetAllTodosQuery } from './todos.apislice';
import TodoFormContext from './TodoFormContext';

export const useTodoFormContext = () => (
  useContext(TodoFormContext)
);

export const useCustomGetAllTodosQuery = () => {
  const { data: { data, pagination, count } = [], ...rest } = useGetAllTodosQuery();

  const todos = useMemo(() => data?.map((item) => ({
    ...item,
    deadlineDate: parseDateString(item.deadlineDate),
    createdAt: parseDateString(item.createdAt),
    updatedAt: parseDateString(item.updatedAt)
  })), [data]);

  const sortedTodos = useMemo(() => (todos
    ? todos.sort((a, b) => b.createdAt - a.createdAt)
    : []
  ), [todos]);

  return useMemo(() => ({
    data: sortedTodos, pagination, count, ...rest
  }), [sortedTodos, pagination, count, rest]);
};
