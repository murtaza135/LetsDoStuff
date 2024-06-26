import asyncHandler from 'express-async-handler';
import todosModel from './todos.model.js';
import pick from '../../utils/pick.js';
import { ensureItemExists, ensureItemBelongsToUser } from '../../utils/dbValidator.js';
import ApiFeatures from '../../utils/apiFeatures.js';
import { removeDuplicateStringsFromArrayAndCapitalise } from './todos.utils.js';

// @desc Add a new todo for the logged in user
// @route POST /api/todos
// @access Private
export const addTodo = asyncHandler(async (req, res, next) => {
  const newTodoDetails = pick(req.body, [
    'userId', 'title', 'description', 'deadlineDate', 'tags', 'important'
  ]);

  const todo = await todosModel.create({
    ...newTodoDetails,
    userId: req.user._id,
    tags: removeDuplicateStringsFromArrayAndCapitalise(newTodoDetails.tags)
  });

  return res.status(201).json({
    success: true,
    data: todo.getData()
  });
});

// @desc Get all todos for logged in user
// @route GET /api/todos
// @access Private
export const getTodos = asyncHandler(async (req, res, next) => {
  const queryParams = { ...req.query, userId: req.user._id };
  const apiFeatures = new ApiFeatures(queryParams, todosModel);
  await apiFeatures.applyAllAdvancedFeatures();
  const data = await apiFeatures.getQueryData();
  return res.status(200).json({ success: true, ...data });
});

// @desc Get the specified todo if it belongs to the logged in user
// @route GET /api/todos/:id
// @access Private
export const getTodo = asyncHandler(async (req, res, next) => {
  const todo = await todosModel.findById(req.params.id);
  ensureItemExists(todo, 'Todo does not exist');
  ensureItemBelongsToUser(
    todo,
    req.user.id.toString(),
    'Todo does not exist',
    'You do not have authorisation to access this todo'
  );

  return res.status(200).json({
    success: true,
    data: todo.getData()
  });
});

// @desc Update the specified todo if it belongs to the logged in user
// @route PUT /api/todos/:id
// @access Private
export const updateTodo = asyncHandler(async (req, res, next) => {
  const todo = await todosModel.findById(req.params.id);
  ensureItemExists(todo, 'Todo does not exist');
  ensureItemBelongsToUser(
    todo,
    req.user.id.toString(),
    'Todo does not exist',
    'You do not have authorisation to access this todo'
  );

  const newTodoDetails = pick(req.body, [
    'userId', 'complete', 'title', 'description', 'deadlineDate', 'tags', 'important'
  ]);

  const updatedTodo = await todosModel.findByIdAndUpdate(
    req.params.id,
    {
      ...newTodoDetails,
      tags: removeDuplicateStringsFromArrayAndCapitalise(newTodoDetails.tags)
    },
    { new: true, runValidators: true }
  );

  return res.status(200).json({
    success: true,
    data: updatedTodo.getData()
  });
});

// @desc Update the specified todo to complete if it belongs to the logged in user
// @route PUT /api/todos/:id/complete
// @access Private
export const udpateTodoToComplete = asyncHandler(async (req, res, next) => {
  const todo = await todosModel.findById(req.params.id);
  ensureItemExists(todo, 'Todo does not exist');
  ensureItemBelongsToUser(
    todo,
    req.user.id.toString(),
    'Todo does not exist',
    'You do not have authorisation to access this todo'
  );

  const updatedTodo = await todosModel.findByIdAndUpdate(
    req.params.id,
    { complete: true },
    { new: true, runValidators: true }
  );

  return res.status(200).json({
    success: true,
    data: updatedTodo.getData()
  });
});

// @desc Update the specified todo to NOT complete if it belongs to the logged in user
// @route PUT /api/todos/:id/incomplete
// @access Private
export const udpateTodoToNotComplete = asyncHandler(async (req, res, next) => {
  const todo = await todosModel.findById(req.params.id);
  ensureItemExists(todo, 'Todo does not exist');
  ensureItemBelongsToUser(
    todo,
    req.user.id.toString(),
    'Todo does not exist',
    'You do not have authorisation to access this todo'
  );

  const updatedTodo = await todosModel.findByIdAndUpdate(
    req.params.id,
    { complete: false },
    { new: true, runValidators: true }
  );

  return res.status(200).json({
    success: true,
    data: updatedTodo.getData()
  });
});

// @desc Delete the specified todo if it belongs to the logged in user
// @route DELETE /api/todos/:id
// @access Private
export const deleteTodo = asyncHandler(async (req, res, next) => {
  const todo = await todosModel.findById(req.params.id);
  ensureItemExists(todo, 'Todo does not exist');
  ensureItemBelongsToUser(
    todo,
    req.user.id.toString(),
    'Todo does not exist',
    'You do not have authorisation to access this todo'
  );

  await todosModel.findByIdAndDelete(req.params.id);
  return res.status(200).json({ success: true, data: null });
});
