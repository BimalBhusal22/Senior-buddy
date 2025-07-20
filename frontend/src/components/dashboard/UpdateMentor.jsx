import React, { useState } from "react";
import { Search, User, School, Edit3, Save, X } from "lucide-react";

const UpdateMentor = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [mentorData, setMentorData] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [editData, setEditData] = useState({});

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

  // Mock API call - replace with actual API endpoint
  const fetchMentorData = async (collegeName) => {
    setIsLoading(true);
    setErrors({});

    try {
      // Simulating API call delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Mock data - replace with actual API call
      if (
        collegeName.toLowerCase().includes("butwal") ||
        collegeName.toLowerCase().includes("multiple")
      ) {
        const mockData = {
          mentorImage:
            "https://upload.wikimedia.org/wikipedia/commons/e/ef/Virat_Kohli_during_the_India_vs_Aus_4th_Test_match_at_Narendra_Modi_Stadium_on_09_March_2023.jpg",
          mentorName: "Jivan",
          mentorGender: "M",
          mentorFaculty: "BSc. CSIT",
          mentorPhoneNo: "9111111111",
          mentorFbProfileLink: "https://www.facebook.com/jivan.gaire.79",
          mentorEmail: "jivangaire@gmail.com",
          collegeImage: "images/colleges/ButwalMultiple.jpg",
          collegeName: "Butwal Multiple Campus",
          collegeDistrict: "Rupandehi",
          collegeLevels: ["bachelor", "master"],
          collegeFaculties: ["BSc CSIT", "BBA", "BSc", "BBS", "more"],
          collegeWebsiteLink: "https://bumc.tu.edu.np/",
        };
        setMentorData(mockData);
        setEditData(mockData);
      } else {
        setErrors({
          search: "No mentor found for the specified college name.",
        });
        setMentorData(null);
      }
    } catch (error) {
      setErrors({ search: "Failed to fetch mentor data. Please try again." });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = () => {
    if (!searchQuery.trim()) {
      setErrors({ search: "Please enter a college name to search." });
      return;
    }
    fetchMentorData(searchQuery.trim());
  };

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
    if (isEditing) {
      setEditData(mentorData); // Reset to original data if canceling
      setErrors({});
    }
  };

  const handleInputChange = (e) => {
    const { name, type, value, checked, files } = e.target;

    if (type === "file") {
      setEditData({ ...editData, [name]: files[0] });
    } else if (type === "checkbox") {
      const currentValues = editData[name] || [];
      const updatedValues = checked
        ? [...currentValues, value]
        : currentValues.filter((v) => v !== value);
      setEditData({ ...editData, [name]: updatedValues });
    } else if (name === "collegeFaculties") {
      const arrayValues = value
        .split(",")
        .map((v) => v.trim())
        .filter(Boolean);
      setEditData({
        ...editData,
        [name]: arrayValues,
        collegeFacultiesInput: value,
      });
    } else {
      setEditData({ ...editData, [name]: value });
    }

    // Clear specific error when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: null });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    const alphabetRegex = /^[A-Za-z\s]+$/;

    if (!editData.mentorName?.trim()) {
      newErrors.mentorName = "Full Name is required.";
    } else if (editData.mentorName.trim().length < 3) {
      newErrors.mentorName = "Full Name must be at least 3 letters.";
    } else if (!alphabetRegex.test(editData.mentorName.trim())) {
      newErrors.mentorName = "Full Name must contain only letters.";
    }

    if (!editData.mentorFaculty?.trim()) {
      newErrors.mentorFaculty = "Faculty is required.";
    }

    if (!editData.mentorGender) {
      newErrors.mentorGender = "Gender is required.";
    }

    if (!editData.mentorPhoneNo?.trim()) {
      newErrors.mentorPhoneNo = "Phone Number is required";
    } else if (!/^\d+$/.test(editData.mentorPhoneNo.trim())) {
      newErrors.mentorPhoneNo = "Phone Number must contain only digits";
    } else if (editData.mentorPhoneNo.trim().length < 10) {
      newErrors.mentorPhoneNo = "Phone Number must be at least 10 digits";
    }

    if (!editData.mentorEmail?.trim()) {
      newErrors.mentorEmail = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
        editData.mentorEmail.trim()
      )
    ) {
      newErrors.mentorEmail = "Email is invalid";
    }

    if (!editData.mentorFbProfileLink?.trim()) {
      newErrors.mentorFbProfileLink = "Facebook profile link is required.";
    } else if (
      !/^https?:\/\/(www\.)?facebook\.com/.test(editData.mentorFbProfileLink)
    ) {
      newErrors.mentorFbProfileLink = "Must be a valid Facebook profile URL.";
    }

    if (!editData.collegeName?.trim()) {
      newErrors.collegeName = "College Name is required.";
    } else if (editData.collegeName.trim().length < 3) {
      newErrors.collegeName = "College Name must be at least 3 letters.";
    }

    if (!editData.collegeDistrict) {
      newErrors.collegeDistrict = "College district is required.";
    }

    if (!editData.collegeLevels?.length) {
      newErrors.collegeLevels = "At least one level must be selected.";
    }

    if (!editData.collegeFaculties?.length) {
      newErrors.collegeFaculties = "At least one faculty is required.";
    }

    if (!editData.collegeWebsiteLink?.trim()) {
      newErrors.collegeWebsiteLink = "College website link is required.";
    } else if (
      !/^(https?:\/\/)?([\w\-])+\.{1}[a-zA-Z]{2,}(\S*)?$/.test(
        editData.collegeWebsiteLink
      )
    ) {
      newErrors.collegeWebsiteLink = "Invalid URL format";
    }

    return newErrors;
  };

  const handleSave = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setIsLoading(true);
    try {
      // Simulate API call to update data
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Update the mentor data with edited data
      setMentorData(editData);
      setIsEditing(false);
      setErrors({});

      // In real implementation, make API call here
      console.log("Updated mentor data:", editData);
    } catch (error) {
      setErrors({ submit: "Failed to update mentor data. Please try again." });
    } finally {
      setIsLoading(false);
    }
  };

  const spinnerStyle = {
    width: "1rem",
    height: "1rem",
    borderWidth: "2px",
  };

  return (
    <>
      {/* Bootstrap CSS */}
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css"
        rel="stylesheet"
      />

      <div
        style={{ minHeight: "100vh", backgroundColor: "#f8f9fa" }}
        className="py-5"
      >
        <div className="container" style={{ maxWidth: "1200px" }}>
          {/* Search Section */}
          <div className="card shadow-sm mb-4">
            <div className="card-body p-4">
              <h1 className="text-center text-dark mb-4 fw-bold fs-2">
                Mentor & College Information Editor
              </h1>

              <div className="row justify-content-center">
                <div className="col-md-6">
                  <div className="d-flex gap-3">
                    <div className="flex-grow-1">
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Enter college name to search..."
                        className="form-control"
                      />
                      {errors.search && (
                        <div className="text-danger small mt-1">
                          {errors.search}
                        </div>
                      )}
                    </div>
                    <button
                      onClick={handleSearch}
                      disabled={isLoading}
                      className="btn btn-primary d-flex align-items-center gap-2"
                      style={{ whiteSpace: "nowrap" }}
                    >
                      {isLoading ? (
                        <div
                          className="spinner-border text-light"
                          style={spinnerStyle}
                          role="status"
                        >
                          <span className="visually-hidden">Loading...</span>
                        </div>
                      ) : (
                        <Search size={18} />
                      )}
                      Search
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mentor Data Display */}
          {mentorData && (
            <div className="card shadow-sm">
              {/* Header */}
              <div
                className="card-header text-white"
                style={{
                  background: "linear-gradient(135deg, #2563eb, #9333ea)",
                }}
              >
                <div className="d-flex justify-content-between align-items-center">
                  <h2 className="fs-4 fw-bold mb-0">
                    Mentor & College Information
                  </h2>
                  <button
                    onClick={handleEditToggle}
                    className="btn btn-light btn-outline-light d-flex align-items-center gap-2"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.2)",
                      border: "none",
                    }}
                  >
                    {isEditing ? <X size={18} /> : <Edit3 size={18} />}
                    {isEditing ? "Cancel" : "Edit"}
                  </button>
                </div>
              </div>

              <div className="card-body p-4">
                {/* Mentor Information */}
                <div className="mb-5">
                  <div className="d-flex align-items-center gap-2 mb-4">
                    <User size={20} className="text-primary" />
                    <h3 className="fs-5 fw-semibold text-dark mb-0">
                      Mentor Information
                    </h3>
                  </div>

                  <div className="row g-4">
                    <div className="col-md-6">
                      <label className="form-label fw-medium">
                        Mentor's Name
                      </label>
                      <input
                        type="text"
                        name="mentorName"
                        value={
                          isEditing
                            ? editData.mentorName || ""
                            : mentorData.mentorName
                        }
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        className="form-control"
                      />
                      {errors.mentorName && (
                        <div className="text-danger small mt-1">
                          {errors.mentorName}
                        </div>
                      )}
                    </div>

                    <div className="col-md-6">
                      <label className="form-label fw-medium">Faculty</label>
                      <input
                        type="text"
                        name="mentorFaculty"
                        value={
                          isEditing
                            ? editData.mentorFaculty || ""
                            : mentorData.mentorFaculty
                        }
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        className="form-control"
                      />
                      {errors.mentorFaculty && (
                        <div className="text-danger small mt-1">
                          {errors.mentorFaculty}
                        </div>
                      )}
                    </div>

                    <div className="col-md-6">
                      <label className="form-label fw-medium">Gender</label>
                      <div className="d-flex gap-4">
                        <div className="form-check">
                          <input
                            type="radio"
                            name="mentorGender"
                            value="M"
                            checked={
                              (isEditing
                                ? editData.mentorGender
                                : mentorData.mentorGender) === "M"
                            }
                            onChange={handleInputChange}
                            disabled={!isEditing}
                            className="form-check-input"
                            id="genderMale"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="genderMale"
                          >
                            Male
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            type="radio"
                            name="mentorGender"
                            value="F"
                            checked={
                              (isEditing
                                ? editData.mentorGender
                                : mentorData.mentorGender) === "F"
                            }
                            onChange={handleInputChange}
                            disabled={!isEditing}
                            className="form-check-input"
                            id="genderFemale"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="genderFemale"
                          >
                            Female
                          </label>
                        </div>
                      </div>
                      {errors.mentorGender && (
                        <div className="text-danger small mt-1">
                          {errors.mentorGender}
                        </div>
                      )}
                    </div>

                    <div className="col-md-6">
                      <label className="form-label fw-medium">
                        Phone Number
                      </label>
                      <input
                        type="text"
                        name="mentorPhoneNo"
                        value={
                          isEditing
                            ? editData.mentorPhoneNo || ""
                            : mentorData.mentorPhoneNo
                        }
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        className="form-control"
                      />
                      {errors.mentorPhoneNo && (
                        <div className="text-danger small mt-1">
                          {errors.mentorPhoneNo}
                        </div>
                      )}
                    </div>

                    <div className="col-md-6">
                      <label className="form-label fw-medium">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="mentorEmail"
                        value={
                          isEditing
                            ? editData.mentorEmail || ""
                            : mentorData.mentorEmail
                        }
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        className="form-control"
                      />
                      {errors.mentorEmail && (
                        <div className="text-danger small mt-1">
                          {errors.mentorEmail}
                        </div>
                      )}
                    </div>

                    <div className="col-md-6">
                      <label className="form-label fw-medium">
                        Facebook Profile Link
                      </label>
                      <input
                        type="url"
                        name="mentorFbProfileLink"
                        value={
                          isEditing
                            ? editData.mentorFbProfileLink || ""
                            : mentorData.mentorFbProfileLink
                        }
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        className="form-control"
                      />
                      {errors.mentorFbProfileLink && (
                        <div className="text-danger small mt-1">
                          {errors.mentorFbProfileLink}
                        </div>
                      )}
                    </div>
                  </div>

                  {isEditing && (
                    <div className="mt-4">
                      <label className="form-label fw-medium">
                        Upload New Mentor Image (optional)
                      </label>
                      <input
                        type="file"
                        name="mentorImage"
                        accept="image/*"
                        onChange={handleInputChange}
                        className="form-control"
                      />
                    </div>
                  )}
                </div>

                {/* College Information */}
                <div>
                  <div className="d-flex align-items-center gap-2 mb-4">
                    <School size={20} className="text-success" />
                    <h3 className="fs-5 fw-semibold text-dark mb-0">
                      College Information
                    </h3>
                  </div>

                  <div className="row g-4">
                    <div className="col-md-6">
                      <label className="form-label fw-medium">
                        College Name
                      </label>
                      <input
                        type="text"
                        name="collegeName"
                        value={
                          isEditing
                            ? editData.collegeName || ""
                            : mentorData.collegeName
                        }
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        className="form-control"
                      />
                      {errors.collegeName && (
                        <div className="text-danger small mt-1">
                          {errors.collegeName}
                        </div>
                      )}
                    </div>

                    <div className="col-md-6">
                      <label className="form-label fw-medium">District</label>
                      <select
                        name="collegeDistrict"
                        value={
                          isEditing
                            ? editData.collegeDistrict || ""
                            : mentorData.collegeDistrict
                        }
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        className="form-select"
                      >
                        <option value="">Select District</option>
                        {districts.map((district) => (
                          <option key={district} value={district}>
                            {district}
                          </option>
                        ))}
                      </select>
                      {errors.collegeDistrict && (
                        <div className="text-danger small mt-1">
                          {errors.collegeDistrict}
                        </div>
                      )}
                    </div>

                    <div className="col-md-6">
                      <label className="form-label fw-medium">Levels</label>
                      <div className="d-flex flex-wrap gap-4">
                        {["+2", "bachelor", "master"].map((level) => (
                          <div key={level} className="form-check">
                            <input
                              type="checkbox"
                              name="collegeLevels"
                              value={level}
                              checked={(isEditing
                                ? editData.collegeLevels
                                : mentorData.collegeLevels
                              )?.includes(level)}
                              onChange={handleInputChange}
                              disabled={!isEditing}
                              className="form-check-input"
                              id={`level-${level}`}
                            />
                            <label
                              className="form-check-label"
                              htmlFor={`level-${level}`}
                            >
                              {level.charAt(0).toUpperCase() + level.slice(1)}
                            </label>
                          </div>
                        ))}
                      </div>
                      {errors.collegeLevels && (
                        <div className="text-danger small mt-1">
                          {errors.collegeLevels}
                        </div>
                      )}
                    </div>

                    <div className="col-md-6">
                      <label className="form-label fw-medium">
                        Faculties (comma separated)
                      </label>
                      <input
                        type="text"
                        name="collegeFaculties"
                        value={
                          isEditing
                            ? editData.collegeFacultiesInput !== undefined
                              ? editData.collegeFacultiesInput
                              : editData.collegeFaculties?.join(", ") || ""
                            : mentorData.collegeFaculties?.join(", ") || ""
                        }
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        placeholder="Enter faculties separated by comma"
                        className="form-control"
                      />
                      {errors.collegeFaculties && (
                        <div className="text-danger small mt-1">
                          {errors.collegeFaculties}
                        </div>
                      )}
                    </div>

                    <div className="col-12">
                      <label className="form-label fw-medium">
                        Website Link
                      </label>
                      <input
                        type="url"
                        name="collegeWebsiteLink"
                        value={
                          isEditing
                            ? editData.collegeWebsiteLink || ""
                            : mentorData.collegeWebsiteLink
                        }
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        className="form-control"
                      />
                      {errors.collegeWebsiteLink && (
                        <div className="text-danger small mt-1">
                          {errors.collegeWebsiteLink}
                        </div>
                      )}
                    </div>
                  </div>

                  {isEditing && (
                    <div className="mt-4">
                      <label className="form-label fw-medium">
                        Upload New College Image (optional)
                      </label>
                      <input
                        type="file"
                        name="collegeImage"
                        accept="image/*"
                        onChange={handleInputChange}
                        className="form-control"
                      />
                    </div>
                  )}
                </div>

                {/* Error Messages */}
                {errors.submit && (
                  <div className="alert alert-danger mt-4" role="alert">
                    {errors.submit}
                  </div>
                )}

                {/* Save Button */}
                {isEditing && (
                  <div className="mt-4 text-center">
                    <button
                      onClick={handleSave}
                      disabled={isLoading}
                      className="btn btn-success btn-lg d-inline-flex align-items-center gap-2"
                    >
                      {isLoading ? (
                        <div
                          className="spinner-border spinner-border-sm text-light"
                          role="status"
                        >
                          <span className="visually-hidden">Loading...</span>
                        </div>
                      ) : (
                        <Save size={18} />
                      )}
                      {isLoading ? "Saving..." : "Save Changes"}
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default UpdateMentor;
