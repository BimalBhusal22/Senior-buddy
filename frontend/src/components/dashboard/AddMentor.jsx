import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import React, { useState, useEffect } from "react";

const AddMentor = () => {
  const actionErrors = useActionData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  const districts = [
    "Achham",
    "Arghakhanchi",
    "Baglung",
    "Baitadi",
    "Bajhang",
    "Bajura",
    "Banke",
    "Bara",
    "Bardiya",
    "Bhaktapur",
    "Bhojpur",
    "Chitwan",
    "Dadeldhura",
    "Dailekh",
    "Dang",
    "Darchula",
    "Dhading",
    "Dhankuta",
    "Dhanusha",
    "Dolakha",
    "Dolpa",
    "Doti",
    "Eastern Rukum",
    "Gorkha",
    "Gulmi",
    "Humla",
    "Ilam",
    "Jajarkot",
    "Jhapa",
    "Jumla",
    "Kailali",
    "Kalikot",
    "Kanchanpur",
    "Kapilvastu",
    "Kaski",
    "Kathmandu",
    "Kavrepalanchok",
    "Khotang",
    "Lalitpur",
    "Lamjung",
    "Mahottari",
    "Makwanpur",
    "Manang",
    "Morang",
    "Mugu",
    "Mustang",
    "Myagdi",
    "Nawalparasi East",
    "Nawalparasi West",
    "Nuwakot",
    "Okhaldhunga",
    "Palpa",
    "Panchthar",
    "Parbat",
    "Parsa",
    "Pyuthan",
    "Ramechhap",
    "Rasuwa",
    "Rautahat",
    "Rolpa",
    "Rukum East",
    "Rukum West",
    "Rupandehi",
    "Salyan",
    "Sankhuwasabha",
    "Saptari",
    "Sarlahi",
    "Sindhuli",
    "Sindhupalchok",
    "Siraha",
    "Solukhumbu",
    "Sunsari",
    "Surkhet",
    "Syangja",
    "Tanahun",
    "Taplejung",
    "Tehrathum",
    "Udayapur",
  ];

  const initialFormData = {
    mentorName: "",
    mentorFaculty: "",
    mentorPhoneNo: "",
    mentorEmail: "",
    mentorGender: "",
    mentorFbProfileLink: "",
    mentorImage: null,
    collegeName: "",
    collegeFaculties: "",
    collegeDistrict: "",
    collegeLevels: [],
    collegeImage: null,
    collegeWebsiteLink: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [imagePreview, setImagePreview] = useState({
    mentor: null,
    college: null,
  });

  // Reset form after successful submission
  useEffect(() => {
    if (navigation.state === "idle" && !actionErrors) {
      setFormData(initialFormData);
      setImagePreview({ mentor: null, college: null });
    }
  }, [navigation.state, actionErrors]);

  const handleChange = (e) => {
    const { name, type, value, checked, files } = e.target;

    if (type === "file") {
      const file = files[0];
      setFormData({ ...formData, [name]: file });

      // Create image preview
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const imageType = name === "mentorImage" ? "mentor" : "college";
          setImagePreview((prev) => ({
            ...prev,
            [imageType]: e.target.result,
          }));
        };
        reader.readAsDataURL(file);
      }
    } else if (type === "checkbox") {
      const currentValues = formData[name] || [];
      const updatedValues = checked
        ? [...currentValues, value]
        : currentValues.filter((v) => v !== value);

      setFormData({ ...formData, [name]: updatedValues });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const clearForm = () => {
    setFormData(initialFormData);
    setImagePreview({ mentor: null, college: null });
  };

  return (
    <div className="container-fluid py-4">
      <div className="container">
        <Form method="POST" encType="multipart/form-data">
          <div className="row">
            {/* Header */}
            <div className="col-12 fw-bold text-center fs-3 mb-4">
              Add Mentor's Information
            </div>

            {/* Mentor Information Section */}
            <div className="col-12">
              <div className="card shadow-sm mb-4">
                <div className="card-header bg-primary text-white">
                  <h5 className="mb-0">Mentor Details</h5>
                </div>
                <div className="card-body">
                  <div className="row">
                    {/* Mentor Name */}
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Mentor's Name *</label>
                      <input
                        type="text"
                        name="mentorName"
                        className={`form-control ${
                          actionErrors?.mentorName ? "is-invalid" : ""
                        }`}
                        placeholder="Enter mentor's full name"
                        value={formData.mentorName}
                        onChange={handleChange}
                        disabled={isSubmitting}
                      />
                      {actionErrors?.mentorName && (
                        <div className="invalid-feedback">
                          {actionErrors.mentorName}
                        </div>
                      )}
                    </div>

                    {/* Mentor Faculty */}
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Mentor's Faculty *</label>
                      <input
                        type="text"
                        name="mentorFaculty"
                        className={`form-control ${
                          actionErrors?.mentorFaculty ? "is-invalid" : ""
                        }`}
                        placeholder="e.g., BSc. CSIT"
                        value={formData.mentorFaculty}
                        onChange={handleChange}
                        disabled={isSubmitting}
                      />
                      {actionErrors?.mentorFaculty && (
                        <div className="invalid-feedback">
                          {actionErrors.mentorFaculty}
                        </div>
                      )}
                    </div>

                    {/* Gender */}
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Gender *</label>
                      <div className="d-flex gap-3 mt-2">
                        <div className="form-check">
                          <input
                            type="radio"
                            name="mentorGender"
                            value="M"
                            id="male"
                            className="form-check-input"
                            checked={formData.mentorGender === "M"}
                            onChange={handleChange}
                            disabled={isSubmitting}
                          />
                          <label className="form-check-label" htmlFor="male">
                            Male
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            type="radio"
                            name="mentorGender"
                            value="F"
                            id="female"
                            className="form-check-input"
                            checked={formData.mentorGender === "F"}
                            onChange={handleChange}
                            disabled={isSubmitting}
                          />
                          <label className="form-check-label" htmlFor="female">
                            Female
                          </label>
                        </div>
                      </div>
                      {actionErrors?.mentorGender && (
                        <div className="text-danger small mt-1">
                          {actionErrors.mentorGender}
                        </div>
                      )}
                    </div>

                    {/* Phone Number */}
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Phone Number *</label>
                      <input
                        type="tel"
                        name="mentorPhoneNo"
                        className={`form-control ${
                          actionErrors?.mentorPhoneNo ? "is-invalid" : ""
                        }`}
                        placeholder="9841234567"
                        value={formData.mentorPhoneNo}
                        onChange={handleChange}
                        disabled={isSubmitting}
                      />
                      {actionErrors?.mentorPhoneNo && (
                        <div className="invalid-feedback">
                          {actionErrors.mentorPhoneNo}
                        </div>
                      )}
                    </div>

                    {/* Email */}
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Email Address *</label>
                      <input
                        type="email"
                        name="mentorEmail"
                        className={`form-control ${
                          actionErrors?.mentorEmail ? "is-invalid" : ""
                        }`}
                        placeholder="mentor@example.com"
                        value={formData.mentorEmail}
                        onChange={handleChange}
                        disabled={isSubmitting}
                      />
                      {actionErrors?.mentorEmail && (
                        <div className="invalid-feedback">
                          {actionErrors.mentorEmail}
                        </div>
                      )}
                    </div>

                    {/* Facebook Profile */}
                    <div className="col-md-6 mb-3">
                      <label className="form-label">
                        Facebook Profile Link *
                      </label>
                      <input
                        type="url"
                        name="mentorFbProfileLink"
                        className={`form-control ${
                          actionErrors?.mentorFbProfileLink ? "is-invalid" : ""
                        }`}
                        placeholder="https://www.facebook.com/profile"
                        value={formData.mentorFbProfileLink}
                        onChange={handleChange}
                        disabled={isSubmitting}
                      />
                      {actionErrors?.mentorFbProfileLink && (
                        <div className="invalid-feedback">
                          {actionErrors.mentorFbProfileLink}
                        </div>
                      )}
                    </div>

                    {/* Mentor Image */}
                    <div className="col-12 mb-3">
                      <label className="form-label">Mentor's Photo *</label>
                      <input
                        type="file"
                        name="mentorImage"
                        accept="image/*"
                        className={`form-control ${
                          actionErrors?.mentorImage ? "is-invalid" : ""
                        }`}
                        onChange={handleChange}
                        disabled={isSubmitting}
                      />
                      {actionErrors?.mentorImage && (
                        <div className="invalid-feedback">
                          {actionErrors.mentorImage}
                        </div>
                      )}
                      {imagePreview.mentor && (
                        <div className="mt-2">
                          <img
                            src={imagePreview.mentor}
                            alt="Mentor preview"
                            className="img-thumbnail"
                            style={{ maxWidth: "150px", maxHeight: "150px" }}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* College Information Section */}
            <div className="col-12">
              <div className="card shadow-sm mb-4">
                <div className="card-header bg-success text-white">
                  <h5 className="mb-0">College Details</h5>
                </div>
                <div className="card-body">
                  <div className="row">
                    {/* College Name */}
                    <div className="col-md-6 mb-3">
                      <label className="form-label">College Name *</label>
                      <input
                        type="text"
                        name="collegeName"
                        className={`form-control ${
                          actionErrors?.collegeName ? "is-invalid" : ""
                        }`}
                        placeholder="Enter college name"
                        value={formData.collegeName}
                        onChange={handleChange}
                        disabled={isSubmitting}
                      />
                      {actionErrors?.collegeName && (
                        <div className="invalid-feedback">
                          {actionErrors.collegeName}
                        </div>
                      )}
                    </div>

                    {/* College District */}
                    <div className="col-md-6 mb-3">
                      <label className="form-label">District *</label>
                      <select
                        name="collegeDistrict"
                        className={`form-select ${
                          actionErrors?.collegeDistrict ? "is-invalid" : ""
                        }`}
                        value={formData.collegeDistrict}
                        onChange={handleChange}
                        disabled={isSubmitting}
                      >
                        <option value="">Select District</option>
                        {districts.map((district) => (
                          <option key={district} value={district}>
                            {district}
                          </option>
                        ))}
                      </select>
                      {actionErrors?.collegeDistrict && (
                        <div className="invalid-feedback">
                          {actionErrors.collegeDistrict}
                        </div>
                      )}
                    </div>

                    {/* College Levels */}
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Education Levels *</label>
                      <div className="mt-2">
                        {["+2", "bachelor", "master"].map((level) => (
                          <div
                            key={level}
                            className="form-check form-check-inline"
                          >
                            <input
                              type="checkbox"
                              name="collegeLevels"
                              value={level}
                              id={`level-${level}`}
                              className="form-check-input"
                              checked={formData.collegeLevels.includes(level)}
                              onChange={handleChange}
                              disabled={isSubmitting}
                            />
                            <label
                              className="form-check-label"
                              htmlFor={`level-${level}`}
                            >
                              {level === "+2"
                                ? "+2"
                                : level.charAt(0).toUpperCase() +
                                  level.slice(1)}
                            </label>
                          </div>
                        ))}
                      </div>
                      {actionErrors?.collegeLevels && (
                        <div className="text-danger small mt-1">
                          {actionErrors.collegeLevels}
                        </div>
                      )}
                    </div>

                    {/* College Faculties */}
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Faculties *</label>
                      <input
                        type="text"
                        name="collegeFaculties"
                        className={`form-control ${
                          actionErrors?.collegeFaculties ? "is-invalid" : ""
                        }`}
                        placeholder="BSc CSIT, BBA, BSc (separate with commas)"
                        value={formData.collegeFaculties}
                        onChange={handleChange}
                        disabled={isSubmitting}
                      />
                      <div className="form-text">
                        Separate multiple faculties with commas
                      </div>
                      {actionErrors?.collegeFaculties && (
                        <div className="invalid-feedback">
                          {actionErrors.collegeFaculties}
                        </div>
                      )}
                    </div>

                    {/* College Website */}
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Website Link *</label>
                      <input
                        type="url"
                        name="collegeWebsiteLink"
                        className={`form-control ${
                          actionErrors?.collegeWebsiteLink ? "is-invalid" : ""
                        }`}
                        placeholder="https://www.college.edu.np"
                        value={formData.collegeWebsiteLink}
                        onChange={handleChange}
                        disabled={isSubmitting}
                      />
                      {actionErrors?.collegeWebsiteLink && (
                        <div className="invalid-feedback">
                          {actionErrors.collegeWebsiteLink}
                        </div>
                      )}
                    </div>

                    {/* College Image */}
                    <div className="col-12 mb-3">
                      <label className="form-label">College Photo *</label>
                      <input
                        type="file"
                        name="collegeImage"
                        accept="image/*"
                        className={`form-control ${
                          actionErrors?.collegeImage ? "is-invalid" : ""
                        }`}
                        onChange={handleChange}
                        disabled={isSubmitting}
                      />
                      {actionErrors?.collegeImage && (
                        <div className="invalid-feedback">
                          {actionErrors.collegeImage}
                        </div>
                      )}
                      {imagePreview.college && (
                        <div className="mt-2">
                          <img
                            src={imagePreview.college}
                            alt="College preview"
                            className="img-thumbnail"
                            style={{ maxWidth: "200px", maxHeight: "150px" }}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Submit Button and Error Messages */}
            <div className="col-12 text-center">
              <div className="d-flex gap-3 justify-content-center">
                <button
                  type="submit"
                  className="btn btn-primary btn-lg px-5"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span
                        className="spinner-border spinner-border-sm me-2"
                        role="status"
                        aria-hidden="true"
                      ></span>
                      Submitting...
                    </>
                  ) : (
                    "Submit Mentor Information"
                  )}
                </button>

                <button
                  type="button"
                  className="btn btn-outline-secondary btn-lg px-4"
                  onClick={clearForm}
                  disabled={isSubmitting}
                >
                  Clear Form
                </button>
              </div>

              {actionErrors?._serverError && (
                <div className="alert alert-danger mt-3" role="alert">
                  <strong>Error:</strong> {actionErrors._serverError}
                </div>
              )}

              {/* {navigation.state === "idle" && !actionErrors && (
                <div className="alert alert-success mt-3" role="alert">
                  Mentor information submitted successfully!
                </div>
              )} */}
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

// Backend API configuration
const API_BASE_URL = "http://localhost:7000/api/v1/admin/add_mentor";

// Enhanced helper function to upload image with better error handling
async function uploadImage(imageFile, type) {
  if (!imageFile || imageFile.size === 0) {
    throw new Error(`${type} image is required`);
  }

  // Validate file size (max 5MB)
  if (imageFile.size > 5 * 1024 * 1024) {
    throw new Error(`${type} image must be smaller than 5MB`);
  }

  // Validate file type
  if (!imageFile.type.startsWith("image/")) {
    throw new Error(`${type} file must be an image`);
  }

  const formData = new FormData();
  formData.append("image", imageFile);
  formData.append("type", type);

  try {
    console.log(`🔄 Uploading ${type} image to: ${API_BASE_URL}/upload`);
    console.log(`📄 File details:`, {
      name: imageFile.name,
      size: imageFile.size,
      type: imageFile.type,
    });

    const response = await fetch(`${API_BASE_URL}/upload`, {
      method: "POST",
      body: formData,
      // Remove any Content-Type header to let browser set it automatically for FormData
      headers: {
        // Don't set Content-Type for FormData - browser will set it with boundary
      },
    });

    console.log(`📡 Response status: ${response.status}`);

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`❌ Upload failed response:`, errorText);

      let errorMessage = `Image upload failed: ${response.status}`;
      try {
        const errorData = JSON.parse(errorText);
        errorMessage = errorData.message || errorMessage;
      } catch (e) {
        // If not JSON, use the text as error message
        errorMessage = errorText || errorMessage;
      }

      throw new Error(errorMessage);
    }

    const result = await response.json();
    console.log(`✅ ${type} image uploaded successfully:`, result);
    return result.imagePath;
  } catch (error) {
    console.error(`❌ ${type} image upload error:`, error);

    // Check if it's a network error
    if (error.message === "Failed to fetch" || error.name === "TypeError") {
      throw new Error(
        `Cannot connect to server. Please check if your backend is running on ${API_BASE_URL}`
      );
    }

    throw new Error(`Failed to upload ${type} image: ${error.message}`);
  }
}

// Enhanced helper function to send complete form data to backend
async function submitMentorForm(mentorData) {
  try {
    const response = await fetch(`${API_BASE_URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(mentorData),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || `Server error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Submit mentor form error:", error);
    throw error;
  }
}

// Enhanced validation function
function validateFormData(
  data,
  mentorImage,
  collegeImage,
  collegeLevels,
  collegeFaculties
) {
  const errors = {};
  const alphabetRegex = /^[A-Za-z\s.]+$/;
  const phoneRegex = /^[0-9]{10}$/;
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  const facebookRegex = /^https?:\/\/(www\.)?facebook\.com\/.+/;
  const urlRegex = /^https?:\/\/.+\..+/;

  // Mentor validations
  if (!data.mentorName?.trim()) {
    errors.mentorName = "Mentor name is required.";
  } else if (data.mentorName.trim().length < 2) {
    errors.mentorName = "Mentor name must be at least 2 characters.";
  } else if (!alphabetRegex.test(data.mentorName.trim())) {
    errors.mentorName = "Mentor name must contain only letters and spaces.";
  }

  if (!data.mentorFaculty?.trim()) {
    errors.mentorFaculty = "Faculty is required.";
  }

  if (!data.mentorGender) {
    errors.mentorGender = "Gender selection is required.";
  }

  if (!data.mentorPhoneNo?.trim()) {
    errors.mentorPhoneNo = "Phone number is required.";
  } else if (!phoneRegex.test(data.mentorPhoneNo.trim())) {
    errors.mentorPhoneNo = "Phone number must be exactly 10 digits.";
  }

  if (!data.mentorEmail?.trim()) {
    errors.mentorEmail = "Email is required.";
  } else if (!emailRegex.test(data.mentorEmail.trim())) {
    errors.mentorEmail = "Please enter a valid email address.";
  }

  if (!data.mentorFbProfileLink?.trim()) {
    errors.mentorFbProfileLink = "Facebook profile link is required.";
  } else if (!facebookRegex.test(data.mentorFbProfileLink.trim())) {
    errors.mentorFbProfileLink = "Must be a valid Facebook profile URL.";
  }

  if (!mentorImage || mentorImage.size === 0) {
    errors.mentorImage = "Mentor photo is required.";
  }

  // College validations
  if (!data.collegeName?.trim()) {
    errors.collegeName = "College name is required.";
  } else if (data.collegeName.trim().length < 3) {
    errors.collegeName = "College name must be at least 3 characters.";
  }

  if (!data.collegeDistrict) {
    errors.collegeDistrict = "District selection is required.";
  }

  if (!collegeLevels.length) {
    errors.collegeLevels = "At least one education level must be selected.";
  }

  if (!collegeFaculties.length) {
    errors.collegeFaculties = "At least one faculty is required.";
  }

  if (!collegeImage || collegeImage.size === 0) {
    errors.collegeImage = "College photo is required.";
  }

  if (!data.collegeWebsiteLink?.trim()) {
    errors.collegeWebsiteLink = "College website link is required.";
  } else if (!urlRegex.test(data.collegeWebsiteLink.trim())) {
    errors.collegeWebsiteLink = "Please enter a valid website URL.";
  }

  return errors;
}

// Enhanced action function with alternative approach
export async function action({ request }) {
  const formDataRaw = await request.formData();
  const data = Object.fromEntries(formDataRaw);

  const mentorImage = formDataRaw.get("mentorImage");
  const collegeImage = formDataRaw.get("collegeImage");
  const collegeLevels = formDataRaw.getAll("collegeLevels");

  // Process faculties
  const collegeFacultiesRaw = data.collegeFaculties || "";
  const collegeFaculties = collegeFacultiesRaw
    .split(",")
    .map((v) => v.trim())
    .filter(Boolean);

  // Validate form data
  const errors = validateFormData(
    data,
    mentorImage,
    collegeImage,
    collegeLevels,
    collegeFaculties
  );

  if (Object.keys(errors).length > 0) {
    return errors;
  }

  try {
    console.log("🚀 Starting form submission process...");

    // APPROACH 1: Try separate image upload endpoints
    try {
      console.log("📸 Attempting separate image uploads...");

      // Upload images concurrently for better performance
      const [mentorImagePath, collegeImagePath] = await Promise.all([
        uploadImage(mentorImage, "mentor"),
        uploadImage(collegeImage, "college"),
      ]);

      console.log("📸 Images uploaded successfully via separate endpoints");

      // Create the final data object with image paths
      const mentorData = {
        mentorImage: mentorImagePath,
        mentorName: data.mentorName.trim(),
        mentorGender: data.mentorGender,
        mentorFaculty: data.mentorFaculty.trim(),
        mentorPhoneNo: data.mentorPhoneNo.trim(),
        mentorFbProfileLink: data.mentorFbProfileLink.trim(),
        mentorEmail: data.mentorEmail.trim(),
        collegeImage: collegeImagePath,
        collegeName: data.collegeName.trim(),
        collegeDistrict: data.collegeDistrict,
        collegeLevels: collegeLevels,
        collegeFaculties: collegeFaculties,
        collegeWebsiteLink: data.collegeWebsiteLink.trim(),
      };

      console.log("📝 Submitting mentor data with image paths:", mentorData);

      // Submit to backend
      const result = await submitMentorForm(mentorData);
      console.log("✅ Mentor created successfully:", result);

      return redirect("/mentors?success=true");
    } catch (uploadError) {
      console.log(
        "⚠️ Separate image upload failed, trying direct form submission..."
      );

      // APPROACH 2: Send everything including files directly to main endpoint
      const completeFormData = new FormData();

      // Add all text fields
      completeFormData.append("mentorName", data.mentorName.trim());
      completeFormData.append("mentorGender", data.mentorGender);
      completeFormData.append("mentorFaculty", data.mentorFaculty.trim());
      completeFormData.append("mentorPhoneNo", data.mentorPhoneNo.trim());
      completeFormData.append(
        "mentorFbProfileLink",
        data.mentorFbProfileLink.trim()
      );
      completeFormData.append("mentorEmail", data.mentorEmail.trim());
      completeFormData.append("collegeName", data.collegeName.trim());
      completeFormData.append("collegeDistrict", data.collegeDistrict);
      completeFormData.append(
        "collegeWebsiteLink",
        data.collegeWebsiteLink.trim()
      );

      // Add arrays
      collegeLevels.forEach((level) => {
        completeFormData.append("collegeLevels", level);
      });

      collegeFaculties.forEach((faculty) => {
        completeFormData.append("collegeFaculties", faculty);
      });

      // Add image files
      if (mentorImage && mentorImage.size > 0) {
        completeFormData.append("mentorImage", mentorImage);
      }
      if (collegeImage && collegeImage.size > 0) {
        completeFormData.append("collegeImage", collegeImage);
      }

      console.log("📝 Submitting complete form with files directly...");

      const response = await fetch(API_BASE_URL, {
        method: "POST",
        body: completeFormData,
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error(`❌ Direct form submission failed:`, errorText);

        let errorMessage = `Form submission failed: ${response.status}`;
        try {
          const errorData = JSON.parse(errorText);
          errorMessage = errorData.message || errorMessage;
        } catch (e) {
          errorMessage = errorText || errorMessage;
        }

        throw new Error(errorMessage);
      }

      const result = await response.json();
      console.log(
        "✅ Mentor created successfully via direct submission:",
        result
      );

      return redirect("/mentors?success=true");
    }
  } catch (error) {
    console.error("❌ Form submission failed:", error);

    // Check if it's a network error
    if (error.message === "Failed to fetch" || error.name === "TypeError") {
      return {
        _serverError: `Cannot connect to server. Please check if your backend is running on ${API_BASE_URL}`,
      };
    }

    return {
      _serverError:
        error.message || "Failed to submit form. Please try again later.",
    };
  }
}

export default AddMentor;

// import { Form, redirect, useActionData } from "react-router-dom";
// import React, { useState } from "react";

// const AddMentor = () => {
//   const actionErrors = useActionData();
//   const districts = [
//     "Achham",
//     "Arghakhanchi",
//     "Baglung",
//     "Baitadi",
//     "Bajhang",
//     "Bajura",
//     "Banke",
//     "Bara",
//     "Bardiya",
//     "Bhaktapur",
//     "Bhojpur",
//     "Chitwan",
//     "Dadeldhura",
//     "Dailekh",
//     "Dang",
//     "Darchula",
//     "Dhading",
//     "Dhankuta",
//     "Dhanusha",
//     "Dolakha",
//     "Dolpa",
//     "Doti",
//     "Eastern Rukum",
//     "Gorkha",
//     "Gulmi",
//     "Humla",
//     "Ilam",
//     "Jajarkot",
//     "Jhapa",
//     "Jumla",
//     "Kailali",
//     "Kalikot",
//     "Kanchanpur",
//     "Kapilvastu",
//     "Kaski",
//     "Kathmandu",
//     "Kavrepalanchok",
//     "Khotang",
//     "Lalitpur",
//     "Lamjung",
//     "Mahottari",
//     "Makwanpur",
//     "Manang",
//     "Morang",
//     "Mugu",
//     "Mustang",
//     "Myagdi",
//     "Nawalparasi East",
//     "Nawalparasi West",
//     "Nuwakot",
//     "Okhaldhunga",
//     "Palpa",
//     "Panchthar",
//     "Parbat",
//     "Parsa",
//     "Pyuthan",
//     "Ramechhap",
//     "Rasuwa",
//     "Rautahat",
//     "Rolpa",
//     "Rukum East",
//     "Rukum West",
//     "Rupandehi",
//     "Salyan",
//     "Sankhuwasabha",
//     "Saptari",
//     "Sarlahi",
//     "Sindhuli",
//     "Sindhupalchok",
//     "Siraha",
//     "Solukhumbu",
//     "Sunsari",
//     "Surkhet",
//     "Syangja",
//     "Tanahun",
//     "Taplejung",
//     "Tehrathum",
//     "Udayapur",
//   ];

//   const [formData, setFormData] = useState({
//     mentorName: "",
//     mentorFaculty: "",
//     mentorPhoneNo: "",
//     mentorEmail: "",
//     mentorGender: "",
//     mentorFbProfileLink: "",
//     mentorImage: null,
//     collegeName: "",
//     collegeFaculties: [],
//     collegeDistrict: "",
//     collegeLevels: [],
//     collegeImage: null,
//     collegeWebsiteLink: "",
//   });

//   const handleChange = (e) => {
//     const { name, type, value, checked, files } = e.target;

//     if (type === "file") {
//       setFormData({ ...formData, [name]: files[0] });
//     } else if (type === "checkbox") {
//       const currentValues = formData[name] || [];
//       const updatedValues = checked
//         ? [...currentValues, value]
//         : currentValues.filter((v) => v !== value);

//       setFormData({ ...formData, [name]: updatedValues });
//     } else if (name === "collegeFaculties") {
//       const arrayValues = value.split(",").map((v) => v.trim());
//       setFormData({
//         ...formData,
//         [name]: value,
//         collegeFacultiesArray: arrayValues,
//       });
//     } else {
//       setFormData({ ...formData, [name]: value });
//     }
//   };

//   return (
//     <>
//       <Form method="POST" encType="multipart/form-data">
//         <div className="container-fluid py-4">
//           <div className="container">
//             <div className="row">
//               <br />
//               <div className="col-12 fw-bold text-center fs-3 ">
//                 Add Mentor's information
//               </div>
//               <div className="col-12 d-flex justify-content-center py4top">
//                 <div>
//                   <div className="col-12 py-1">Mentor's Name</div>
//                   <div className="col-12 py-1">
//                     <input
//                       type="text"
//                       name="mentorName"
//                       className="myInputBox"
//                       placeholder="Your Name"
//                       value={formData.mentorName}
//                       onChange={handleChange}
//                     />
//                     {actionErrors?.mentorName && (
//                       <p style={styles.error}>{actionErrors.mentorName}</p>
//                     )}
//                   </div>
//                 </div>
//               </div>
//               <div className="col-12 d-flex justify-content-center py4top">
//                 <div>
//                   <div className="col-12 py-1">Mentor's Faculty</div>
//                   <div className="col-12 py-1">
//                     <input
//                       type="text"
//                       name="mentorFaculty"
//                       className="myInputBox"
//                       placeholder="Your Faculty"
//                       value={formData.mentorFaculty}
//                       onChange={handleChange}
//                     />
//                     {actionErrors?.mentorFaculty && (
//                       <p style={styles.error}>{actionErrors.mentorFaculty}</p>
//                     )}
//                   </div>
//                 </div>
//               </div>
//               {/* Gender (updated for consistency) */}
//               <div className="col-12 d-flex justify-content-center py4top">
//                 <div>
//                   <div className="col-12 py-1">Mentor's Gender</div>
//                   <div className="col-12 py-1 myInputBox d-flex gap-4">
//                     <label className="d-flex align-items-center gap-1">
//                       <input
//                         type="radio"
//                         name="mentorGender"
//                         value="M"
//                         checked={formData.mentorGender === "M"}
//                         onChange={handleChange}
//                       />
//                       Male
//                     </label>
//                     <label className="d-flex align-items-center gap-1">
//                       <input
//                         type="radio"
//                         name="mentorGender"
//                         value="F"
//                         checked={formData.mentorGender === "F"}
//                         onChange={handleChange}
//                       />
//                       Female
//                     </label>
//                     {actionErrors?.mentorGender && (
//                       <p style={styles.error}>{actionErrors.mentorGender}</p>
//                     )}
//                   </div>
//                 </div>
//               </div>
//               <div className="col-12 d-flex justify-content-center py4top">
//                 <div>
//                   <div className="col-12 py-1">Mentor's Phone Number</div>
//                   <div className="col-12 py-1">
//                     <input
//                       type="text"
//                       name="mentorPhoneNo"
//                       className="myInputBox"
//                       value={formData.mentorPhoneNo}
//                       onChange={handleChange}
//                     />
//                     {actionErrors?.mentorPhoneNo && (
//                       <p style={styles.error}>{actionErrors.mentorPhoneNo}</p>
//                     )}
//                   </div>
//                 </div>
//               </div>
//               <div className="col-12 d-flex justify-content-center py4top">
//                 <div>
//                   <div className="col-12 py-1">Mentor's Email Address</div>
//                   <div className="col-12 py-1">
//                     <input
//                       type="text"
//                       name="mentorEmail"
//                       className="myInputBox"
//                       placeholder="your@email.com"
//                       value={formData.mentorEmail}
//                       onChange={handleChange}
//                     />
//                     {actionErrors?.mentorEmail && (
//                       <p style={styles.error}>{actionErrors.mentorEmail}</p>
//                     )}
//                   </div>
//                 </div>
//               </div>
//               <div className="col-12 d-flex justify-content-center py4top">
//                 <div>
//                   <div className="col-12 py-1">Mentor's Facebook Link</div>
//                   <div className="col-12 py-1">
//                     <input
//                       type="url"
//                       name="mentorFbProfileLink"
//                       className="myInputBox"
//                       placeholder="facebook profile link"
//                       value={formData.mentorFbProfileLink}
//                       onChange={handleChange}
//                     />
//                     {actionErrors?.mentorFbProfileLink && (
//                       <p style={styles.error}>
//                         {actionErrors.mentorFbProfileLink}
//                       </p>
//                     )}
//                   </div>
//                 </div>
//               </div>
//               <div className="col-12 d-flex justify-content-center py4top">
//                 <div>
//                   <div className="col-12 py-1">Upload Mentor's image </div>
//                   <div className="col-12 py-1">
//                     <input
//                       type="file"
//                       name="mentorImage"
//                       accept="image/*"
//                       className="myInputBox"
//                       onChange={handleChange}
//                     />
//                     {actionErrors?.mentorImage && (
//                       <p style={styles.error}>{actionErrors.mentorImage}</p>
//                     )}
//                   </div>
//                 </div>
//               </div>

//               <div className="col-12 fw-bold text-center fs-3 ">
//                 <br />
//                 Add Mentor's college's information
//               </div>
//               <div className="col-12 d-flex justify-content-center py4top">
//                 <div>
//                   <div className="col-12 py-1">College Name</div>
//                   <div className="col-12 py-1">
//                     <input
//                       type="text"
//                       name="collegeName"
//                       className="myInputBox"
//                       placeholder="Your college's name"
//                       value={formData.collegeName}
//                       onChange={handleChange}
//                     />
//                     {actionErrors?.collegeName && (
//                       <p style={styles.error}>{actionErrors.collegeName}</p>
//                     )}
//                   </div>
//                 </div>
//               </div>
//               <div className="col-12 d-flex justify-content-center py4top">
//                 <div>
//                   <div className="col-12 py-1">College's district</div>
//                   <div className="col-12 py-1">
//                     <select
//                       className="myInputBox"
//                       name="collegeDistrict"
//                       value={formData.collegeDistrict}
//                       onChange={handleChange}
//                     >
//                       <option value="">Select District</option>
//                       {districts.map((district) => (
//                         <option key={district} value={district}>
//                           {district}
//                         </option>
//                       ))}
//                     </select>
//                     {actionErrors?.collegeDistrict && (
//                       <p style={styles.error}>{actionErrors.collegeDistrict}</p>
//                     )}
//                   </div>
//                 </div>
//               </div>
//               <div className="col-12 d-flex justify-content-center py4top">
//                 <div>
//                   <div className="col-12 py-1">Levels</div>
//                   <div className="col-12 py-1  myInputBox">
//                     <label className="d-flex align-items-center gap-1">
//                       <input
//                         type="checkbox"
//                         name="collegeLevels"
//                         value="+2"
//                         checked={formData.collegeLevels.includes("+2")}
//                         onChange={handleChange}
//                       />
//                       +2
//                     </label>
//                     <label className="d-flex align-items-center gap-1">
//                       <input
//                         type="checkbox"
//                         name="collegeLevels"
//                         value="bachelor"
//                         checked={formData.collegeLevels.includes("bachelor")}
//                         onChange={handleChange}
//                       />
//                       Bachelor
//                     </label>
//                     <label className="d-flex align-items-center gap-1">
//                       <input
//                         type="checkbox"
//                         name="collegeLevels"
//                         value="master"
//                         checked={formData.collegeLevels.includes("master")}
//                         onChange={handleChange}
//                       />
//                       Master
//                     </label>
//                     {actionErrors?.collegeLevels && (
//                       <p style={styles.error}>{actionErrors.collegeLevels}</p>
//                     )}
//                   </div>
//                 </div>
//               </div>
//               <div className="col-12 d-flex justify-content-center py4top">
//                 <div>
//                   <div className="col-12 py-1">Faculties</div>
//                   <div className="col-12 py-1">
//                     <input
//                       type="text"
//                       name="collegeFaculties"
//                       className="myInputBox"
//                       placeholder="Enter faculties seperated by comma"
//                       value={formData.collegeFaculties}
//                       onChange={handleChange}
//                     />
//                     {actionErrors?.collegeFaculties && (
//                       <p style={styles.error}>
//                         {actionErrors.collegeFaculties}
//                       </p>
//                     )}
//                   </div>
//                 </div>
//               </div>
//               <div className="col-12 d-flex justify-content-center py4top">
//                 <div>
//                   <div className="col-12 py-1">Upload College's Image</div>
//                   <div className="col-12 py-1">
//                     <input
//                       type="file"
//                       name="collegeImage"
//                       accept="image/*"
//                       className="myInputBox"
//                       onChange={handleChange}
//                     />
//                     {actionErrors?.collegeImage && (
//                       <p style={styles.error}>{actionErrors.collegeImage}</p>
//                     )}
//                   </div>
//                 </div>
//               </div>
//               <div className="col-12 d-flex justify-content-center py4top">
//                 <div>
//                   <div className="col-12 py-1"> College's Website Link</div>
//                   <div className="col-12 py-1">
//                     <input
//                       type="url"
//                       name="collegeWebsiteLink"
//                       placeholder="https://www.collegeName.com"
//                       className="myInputBox"
//                       value={formData.collegeWebsiteLink}
//                       onChange={handleChange}
//                     />
//                     {actionErrors?.collegeWebsiteLink && (
//                       <p style={styles.error}>
//                         {actionErrors.collegeWebsiteLink}
//                       </p>
//                     )}
//                   </div>
//                 </div>
//               </div>
//               <div className="col-12  d-flex justify-content-center py4top">
//                 <div className="mySignUpBtnContainer">
//                   <button className="mySignUpBtn my-1">Submit</button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </Form>
//     </>
//   );
// };

// const styles = {
//   error: {
//     color: "red",
//     fontSize: "0.8em",
//     marginTop: "5px",
//   },
// };

// // Backend API configuration
// const API_BASE_URL = "http://localhost:7000/api/v1/admin/add_mentor";

// // Helper function to send complete form data (including files) to backend
// async function submitMentorForm(formData) {
//   try {
//     const response = await fetch(`${API_BASE_URL}`, {
//       method: "POST",
//       body: formData, // Send as FormData to handle file uploads
//     });

//     if (!response.ok) {
//       const errorData = await response.json();
//       throw new Error(errorData.message || `HTTP ${response.status}`);
//     }

//     return await response.json();
//   } catch (error) {
//     console.error("Submit mentor form error:", error);
//     throw error;
//   }
// }

// export async function action({ request }) {
//   const formDataRaw = await request.formData();

//   const data = Object.fromEntries(formDataRaw);

//   const mentorImage = formDataRaw.get("mentorImage");
//   const collegeImage = formDataRaw.get("collegeImage");

//   // ✅ Convert repeated checkbox entries to array
//   const collegeLevels = formDataRaw.getAll("collegeLevels");

//   // ✅ Convert comma-separated faculties to array
//   const collegeFacultiesRaw = data.collegeFaculties || "";
//   const collegeFaculties = collegeFacultiesRaw
//     .split(",")
//     .map((v) => v.trim())
//     .filter(Boolean);

//   const errors = {};
//   const alphabetRegex = /^[A-Za-z\s]+$/;

//   if (!data.mentorName) {
//     errors.mentorName = "Full Name is required.";
//   } else if (data.mentorName.trim().length < 3) {
//     errors.mentorName = "Full Name must be of at least 3 letters.";
//   } else if (!alphabetRegex.test(data.mentorName.trim())) {
//     errors.mentorName = "Full Name must contain only letters.";
//   }

//   // ... other validation logic ...
//   if (!data.mentorFaculty) {
//     errors.mentorFaculty = "Faulty is required.";
//   }

//   if (!data.mentorGender) {
//     errors.mentorGender = "Gender is required.";
//   }

//   if (!data.mentorPhoneNo?.trim()) {
//     errors.mentorPhoneNo = "Phone Number is required";
//   } else if (!/^\d+$/.test(data.mentorPhoneNo.trim())) {
//     errors.mentorPhoneNo = "Phone Number must contain only digits";
//   } else if (data.mentorPhoneNo.trim().length < 10) {
//     errors.mentorPhoneNo = "Phone Number must be at least 10 digits";
//   }

//   if (!data.mentorEmail?.trim()) {
//     errors.mentorEmail = "Email is required";
//   } else if (
//     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(data.mentorEmail.trim())
//   ) {
//     errors.mentorEmail = "Email is invalid";
//   }

//   if (!data.mentorFbProfileLink) {
//     errors.mentorFbProfileLink = "This field is required.";
//   } else if (
//     !/^https?:\/\/(www\.)?facebook\.com/.test(data.mentorFbProfileLink)
//   ) {
//     errors.mentorFbProfileLink = "Must be a valid Facebook profile URL.";
//   }

//   if (!mentorImage || mentorImage.size === 0) {
//     errors.mentorImage = "This field is required.";
//   }

//   if (!data.collegeName) {
//     errors.collegeName = "College Name is required.";
//   } else if (data.collegeName.trim().length < 3) {
//     errors.collegeName = "College Name must be of atleast 3 letters.";
//   } else if (!alphabetRegex.test(data.collegeName.trim())) {
//     errors.collegeName = "College Name must contain only letters.";
//   }

//   if (!data.collegeDistrict) {
//     errors.collegeDistrict = "This field is required.";
//   }

//   if (!collegeLevels.length) {
//     errors.collegeLevels = "At least one level must be selected.";
//   }

//   if (!collegeFaculties.length) {
//     errors.collegeFaculties = "At least one faculty is required.";
//   }
//   if (!collegeImage || collegeImage.size === 0) {
//     errors.collegeImage = "This field is required.";
//   }

//   if (!data.collegeWebsiteLink) {
//     errors.collegeWebsiteLink = "This field is required.";
//   } else if (
//     !/^(https?:\/\/)?([\w\-])+\.{1}[a-zA-Z]{2,}(\S*)?$/.test(
//       data.collegeWebsiteLink
//     )
//   ) {
//     errors.collegeWebsiteLink = "Invalid URL format";
//   }
//   if (Object.keys(errors).length > 0) {
//     return errors;
//   }

//   try {
//     // Create FormData object to send to backend
//     const backendFormData = new FormData();

//     // Add all text fields
//     backendFormData.append("mentorName", data.mentorName.trim());
//     backendFormData.append("mentorFaculty", data.mentorFaculty.trim());
//     backendFormData.append("mentorPhoneNo", data.mentorPhoneNo.trim());
//     backendFormData.append("mentorEmail", data.mentorEmail.trim());
//     backendFormData.append("mentorGender", data.mentorGender);
//     backendFormData.append("mentorFbProfileLink", data.mentorFbProfileLink);
//     backendFormData.append("collegeName", data.collegeName.trim());
//     backendFormData.append("collegeDistrict", data.collegeDistrict);
//     backendFormData.append("collegeWebsiteLink", data.collegeWebsiteLink);

//     // Add arrays as JSON strings (backend will parse them)
//     backendFormData.append("collegeLevels", JSON.stringify(collegeLevels));
//     backendFormData.append(
//       "collegeFaculties",
//       JSON.stringify(collegeFaculties)
//     );

//     // Add image files
//     if (mentorImage && mentorImage.size > 0) {
//       backendFormData.append("mentorImage", mentorImage);
//     }
//     if (collegeImage && collegeImage.size > 0) {
//       backendFormData.append("collegeImage", collegeImage);
//     }

//     // Send complete form data to backend
//     const result = await submitMentorForm(backendFormData);

//     console.log("✅ Mentor created successfully:", result);

//     // Redirect on success
//     return redirect("/");
//   } catch (error) {
//     console.error("❌ Backend submission failed:", error);

//     // Return server errors to display in the form
//     return {
//       _serverError: error.message || "Failed to submit form. Please try again.",
//     };
//   }

//   // // ✅ Final structured payload
//   // const finalPayload = {
//   //   ...data,
//   //   collegeLevels,
//   //   collegeFaculties,
//   // };

//   // console.log("🚀 Final submission payload:", finalPayload);
//   // return redirect("/");
// }

// export default AddMentor;

// //   const [mentors, setMentors] = useState([]);

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       try {
// //         // Replace with actual API call
// //         const response = await fetch("/api/mentors");
// //         const data = await response.json();
// //         setMentors(data);
// //       } catch (error) {
// //         console.error("Error fetching mentors:", error);
// //       }
// //     };

// //     fetchData();
// //   }, []);
