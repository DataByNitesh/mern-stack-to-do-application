import mongoose from "mongoose";

const userschema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  token:{
    type:String
  }
});

const User = mongoose.model("User", userschema);

export default User;
