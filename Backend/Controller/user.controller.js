import User from "../Models/user.model.js";
import {z} from zod;
const userschema=z.object({
    email:z.string(),email({messgae:"Invalid email"}),
    username:z.string().min(3).max(20),
    password:z.string().min(8).max(20)
})
export const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    const newUser = new User({
      username,
      email,
      password,
    });

    await newUser.save();

    return res.status(201).json({
      message: "User registered successfully",
      newUser,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Registration failed",
    });
  }
};

export const login = (req, res) => {
  console.log("user login");
};

export const logout = (req, res) => {
  console.log("user logout");
};
