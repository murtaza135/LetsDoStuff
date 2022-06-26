import React, { createContext, useState, useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';

const TodoFormContext = createContext();

export const TodoFormProvider = ({ children }) => {
  const [todoDetails, setTodoDetails] = useState(null);
  const [todoFormState, setTodoFormState] = useState('add');

  const editTodo = useCallback((data) => {
    setTodoDetails(data);
    setTodoFormState('edit');
  }, []);

  const finishEditTodo = useCallback(() => {
    setTodoDetails(null);
    setTodoFormState('add');
  }, []);

  const values = useMemo(() => ({
    todoDetails,
    todoFormState,
    editTodo,
    finishEditTodo
  }), [todoDetails, todoFormState, editTodo, finishEditTodo]);

  return (
    <TodoFormContext.Provider value={values}>
      {children}
    </TodoFormContext.Provider>
  );
};

TodoFormProvider.defaultProps = {
  children: null
};

TodoFormProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default TodoFormContext;
