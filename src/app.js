import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import logger from "../logger.js";
import morgan from "morgan";
import helmet from "helmet";
import { notFoundMiddleware } from "./middlewares/notFound.middleware.js";

const app = express();

const morganFormat = ":method :url :status :response-time ms";

/*==============
==Middlewares==
==============*/

app.use(
  cors({
    // eslint-disable-next-line no-undef
    origin: process.env.CORS_ORIGIN,
    allowedHeaders: "",
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" }));

app.use(
  express.urlencoded({
    extended: true,
    limit: "16kb",
  })
);

app.use(helmet());

app.use(
  morgan(morganFormat, {
    stream: {
      write: (message) => {
        const logObject = {
          method: message.split(" ")[0],
          url: message.split(" ")[1],
          status: message.split(" ")[2],
          responseTime: message.split(" ")[3],
        };
        logger.info(JSON.stringify(logObject));
      },
    },
  })
);

app.use(express.static("public"));

app.use(cookieParser());

//  Handle invalid request
app.use(notFoundMiddleware);

export default app;
