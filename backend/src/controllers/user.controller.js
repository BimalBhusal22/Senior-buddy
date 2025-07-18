import { asyncHandler } from "../utils/asyncHandler.js";
import { User } from "../models/user.model.js";

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

  if (
    [name, phoneNo, email, password, wishList].some(
      (field) => field?.trim() === ""
    )
  ) {
    throw newApiError(400, "Bimal, Submit data for all required fields");
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

  const createdUser = await User.findById(user._id).select("-refreshToken");

  if (!createdUser) {
    throw new ApiError(500, "Bimal, Something went wrong while user sign up.");
  }

  return res
    .status(201)
    .json(
      new ApiResponse(200, createdUser, "Bimal, User sign up Successfully")
    );
});

export { signUp };
