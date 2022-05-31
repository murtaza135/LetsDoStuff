import asyncHandler from 'express-async-handler';
import todosModel from './todos.model.js';
import BaseError from '../../error_handling/errors/baseError.js';
import pick from '../../utils/pick.js';

// @desc Get all todos for logged in user
// @route GET /api/todos
// @access Private
export const getTodos = asyncHandler(async (req, res, next) => {
  const todos = await todosModel.find({ userId: req.user._id });

  return res.status(200).json({
    success: true,
    data: todos,
    count: todos.length
  });
});

// @desc Get the specified todo if it belongs to the logged in user
// @route GET /api/todos/:id
// @access Private
export const getTodo = asyncHandler(async (req, res, next) => {
  const todo = await todosModel.findById(req.params.id);

  // TODO move into separate db_validator module
  if (todo.userId.toString() !== req.user.id.toString()) {
    return next(new BaseError('You do not have access to this todo', 500, null));
  }

  return res.status(200).json({
    success: true,
    data: todo
  });
});

// @desc Add a new todo for the logged in user
// @route POST /api/todos
// @access Private
export const addTodo = asyncHandler(async (req, res, next) => {
  const newTodoDetails = pick(req.body, [
    'userId', 'title', 'description', 'deadlineDate', 'tags', 'important'
  ]);

  const todo = await todosModel.create({
    userId: req.user._id,
    ...newTodoDetails
  });

  return res.status(201).json({
    success: true,
    data: todo
  });
});

// @desc Update the specified todo if it belongs to the logged in user
// @route PUT /api/todos/:id
// @access Private
export const updateTodo = asyncHandler(async (req, res, next) => {
  const todo = await todosModel.findById(req.params.id);

  // TODO move into separate db_validator module
  if (todo.userId.toString() !== req.user.id.toString()) {
    return next(new BaseError('You do not have access to this todo', 500, null));
  }

  const newTodoDetails = pick(req.body, [
    'userId', 'complete', 'title', 'description', 'deadlineDate', 'tags', 'important'
  ]);

  const updatedTodo = await todosModel.findByIdAndUpdate(
    req.params.id,
    newTodoDetails,
    { new: true, runValidators: true }
  );

  return res.status(200).json({
    success: true,
    data: updatedTodo
  });
});

// @desc Update the specified todo to complete if it belongs to the logged in user
// @route PUT /api/todos/:id/complete
// @access Private
export const udpateTodoToComplete = asyncHandler(async (req, res, next) => {
  const todo = await todosModel.findById(req.params.id);

  // TODO move into separate db_validator module
  if (todo.userId.toString() !== req.user.id.toString()) {
    return next(new BaseError('You do not have access to this todo', 500, null));
  }

  const updatedTodo = await todosModel.findByIdAndUpdate(
    req.params.id,
    { complete: true },
    { new: true, runValidators: true }
  );

  return res.status(200).json({
    success: true,
    data: updatedTodo
  });
});

// @desc Delete the specified todo if it belongs to the logged in user
// @route DELETE /api/todos/:id
// @access Private
export const deleteTodo = asyncHandler(async (req, res, next) => {
  const todo = await todosModel.findById(req.params.id);

  // TODO move into separate db_validator module
  if (todo.userId.toString() !== req.user.id.toString()) {
    return next(new BaseError('You do not have access to this todo', 500, null));
  }

  await todosModel.findByIdAndDelete(req.params.id);
  return res.status(200).json({ success: true, data: null });
});
