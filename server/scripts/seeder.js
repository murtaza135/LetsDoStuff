/* eslint-disable no-console */

// general imports
import dotenv from 'dotenv';
import path from 'path';
import url from 'url';
import connectDB from '../src/config/db.js';
import 'colors';

// import models
import usersModel from '../src/features/users/users.model.js';
import todosModel from '../src/features/todos/todos.model.js';

// import data
import users from '../src/_data/users.data.js';
import todos from '../src/_data/todos.data.js';

// initialise
const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
dotenv.config({ path: path.join(__dirname, '..', 'src', 'config', 'config.env') });
connectDB();

const importData = async () => {
  try {
    await usersModel.deleteMany();
    await todosModel.deleteMany();
    await usersModel.create(users);
    await todosModel.create(todos);
    console.log('Data imported...'.green);
    process.exit();
  } catch (error) {
    console.error(error.stack.red.bold);
    process.exit(1);
  }
};

const deleteData = async () => {
  try {
    await usersModel.deleteMany();
    await todosModel.deleteMany();
    console.log('Data deleted...'.red);
    process.exit();
  } catch (error) {
    console.error(error.stack.red.bold);
    process.exit(1);
  }
};

switch (process.argv[2]) {
  case '-d':
    deleteData();
    break;

  default:
    importData();
}
