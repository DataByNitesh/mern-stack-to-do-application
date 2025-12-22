import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import TodoRoute from "./Routes/todo.routes.js";
import UserRoute from "./Routes/user.routes.js"

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4002;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/todo", TodoRoute);
app.use("/user", UserRoute)

// Test route
app.get("/", (req, res) => {
  res.send("Hello this is backend");
});

// DB + Server
try {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log("DB IS CONNECTED");

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
} catch (error) {
  console.error("DB CONNECTION FAILED");
  console.error(error.message);
}
