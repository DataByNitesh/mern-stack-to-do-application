import express from "express";
import { createtodo, getTodos,updateTodo,deleteTodo } from "../Controller/todo.controller.js";


const router = express.Router();

router.post("/create", createtodo);
router.get("/fetch", getTodos);
router.put("/update/:id",updateTodo)
router.delete("/delete/:id",deleteTodo)

export default router;
