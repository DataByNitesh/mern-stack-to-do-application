import Todo from "../Models/todo.model.js";

export const createtodo = async (req, res) => {
  try {
    const todo = new Todo({
      text: req.body.text,
      completed: req.body.completed,
    });

    const newTodo = await todo.save();

    res.status(201).json({
      message: "Todo created successfully",
      newTodo,
    });
  } catch (error) {
    console.error(error); // 👈 THIS IS CRITICAL
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getTodos = async(req,res)=>{
  try {
    const Todos=await Todo.find()
    res.status(201).json({
      message:"Todo fetch successfully .",Todos
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      message:"Error occuring messages"
    })
  }
}

export const updateTodo= async(req,res)=>{
  try {
    const todo = await Todo.findByIdAndUpdate(req.params.id,req.body,{
      new:true,
    })
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error occuring messages",
    });
  }
}

export const deleteTodo= async(req,res)=>{
  try {
    await Todo.findByIdAndDelete(req.params.id)
       res.status(201).json({
         message: "Todo delted successfully .",
       });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "error deleting the todo",
    });
  }
}
