import { asyncHandler } from "../utils/asyncHandler.js";
import { BecomeAMentor } from "../models/becomeAMentor.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";

const addBecomeAMentorRequest = asyncHandler(async (req, res) => {
  const {
    mentorName,
    mentorGender,
    mentorFaculty,
    mentorPhoneNo,
    mentorFbProfileLink,
    mentorEmail,
    collegeName,
    collegeDistrict,
    collegeLevels,
    collegeFaculties,
    collegeWebsiteLink,
  } = req.body;

  console.log(
    mentorName,
    mentorGender,
    mentorFaculty,
    mentorPhoneNo,
    mentorFbProfileLink,
    mentorEmail,
    collegeName,
    collegeDistrict,
    collegeLevels,
    collegeFaculties,
    collegeWebsiteLink
  );

  // console.log("Bimal your req.body = ", req.body);

  if (
    [
      mentorName,
      mentorGender,
      mentorFaculty,
      mentorPhoneNo,
      mentorFbProfileLink,
      mentorEmail,
      collegeName,
      collegeDistrict,
      collegeLevels,
      collegeFaculties,
      collegeWebsiteLink,
    ].some((field) => (field = ""))
  ) {
    throw new ApiError(400, "Bimal, Submit data for all fields");
  }

  const existedMentorRequest = await BecomeAMentor.findOne({
    mentorPhoneNo,
  });

  if (existedMentorRequest) {
    throw new ApiError(
      409,
      "Bimal, Mentor with given phone number already exists"
    );
  }

  const mentorImageLocalPath = req.files?.mentorImage[0]?.path;
  const collgeImageLocalPath = req.files?.collegeImage[0]?.path;

  if (!mentorImageLocalPath) {
    throw new ApiError(400, "Bimal, Mentor Image is required.");
  }
  if (!collgeImageLocalPath) {
    throw new ApiError(400, "Bimal, College Image is required.");
  }

  const mentorImage = await uploadOnCloudinary(mentorImageLocalPath);
  const collegeImage = await uploadOnCloudinary(collgeImageLocalPath);

  if (!mentorImage) {
    throw new ApiError(400, "Bimal, Mentor Image is required.");
  }
  if (!collegeImage) {
    throw new ApiError(400, "Bimal, College Image is required.");
  }

  const mentor = await BecomeAMentor.create({
    mentorImage,
    mentorName,
    mentorGender,
    mentorFaculty,
    mentorPhoneNo,
    mentorFbProfileLink,
    mentorEmail,
    collegeImage,
    collegeName,
    collegeDistrict,
    collegeLevels,
    collegeFaculties,
    collegeWebsiteLink,
  });

  const createdMentorRequest = await BecomeAMentor.findById(mentor._id);

  if (!createdMentorRequest) {
    throw new ApiError(
      500,
      "Bimal, Something went wrong while user adding new mentor"
    );
  }

  return res
    .status(201)
    .json(
      new ApiResponse(
        200,
        createdMentorRequest,
        "Bimal, Become a Mentor Request added Successfully"
      )
    );
});

export { addBecomeAMentorRequest };
