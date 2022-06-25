import { useGetAllTodosQuery } from './todos.apislice';

export const useCustomGetAllTodosQuery = () => {
  const { data: { data, pagination, count } = [], ...rest } = useGetAllTodosQuery();

  return {
    data, pagination, count, ...rest
  };
};
