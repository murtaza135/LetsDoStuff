import { useMemo } from 'react';
import { parseDateString } from 'utils/date.utils';
import { useGetAllTodosQuery } from './todos.apislice';

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

  return {
    data: sortedTodos, pagination, count, ...rest
  };
};
