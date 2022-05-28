import express from 'express';
import userAuthRoutes from './user_auth/auth.routes.js';

const router = express.Router();

router.use('/auth', userAuthRoutes);

export default router;
