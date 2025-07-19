import { asyncHandler } from "../utils/asyncHandler.js";
import { User } from "../models/user.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import jwt from "jsonwebtoken";

const generateAccessAndRefereshTokens = async (userId) => {
  try {
    const user = await User.findById(userId);
    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();

    user.refreshToken = refreshToken;
    user.save({ validateBeforeSave: false });
    return { accessToken, refreshToken };
  } catch (error) {
    throw new ApiError(
      500,
      "Something went wrong while generating Access Token and Refresh Token"
    );
  }
};

const signUp = asyncHandler(async (req, res) => {
  // --- STEPS/ALGORITHM FOR SIGN_UP/USER_REGISTRATION ---
  // get user details from frontend
  // validation -not empty,etc.
  // check if user already exists - email, phone no
  // check for images
  // upload the images to cloudinary
  // create user object - create entry in db
  // check for user creation
  // remove password and refresh token field from response
  // return response

  const { name, phoneNo, email, password, wishList } = req.body;
  console.log(name, phoneNo, email, password, wishList);

  if ([name, phoneNo, email, password].some((field) => field === "")) {
    throw new ApiError(400, "Bimal, Submit data for all required fields");
  }

  const existedUser = await User.findOne({
    $or: [{ email }, { phoneNo }],
  });

  if (existedUser) {
    throw new ApiError(409, "User with given email or phoneNo already exists");
  }

  const user = await User.create({
    name,
    phoneNo,
    email,
    password,
    wishList,
  });

  const createdUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );

  if (!createdUser) {
    throw new ApiError(500, "Bimal, Something went wrong while user sign up.");
  }

  return res
    .status(201)
    .json(
      new ApiResponse(200, createdUser, "Bimal, User sign up Successfully")
    );
});

const signIn = asyncHandler(async (req, res) => {
  // ALGORITHM:
  // req body -> data
  // email,password
  // find the user
  // password check
  // access and refresh token
  // send cookie

  const { email, password } = req.body;

  if (!email) {
    throw new ApiError(400, "Bimal, Email is required");
  }

  const user = await User.findOne({ email });

  if (!user) {
    throw new ApiError(404, "Bimal, User with provided email doesn't exit !!");
  }

  const isPasswordValid = await user.isPasswordCorrect(password);

  if (!isPasswordValid) {
    throw new ApiError(401, "Invalid Password");
  }

  const { accessToken, refreshToken } = await generateAccessAndRefereshTokens(
    user._id
  );

  const loggedInUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );

  const options = {
    httpOnly: true,
    secure: true,
  };

  return res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(
      new ApiResponse(
        200,
        {
          user: loggedInUser,
          accessToken,
          refreshToken,
        },
        "Bimal, User signed in successfully !!"
      )
    );
});

const signOut = asyncHandler(async (req, res) => {
  await User.findByIdAndUpdate(
    req.user._id,
    {
      $unset: {
        refreshToken: 1,
      },
    },
    {
      new: true,
    }
  );

  const options = {
    httpOnly: true,
    secure: true,
  };

  return res
    .status(200)
    .clearCookie("accessToken", options)
    .clearCookie("refreshToken", options)
    .json(new ApiResponse(200, {}, "Bimal, User Sign Out successfully !!"));
});

const refreshAccessToken = asyncHandler(async (req, res) => {
  const incomingRefreshToken =
    req.cookies.refreshToken || req.body.refreshToken;

  if (!incomingRefreshToken) {
    throw new ApiError(401, "unauthorized request");
  }

  try {
    const decodedToken = jwt.verify(
      incomingRefreshToken,
      process.env.REFRESH_TOKEN_SECRET
    );

    const user = await User.findById(decodedToken?._id);

    if (!user) {
      throw new ApiError(401, "Bimal Invalid refresh Token ");
    }

    if (incomingRefreshToken !== user?.refreshToken) {
      throw new ApiError(401, "Refresh token is expired or used.");
    }

    const options = {
      httpOnly: true,
      secure: true,
    };

    const { accessToken, newRefreshToken } =
      await generateAccessAndRefreshTokens(user._id);

    return res
      .status(200)
      .cookie("accessToken", accessToken, options)
      .cookie("refreshToken", newRefreshToken, options)
      .json(
        new ApiResponse(
          200,
          { accessToken, refreshToken: newRefreshToken },
          "Access token refreshed"
        )
      );
  } catch (error) {
    throw new ApiError(401, error?.message || "Invalid refresh token");
  }
});

const changeCurrentPassword = asyncHandler(async (req, res) => {
  const { oldPassword, newPassword } = req.body;

  const user = await User.findById(req.user?._id);
  const isPasswordCorrect = await user.isPasswordCorrect(oldPassword);

  if (!isPasswordCorrect) {
    throw new ApiError(400, "Invalid old password");
  }

  user.password = newPassword;
  await user.save({ validateBeforeSave: false });

  return res
    .status(200)
    .json(new ApiResponse(200, {}, "Password changed successfully"));
});

const getCurrentUser = asyncHandler(async (req, res) => {
  return res
    .status(200)
    .json(new ApiResponse(200, req.user, "current user fetched successfully."));
});

const updateAccountDetails = asyncHandler(async (req, res) => {
  const { name, phoneNo, email } = req.body;
  if (!name || !phoneNo || !email) {
    throw new ApiError(400, "All fields are required.");
  }

  const user = await User.findByIdAndUpdate(
    req.user?._id,
    {
      $set: {
        name,
        phoneNo,
        email,
      },
    },
    { new: true }
  ).select("-password");

  return res
    .status(200)
    .json(new ApiResponse(200, user, "Account details updated successfully."));
});

export {
  signUp,
  signIn,
  signOut,
  refreshAccessToken,
  changeCurrentPassword,
  getCurrentUser,
  updateAccountDetails,
};
