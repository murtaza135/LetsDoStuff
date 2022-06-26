import React, { createContext, useState, useCallback, useMemo, useRef } from 'react';
import PropTypes from 'prop-types';

const TodoFormContext = createContext();

export const TodoFormProvider = ({ children }) => {
  const todoRef = useRef(null);
  const [todoDetails, setTodoDetails] = useState(null);
  const [todoFormState, setTodoFormState] = useState('add');

  const editTodo = useCallback((data, todoReference = null) => {
    setTodoDetails(data);
    setTodoFormState('edit');
    todoRef.current = todoReference;
  }, []);

  const finishEditTodo = useCallback(() => {
    setTodoDetails(null);
    setTodoFormState('add');
    // todoRef.current = null;
  }, []);

  const values = useMemo(() => ({
    todoDetails,
    todoFormState,
    todoRef,
    editTodo,
    finishEditTodo
  }), [todoDetails, todoFormState, todoRef, editTodo, finishEditTodo]);

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
