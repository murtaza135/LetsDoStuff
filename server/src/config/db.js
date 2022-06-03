/* eslint-disable no-console */
import mongoose from 'mongoose';
import 'colors';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    console.log(`[LetsDoStuff] mongoDB connected: ${conn.connection.host}`.brightMagenta);
  } catch (error) {
    console.error(`[LetsDoStuff] mongoDB connection failed: ${error.message}`.red.bold);
    process.exit(1);
  }
};

export default connectDB;
