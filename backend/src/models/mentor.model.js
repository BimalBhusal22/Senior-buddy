import mongoose from "mongoose";

const mentorSchema = mongoose.Schema(
  {
    imageUrl: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      enum: ["M", "F"],
      required: true,
    },
    present: {
      type: String,
      required: true,
    },
    past: {
      type: String,
      required: true,
    },
    phoneNo: {
      type: String,
      required: true,
      unique: true,
      match: [/^\d{10}$/, "Phone number must be of 10 digits"],
    },
    fbProfileLink: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      unique: true,
      match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"],
    },
  },
  { timestamps: true }
);

export const Mentor = mongoose.model("Mentor", mentorSchema);
