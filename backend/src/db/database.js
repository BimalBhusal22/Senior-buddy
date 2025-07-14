import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      `\n Bimal, MongoDB connected successfully !! DB HOSt: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("Bimal, MongoDB Connection Error:", error);
    process.exit(1);
  }
};

export default connectDB;
