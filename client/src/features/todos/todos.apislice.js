import { apiSlice } from 'features/api/api.slice';

export const todosApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addTodo: builder.mutation({
      query: (data) => ({
        url: '/todos',
        method: 'POST',
        body: { ...data }
      }),
      invalidatesTags: [{ type: 'Todo', id: 'LIST' }]
    }),
    getAllTodos: builder.query({
      query: () => '/todos',
      transformResponse: (response) => ({
        ...response,
        data: response.data.map((todo) => ({
          ...todo,
          deadlineDate: todo.deadlineDate ? new Date(todo.deadlineDate) : null,
          createdAt: todo.createdAt ? new Date(todo.createdAt) : null,
          updatedAt: todo.updatedAt ? new Date(todo.updatedAt) : null
        }))
      }),
      providesTags: (result) => [
        { type: 'Todo', id: 'LIST' },
        ...result.data.map(({ _id }) => ({ type: 'Todo', id: _id }))
      ]
    }),
    getTodo: builder.query({
      query: (data) => `/todos/${data._id}`,
      transformResponse: (response) => ({
        ...response,
        data: {
          ...response.data,
          deadlineDate: response.data.deadlineDate ? new Date(response.data.deadlineDate) : null,
          createdAt: response.data.createdAt ? new Date(response.data.createdAt) : null,
          updatedAt: response.data.updatedAt ? new Date(response.data.updatedAt) : null
        }
      }),
      providesTags: (result, error, args) => [{ type: 'Todo', id: args._id }]
    }),
    updateTodo: builder.mutation({
      query: (data) => ({
        url: `/todos/${data._id}`,
        method: 'PUT',
        body: { ...data }
      }),
      invalidatesTags: (result, error, args) => [{ type: 'Todo', id: args._id }]
    }),
    updateTodoToComplete: builder.mutation({
      query: (data) => ({
        url: `/todos/${data._id}`,
        method: 'PUT'
      }),
      invalidatesTags: (result, error, args) => [{ type: 'Todo', id: args._id }]
    }),
    deleteTodo: builder.mutation({
      query: (data) => ({
        url: `/todos/${data._id}`,
        method: 'DELETE'
      }),
      invalidatesTags: (result, error, args) => [{ type: 'Todo', id: args._id }]
    }),
  })
});

export const {
  useAddTodoMutation,
  useGetAllTodosQuery,
  useGetTodoQuery,
  useUpdateTodoMutation,
  useUpdateTodoToCompleteMutation,
  useDeleteTodoMutation
} = todosApiSlice;
