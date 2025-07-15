import mongoose from "mongoose";

const mentorSchema = mongoose.Schema(
  {
    imageUrl: {
      type: String,
      required: [true, "Mentor image URL is a required field"],
    },
    name: {
      type: String,
      required: [true, "Name is a required field"],
    },
    gender: {
      type: String,
      enum: ["M", "F"],
      required: [true, "Gender is a required field"],
    },
    present: {
      type: String,
      required: [true, "Present is a required field"],
    },
    past: {
      type: String,
      required: [true, "Past is a required field"],
    },
    phoneNo: {
      type: String,
      required: [true, "Phone Number is a required field"],
      unique: true,
      match: [/^\d{10}$/, "Phone number must be of 10 digits"],
    },
    fbProfileLink: {
      type: String,
      required: [true, "fb probile link is a required field"],
    },
    email: {
      type: String,
      required: [true, "Email is a required field"],
      lowercase: true,
      unique: true,
      match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"],
    },
  },
  { timestamps: true }
);

export const Mentor = mongoose.model("Mentor", mentorSchema);
