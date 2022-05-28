import express from 'express';
import dotenv from 'dotenv';
import mongoSanitize from 'express-mongo-sanitize';
import helmet from 'helmet';
import xss from 'xss-clean';
import hpp from 'hpp';
import morgan from 'morgan';
import path from 'path';
import url from 'url';
import connectDB from './config/db.js';
import routes from './features/routes.js';
import errorHandler from './error_handling/errorHandler.js';
import PageNotFoundError from './error_handling/errors/pageNotFoundError.js';

// Initial setup
const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
dotenv.config({ path: path.join(__dirname, 'config', 'config.env') });
connectDB();

// Express app
const app = express();

// Static folder setup
app.use(express.static(path.join(__dirname, 'public')));

// Middlware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
app.use(express.json());
app.use(mongoSanitize());
app.use(helmet());
app.use(xss());
app.use(hpp());

// Use Routes
app.use('/api', routes);
app.use((req, res) => res.status(500).json({ message: 'Error' }));
// app.use((req, res, next) => next(new PageNotFoundError()));

// Error handling middleware
app.use((error, req, res, next) => errorHandler.handleErrors(error, res));

export default app;
