import mongoose from "mongoose";
import { DBName } from "../constant.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DBName}`);
    console.log(
      `\nMongoDB connected:!! Host: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("MONGO CONNECTION FAILED:", error);
    process.exit(1);
  }
};

export default connectDB;
