import { asyncHandler } from "../utils/asyncHandler.js";
import {WholeClz} from "../models/wholeClz.model.js"
import {ApiError} from "../utils/ApiError.js";
import {uploadOnCloudinary} from "../utils/cloudinary.js";

const addCollege = asyncHandler(async (req, res) => {
  console.log(req.body);

  const { clzInfo, mentor1, noOfOtherMentors, otherMentors } = req.body;

  if (
    [
      clzInfo.name,
      clzInfo.name,
      clzInfo.district,
      clzInfo.levels,
      clzInfo.faculties,
      clzInfo.websiteLink,
      mentor1.name,
      mentor1.gender,
      mentor1.present,
      mentor1.past,
      mentor1.phoneNo,
      mentor1.fbProfileLink,
      mentor1.email,
      noOfOtherMentors
    ].some((field) => field?.trim() === "")
  ) {
    throw new ApiError(400, "Bimal, Submit data for all required fields");
  }

  const clzImageLocalPath = req.files?.clzImage[0]?.path;
  if(!clzImageLocalPath){
    throw new ApiError(400,"Bimal, ClzImage is required.")
  }

  const clzImage = await uploadOnCloudinary(clzImageLocalPath);

  if(!clzImage){
    throw new ApiError(400,"Bimal, ClzImage is required.")
  }

  WholeClz.create({
    clzInfo,
    mentor1,
    noOfOtherMentors,
    otherMentors
  })

});

export { addCollege };
