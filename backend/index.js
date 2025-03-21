import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import fileUpload from "express-fileupload";
import { v2 as cloudinary } from "cloudinary";
import userRoute from "./routes/user.route.js";
import blogRoute from "./routes/blog.route.js";
import cookieParser from "cookie-parser";
import cors from "cors";
const app = express();
dotenv.config();
const PORT = process.env.PORT || 4000;
const MONGO_URL = process.env.MONGO_URI;
//middleware
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
    // allowedHeaders: [
    //   "Origin",
    //   "X-Requested-With",
    //   "Content-Type",
    //   "Authorization",
    // ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    // optionsSuccessStatus: 200,
  })
);
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);
// DB Code
try {
  mongoose.connect(MONGO_URL);
  console.log("Conntected to MongoDB");
} catch (error) {
  console.log(error);
}
// defining routes
app.use("/api/users", userRoute);
app.use("/api/blogs", blogRoute);
// Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_SECRET_KEY,
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
