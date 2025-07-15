import mongoose from "mongoose";

const becomeAMentorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is a required field"],
    },
    college: {
      type: String,
      required: [true, "College Name is a required field"],
    },
    faculty: {
      type: String,
      required: [true, "Faculty is a required field"],
    },
    yearOrGrade: {
      type: String,
      required: [true, "Year/Grade is a required field"],
    },
    semester: {
      type: Number,
      enum: [3, 4, 5, 6, 7, 8],
    },
    phoneNo: {
      type: String,
      required: [true, "Phone Number is a required field"],
      unique: true,
      match: [/^\d{10}$/, "Phone number must be of 10 digits"],
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

export const BecomeAMentor = mongoose.model(
  "BecomeAMentor",
  becomeAMentorSchema
);
