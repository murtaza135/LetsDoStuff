import asyncHandler from 'express-async-handler';
import todosModel from './todos.model.js';
import BaseError from '../../error_handling/errors/baseError.js';
import pick from '../../utils/pick.js';

// @desc Get all todos for a specific user
// @route GET /api/users/:userId/todos
// @access Private
export const getTodosByUserId = asyncHandler(async (req, res, next) => {

});

// @desc Get the specified todo
// @route GET /api/todos/:id
// @access Private
export const getTodoById = asyncHandler(async (req, res, next) => {

});

// @desc Add a new todo
// @route POST /api/users/:userId/todos
// @access Private
export const addTodo = asyncHandler(async (req, res, next) => {

});

// @desc Update the specified todo
// @route PUT /api/todos/:id
// @access Private
export const updateTodo = asyncHandler(async (req, res, next) => {

});

// @desc Update the specified todo to done
// @route PUT /api/todos/:id/done
// @access Private
export const udpateTodoToDone = asyncHandler(async (req, res, next) => {

});

// @desc Delete the specified todo
// @route DELETE /api/todos/:id
// @access Private
export const deleteTodo = asyncHandler(async (req, res, next) => {

});
