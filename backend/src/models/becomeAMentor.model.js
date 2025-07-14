import mongoose from "mongoose";

const becomeAMentorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    college: {
      type: String,
      required: true,
    },
    faculty: {
      type: String,
      required: true,
    },
    yearOrGrade: {
      type: String,
      required: true,
    },
    semester: {
      type: Number,
      enum: [3, 4, 5, 6, 7, 8],
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
  },
  { timestamps: true }
);

export const BecomeAMentor = mongoose.model(
  "BecomeAMentor",
  becomeAMentorSchema
);
