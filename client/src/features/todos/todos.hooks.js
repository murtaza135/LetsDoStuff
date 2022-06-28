import { parseDateString } from 'utils/date.utils';
import { useGetAllTodosQuery } from './todos.apislice';

export const useCustomGetAllTodosQuery = () => {
  const { data: { data, pagination, count } = [], ...rest } = useGetAllTodosQuery();

  const todos = data?.map((item) => ({
    ...item,
    deadlineDate: parseDateString(item.deadlineDate),
    createdAt: parseDateString(item.createdAt),
    updatedAt: parseDateString(item.updatedAt)
  }));

  const sortedTodos = todos
    ? todos.sort((a, b) => b.createdAt - a.createdAt)
    : [];

  return {
    data: sortedTodos, pagination, count, ...rest
  };
};
