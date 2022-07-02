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
import errorHandler from './error_handling/error_handler/errorHandler.js';
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
app.use(xss());
app.use(hpp());
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      connectSrc: ["'self'"]
    },
  })
);

// Use Routes
app.get('/_health', (req, res) => res.status(200).json({ success: true }));
app.use('/api', routes);

// Serve Client
if (process.env.NODE_ENV === 'production') {
  const buildPath = path.join(__dirname, '..', '..', 'client', 'build');
  app.use(express.static(buildPath));
  app.get('*', (req, res) => res.sendFile(path.resolve(buildPath, 'index.html')));
} else {
  app.use((req, res, next) => next(new PageNotFoundError()));
}

// Error handling middleware
app.use(errorHandler.handleErrors);

export default app;
