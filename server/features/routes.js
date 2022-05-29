import express from 'express';
import authRoutes from './user_auth/auth.routes.js';
import userRoutes from './user_auth/users.routes.js';

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/users', userRoutes);

export default router;
