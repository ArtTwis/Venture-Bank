import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const mongoDbConnectionInstance = await mongoose.connect(
      // eslint-disable-next-line no-undef
      `${process.env.MONGODB_URI}/${process.env.DB_NAME}`
    );

    // eslint-disable-next-line no-undef
    console.log(
      `Connected to MongoDB successfully, DB Host : ${mongoDbConnectionInstance.connection.host}`
    );
  } catch (error) {
    // eslint-disable-next-line no-undef
    console.log(`\nError while connecting to db : ${error}`);
    // eslint-disable-next-line no-undef
    process.exit(1);
  }
};

export default connectDB;
