import { asyncHandler } from "../utils/asyncHandler.js";
import { Mentor } from "../models/mentor.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { User } from "../models/user.model.js";

const addMentor = asyncHandler(async (req, res) => {
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

  const existedMentor = await User.findOne({
    mentorPhoneNo,
  });

  if (existedMentor) {
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

  const mentor = await Mentor.create({
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

  const createdMentor = await Mentor.findById(mentor._id);

  if (!createdMentor) {
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
        createdMentor,
        "Bimal, New Mentor added Successfully"
      )
    );
});

const getAllMentors = asyncHandler(async (req, res) => {
  try {
    const mentors = await Mentor.find().select(
      "-mentorPhoneNo -mentorFbProfileLink -mentorEmail"
    );
    return res
      .status(200)
      .json(
        new ApiResponse(200, mentors, "All mentors fetched successfully !")
      );
  } catch (error) {
    res
      .status(500)
      .json({ message: "Server error while fetching all mentors", error });
  }
});

const getAllMentorsForAdmin = asyncHandler(async (req, res) => {
  try {
    const mentors = await Mentor.find().select(
      "-mentorImage -mentorGender -collegeImage -collegeLevels -collegeFaculties -collegeWebsiteLink"
    );
    return res
      .status(200)
      .json(
        new ApiResponse(200, mentors, "All mentors fetched successfully !")
      );
  } catch (error) {
    res
      .status(500)
      .json({ message: "Server error while fetching all mentors", error });
  }
});

const updateMentor = asyncHandler(async (req, res) => {
  const mentorId = req.body._id;
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

  if (
    [
      mentorId,
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
    ].some((field) => field === "")
  ) {
    throw new ApiError(400, "Bimal, Submit data for all fields");
  }

  const mentor = await Mentor.findById(mentorId);
  if (!mentor) {
    throw new ApiError(404, "Bimal, Mentor not found");
  }

  // Optional: check for duplicate phone number
  const duplicatePhone = await Mentor.findOne({
    mentorPhoneNo,
    _id: { $ne: mentorId },
  });

  if (duplicatePhone) {
    throw new ApiError(
      409,
      "Bimal, Another mentor with this phone number already exists"
    );
  }

  // Optional: Handle image updates
  let mentorImage = mentor.mentorImage;
  let collegeImage = mentor.collegeImage;

  const newMentorImagePath = req.files?.mentorImage?.[0]?.path;
  const newCollegeImagePath = req.files?.collegeImage?.[0]?.path;

  if (newMentorImagePath) {
    const uploadedMentorImage = await uploadOnCloudinary(newMentorImagePath);
    if (!uploadedMentorImage) {
      throw new ApiError(400, "Bimal, Error uploading new mentor image");
    }
    mentorImage = uploadedMentorImage;
  }

  if (newCollegeImagePath) {
    const uploadedCollegeImage = await uploadOnCloudinary(newCollegeImagePath);
    if (!uploadedCollegeImage) {
      throw new ApiError(400, "Bimal, Error uploading new college image");
    }
    collegeImage = uploadedCollegeImage;
  }

  // Update fields
  mentor.mentorName = mentorName;
  mentor.mentorGender = mentorGender;
  mentor.mentorFaculty = mentorFaculty;
  mentor.mentorPhoneNo = mentorPhoneNo;
  mentor.mentorFbProfileLink = mentorFbProfileLink;
  mentor.mentorEmail = mentorEmail;
  mentor.mentorImage = mentorImage;
  mentor.collegeImage = collegeImage;
  mentor.collegeName = collegeName;
  mentor.collegeDistrict = collegeDistrict;
  mentor.collegeLevels = collegeLevels;
  mentor.collegeFaculties = collegeFaculties;
  mentor.collegeWebsiteLink = collegeWebsiteLink;

  const updatedMentor = await mentor.save();

  return res
    .status(200)
    .json(
      new ApiResponse(200, updatedMentor, "Bimal, Mentor updated successfully")
    );
});

const deleteMentor = asyncHandler(async (req, res) => {
  const { _id } = req.body;

  if (!_id) {
    throw new ApiError(400, "Bimal, Mentor ID is required in the request body");
  }

  const mentor = await Mentor.findById(_id);

  if (!mentor) {
    throw new ApiError(404, "Bimal, Mentor not found");
  }

  await Mentor.findByIdAndDelete(_id);

  return res
    .status(200)
    .json(new ApiResponse(200, {}, "Bimal, Mentor deleted successfully"));
});

export {
  addMentor,
  getAllMentors,
  getAllMentorsForAdmin,
  updateMentor,
  deleteMentor,
};
