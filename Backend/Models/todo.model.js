import mongoose from "mongoose";

const todoschema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },

  completed: {
    type: Boolean,
    required: false,
  },
});

const Todo = mongoose.model("Todo", todoschema);
export default Todo;
