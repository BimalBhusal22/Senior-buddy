import mongoose from "mongoose";

const signUpSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    phoneNo: {
      type: String,
      required: true,
      unique: true,
      match: [/^\d{10}$/, "Phone number must be of 10 digits"],
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      unique: true,
      match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"],
    },
    password: {
      type: String,
      required: true,
    },
    wishList: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "WholeClz",
        unique: true,
      },
    ],
  },
  { timestamps: true }
);

export const SignUp = mongoose.model("SignUp", signUpSchema);
