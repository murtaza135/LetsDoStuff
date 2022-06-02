import express from 'express';
import authRouter from './auth/auth.routes.js';
import userRouter from './users/users.routes.js';
import todosRouter from './todos/todos.routes.js';

const router = express.Router();

router.use('/auth', authRouter);
router.use('/users', userRouter);
router.use('/todos', todosRouter);

export default router;
