import dotenv from "dotenv";
import connectDB from "./db/database.js";

dotenv.config({
  path: "./env",
});

connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.log(`Bimal, Express Server Running Error: ${error}`);
    });
    app.listen(process.env.PORT || 8000, () => {
      console.log(
        `Bimal, Express Server is Running at port: ${process.env.PORT || 8000}`
      );
    });
  })
  .catch((error) => {
    console.log("[2nd] Bimal, MongoDB Connection Error:", error);
  });
