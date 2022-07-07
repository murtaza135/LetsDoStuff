import React, { createContext, useState, useCallback, useMemo, useRef } from 'react';
import PropTypes from 'prop-types';

const TodoFormContext = createContext();

// TODO https://www.youtube.com/watch?v=MpdFj8MEuJA
// TODO maybe regular callbacks and passing props is better and simpler, since it is only used across 2 layers
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
