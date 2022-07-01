/* eslint-disable no-param-reassign */
import { apiSlice } from 'features/api/api.slice';
import { setAlert } from 'features/alert/alert.slice';

export const todosApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addTodo: builder.mutation({
      query: (data) => ({
        url: '/todos',
        method: 'POST',
        body: { ...data }
      }),
      transformResponse: (response) => response.data,
      invalidatesTags: [{ type: 'Todo', id: 'LIST' }],
      async onQueryStarted(values, { dispatch, queryFulfilled }) {
        const result = dispatch(
          todosApiSlice.util.updateQueryData('getAllTodos', undefined, (draft) => {
            draft.data.unshift({
              ...values,
              _id: '0',
              deadlineDate: values.deadlineDate?.toISOString(),
              createdAt: new Date().toISOString()
            });
          })
        );

        try {
          await queryFulfilled;
        } catch (error) {
          result.undo();
          const message = error.error.data.message || 'Internal Server Error';
          dispatch(setAlert({ message, variant: 'danger' }));
        }
      }
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
      transformResponse: (response) => response.data,
      providesTags: (result, error, args) => [{ type: 'Todo', id: args._id }]
    }),
    updateTodo: builder.mutation({
      query: (data) => ({
        url: `/todos/${data._id}`,
        method: 'PUT',
        body: { ...data }
      }),
      transformResponse: (response) => response.data,
      invalidatesTags: (result, error, args) => [{ type: 'Todo', id: args._id }],
      async onQueryStarted(values, { dispatch, queryFulfilled }) {
        const result = dispatch(
          todosApiSlice.util.updateQueryData('getAllTodos', undefined, (draft) => {
            const newValues = { ...values, deadlineDate: values.deadlineDate?.toISOString() };
            const currentTodo = draft.data.find((todo) => todo._id === values._id);
            Object.assign(currentTodo, newValues);
          })
        );

        try {
          await queryFulfilled;
        } catch (error) {
          result.undo();
          const message = error.error.data.message || 'Internal Server Error';
          dispatch(setAlert({ message, variant: 'danger' }));
        }
      }
    }),
    updateTodoToComplete: builder.mutation({
      query: (data) => ({
        url: `/todos/${data._id}/complete`,
        method: 'PUT'
      }),
      transformResponse: (response) => response.data,
      invalidatesTags: (result, error, args) => [{ type: 'Todo', id: args._id }],
      async onQueryStarted({ _id }, { dispatch, queryFulfilled }) {
        const result = dispatch(
          todosApiSlice.util.updateQueryData('getAllTodos', undefined, (draft) => {
            const currentTodo = draft.data.find((todo) => todo._id === _id);
            if (currentTodo) currentTodo.complete = true;
          })
        );

        try {
          await queryFulfilled;
        } catch (error) {
          result.undo();
          const message = error.error.data.message || 'Internal Server Error';
          dispatch(setAlert({ message, variant: 'danger' }));
        }
      }
    }),
    updateTodoToIncomplete: builder.mutation({
      query: (data) => ({
        url: `/todos/${data._id}/incomplete`,
        method: 'PUT'
      }),
      transformResponse: (response) => response.data,
      invalidatesTags: (result, error, args) => [{ type: 'Todo', id: args._id }],
      async onQueryStarted({ _id }, { dispatch, queryFulfilled }) {
        const result = dispatch(
          todosApiSlice.util.updateQueryData('getAllTodos', undefined, (draft) => {
            const currentTodo = draft.data.find((todo) => todo._id === _id);
            if (currentTodo) currentTodo.complete = false;
          })
        );

        try {
          await queryFulfilled;
        } catch (error) {
          result.undo();
          const message = error.error.data.message || 'Internal Server Error';
          dispatch(setAlert({ message, variant: 'danger' }));
        }
      }
    }),
    deleteTodo: builder.mutation({
      query: (data) => ({
        url: `/todos/${data._id}`,
        method: 'DELETE'
      }),
      transformResponse: (response) => response.data,
      invalidatesTags: (result, error, args) => [{ type: 'Todo', id: args._id }],
      async onQueryStarted({ _id }, { dispatch, queryFulfilled }) {
        const result = dispatch(
          todosApiSlice.util.updateQueryData('getAllTodos', undefined, (draft) => {
            const remainingTodos = draft.data.filter((todo) => todo._id !== _id) ?? [];
            draft.data = remainingTodos;
          })
        );

        try {
          await queryFulfilled;
        } catch (error) {
          result.undo();
          const message = error.error.data.message || 'Internal Server Error';
          dispatch(setAlert({ message, variant: 'danger' }));
        }
      }
    }),
  })
});

export const {
  useAddTodoMutation,
  useGetAllTodosQuery,
  useGetTodoQuery,
  useUpdateTodoMutation,
  useUpdateTodoToCompleteMutation,
  useUpdateTodoToIncompleteMutation,
  useDeleteTodoMutation
} = todosApiSlice;
