/* eslint-disable no-console */
import app from './app.js';
import 'colors';

const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => {
  console.log(
    `[LetsDoStuff] server running: ${process.env.NODE_ENV} mode on port ${PORT}`
      .brightMagenta
  );
});

// TODO check out https://blog.heroku.com/best-practices-nodejs-errors
process.on('uncaughtException', (error) => {
  // TODO log to external file using something like pino or winston
  console.log(`Uncaught Exception Error: ${error.message}`.red);
  server.close(() => process.exit(1));
});

process.on('unhandledRejection', (error, promise) => {
  // TODO log to external file using something like pino or winston
  console.log(`Unhandled Rejection Error: ${error.message}`.red);
  server.close(() => process.exit(1));
});
