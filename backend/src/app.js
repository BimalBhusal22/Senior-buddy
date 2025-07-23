import cookieParser from "cookie-parser";
import express from "express";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
  })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

//routes import
import userRouter from "./routes/user.routes.js";
import adminRouter from "./routes/admin.routes.js";
import becomeAMentorRouter from "./routes/becomeAMentor.routes.js";

//routes declaration
app.use("/api/v1/user", userRouter);
app.use("/api/v1/admin", adminRouter);
app.use("/api/v1/become_a_mentor", becomeAMentorRouter);

//http://localhost:7000/api/v1/users/sign_up
//http://localhost:7000/api/v1/users/sign_in

export { app };
