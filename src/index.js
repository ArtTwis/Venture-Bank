import dotenv from "dotenv";
import connectDB from "./db/index.js";
import app from "./app.js";

dotenv.config({
  path: "./env",
});

connectDB()
  .then(() => {
    // eslint-disable-next-line no-undef
    app.listen(process.env.PORT || 8000, () => {
      // eslint-disable-next-line no-undef
      console.log(`\nServer is listening on port : ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    // eslint-disable-next-line no-undef
    console.log("\nMongoDB connection failed !!", error);
  });
