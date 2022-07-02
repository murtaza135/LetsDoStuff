/* eslint-disable no-console */
import app from './app.js';
import 'colors';

const PORT = process.env.PORT || 443;
const server = app.listen(PORT, () => {
  console.log(
    `[LetsDoStuff] server running: ${process.env.NODE_ENV} mode on port ${PORT}`
      .brightMagenta
  );
});

process.on('uncaughtException', (error) => {
  console.log(`Uncaught Exception Error: ${error.message}`.red);
  server.close(() => process.exit(1));
  setTimeout(() => process.exit(1), 1000).unref();
});

process.on('unhandledRejection', (error) => {
  console.log(`Unhandled Rejection Error: ${error.message}`.red);
  server.close(() => process.exit(1));
  setTimeout(() => process.exit(1), 1000).unref();
});
