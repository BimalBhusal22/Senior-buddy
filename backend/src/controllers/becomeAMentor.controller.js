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

const deleteBecomeAMentorRequest = asyncHandler(async (req, res) => {
  const { _id } = req.body;

  if (!_id) {
    throw new ApiError(
      400,
      "Bimal, Become a Mentor Request ID is required in the request body"
    );
  }

  const mentorRequest = await BecomeAMentor.findById(_id);

  if (!mentorRequest) {
    throw new ApiError(
      404,
      "Bimal, Become a Mentor Request with provided ID not found"
    );
  }

  await BecomeAMentor.findByIdAndDelete(_id);

  return res
    .status(200)
    .json(
      new ApiResponse(
        200,
        {},
        "Bimal, Become a mentor request with provided ID deleted successfully"
      )
    );
});

const getAllMentorRequests = asyncHandler(async (req, res) => {
  try {
    const allMentorRequests = await BecomeAMentor.find().sort({
      createdAt: -1,
    });
    return res
      .status(200)
      .json(
        new ApiResponse(
          200,
          allMentorRequests,
          "All Become a Mentor Requests fetched successfully !"
        )
      );
  } catch (error) {
    res.status(500).json({
      message: "Server error while fetching all Become a Mentor Requests",
      error,
    });
  }
});

export {
  addBecomeAMentorRequest,
  deleteBecomeAMentorRequest,
  getAllMentorRequests,
};
