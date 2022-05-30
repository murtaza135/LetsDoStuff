import express from 'express';
import authRouter from './user_auth/auth.routes.js';
import userRouter from './user_auth/users.routes.js';
import todosRouter from './todos/todos.routes.js';

const router = express.Router();

router.use('/auth', authRouter);
router.use('/users', userRouter);
userRouter.use('/:userId/todos', todosRouter);
router.use('/todos', todosRouter);

export default router;
