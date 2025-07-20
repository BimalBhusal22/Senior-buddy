import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is a required field"],
    },
    phoneNo: {
      type: String,
      required: [true, "PhoneNo is a required field"],
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
    password: {
      type: String,
      required: [true, "Password is a required field"],
    },
    wishList: [
      {
        type: String,
      },
    ],
    refreshToken: {
      type: String,
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 10);
  next();
});

userSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password); //returns true or false
};

userSchema.methods.generateAccessToken = function () {
  return jwt.sign(
    //returns token
    {
      _id: this._id,
      email: this.email,
      name: this.name,
      phoneNo: this.phoneNo,
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
    }
  );
};

userSchema.methods.generateRefreshToken = function () {
  return jwt.sign(
    //returns token
    {
      _id: this._id,
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
      expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
    }
  );
};

export const User = mongoose.model("User", userSchema);
