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
      providesTags: (result) => [
        { type: 'Todo', id: 'LIST' },
        ...result ? result.data.map(({ _id }) => ({ type: 'Todo', id: _id })) : []
      ]
    }),
    getTodo: builder.query({
      query: (data) => `/todos/${data._id}`,
      transformResponse: (response) => ({
        ...response.data,
        // tags: response.data.tags.map((tag) => ({value: tag, _id: uuidv4()}))
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
