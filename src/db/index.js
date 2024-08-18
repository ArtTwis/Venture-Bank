import mongoose from "mongoose";
import { DB_NAME } from "../constant/common.js";

const connectDB = async () => {
  try {
    const mongoDbConnectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );

    console.log(
      `Connected to MongoDB successfully, DB Host : ${mongoDbConnectionInstance.connection.host}`
    );
  } catch (error) {
    console.log(`\nError while connecting to db : ${error}`);
    process.exit(1);
  }
};

export default connectDB;
