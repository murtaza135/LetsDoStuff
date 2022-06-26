import React, { createContext, useState, useCallback, useMemo, useRef } from 'react';
import PropTypes from 'prop-types';

const TodoFormContext = createContext();

export const TodoFormProvider = ({ children }) => {
  const todoItemRef = useRef(null);
  const [todoDetails, setTodoDetails] = useState(null);
  const [todoFormState, setTodoFormState] = useState('add');

  const editTodo = useCallback((data, todoItemReference = null) => {
    setTodoDetails(data);
    setTodoFormState('edit');
    todoItemRef.current = todoItemReference.current;
  }, [setTodoDetails, setTodoFormState, todoItemRef]);

  const finishEditTodo = useCallback(() => {
    setTodoDetails(null);
    setTodoFormState('add');
    todoItemRef.current = null;
  }, [setTodoDetails, setTodoFormState, todoItemRef]);

  const values = useMemo(() => ({
    todoDetails,
    todoFormState,
    todoItemRef,
    editTodo,
    finishEditTodo
  }), [todoDetails, todoFormState, todoItemRef, editTodo, finishEditTodo]);

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
