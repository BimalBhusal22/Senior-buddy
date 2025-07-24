import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import React, { useState } from "react";

const AddMentor = () => {
  const actionErrors = useActionData();
  const navigation = useNavigation();

  // Check if form is being submitted
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

  const [formData, setFormData] = useState({
    mentorName: "",
    mentorFaculty: "",
    mentorPhoneNo: "",
    mentorEmail: "",
    mentorGender: "",
    mentorFbProfileLink: "",
    mentorImage: null,
    collegeName: "",
    collegeFaculties: [],
    collegeDistrict: "",
    collegeLevels: [],
    collegeImage: null,
    collegeWebsiteLink: "",
  });

  const handleChange = (e) => {
    const { name, type, value, checked, files } = e.target;

    if (type === "file") {
      setFormData({ ...formData, [name]: files[0] });
    } else if (type === "checkbox") {
      const currentValues = formData[name] || [];
      const updatedValues = checked
        ? [...currentValues, value]
        : currentValues.filter((v) => v !== value);

      setFormData({ ...formData, [name]: updatedValues });
    } else if (name === "collegeFaculties") {
      const arrayValues = value.split(",").map((v) => v.trim());
      setFormData({
        ...formData,
        [name]: value,
        collegeFacultiesArray: arrayValues,
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  return (
    <>
      <Form method="POST" encType="multipart/form-data">
        <div className="container-fluid py-4">
          <div className="container">
            <div className="row">
              <div className="col-12 fs-2 fw-bold text-center">
                Add Mentor and College information
              </div>

              <div className="col-12 fw-bold text-center fs-3 ">
                <br />
                Add mentor's information
              </div>
              <div className="col-12 d-flex justify-content-center py4top">
                <div>
                  <div className="col-12 py-1">Full Name</div>
                  <div className="col-12 py-1">
                    <input
                      type="text"
                      name="mentorName"
                      className="myInputBox"
                      placeholder="Your Name"
                      value={formData.mentorName}
                      onChange={handleChange}
                      disabled={isSubmitting}
                    />
                    {actionErrors?.mentorName && (
                      <p style={styles.error}>{actionErrors.mentorName}</p>
                    )}
                  </div>
                </div>
              </div>
              <div className="col-12 d-flex justify-content-center py4top">
                <div>
                  <div className="col-12 py-1">Faculty</div>
                  <div className="col-12 py-1">
                    <input
                      type="text"
                      name="mentorFaculty"
                      className="myInputBox"
                      placeholder="Your Faculty"
                      value={formData.mentorFaculty}
                      onChange={handleChange}
                      disabled={isSubmitting}
                    />
                    {actionErrors?.mentorFaculty && (
                      <p style={styles.error}>{actionErrors.mentorFaculty}</p>
                    )}
                  </div>
                </div>
              </div>
              {/* Gender (updated for consistency) */}
              <div className="col-12 d-flex justify-content-center py4top">
                <div>
                  <div className="col-12 py-1">Gender</div>
                  <div className="col-12 py-1 myInputBox d-flex gap-4">
                    <label className="d-flex align-items-center gap-1">
                      <input
                        type="radio"
                        name="mentorGender"
                        value="M"
                        checked={formData.mentorGender === "M"}
                        onChange={handleChange}
                        disabled={isSubmitting}
                      />
                      Male
                    </label>
                    <label className="d-flex align-items-center gap-1">
                      <input
                        type="radio"
                        name="mentorGender"
                        value="F"
                        checked={formData.mentorGender === "F"}
                        onChange={handleChange}
                        disabled={isSubmitting}
                      />
                      Female
                    </label>
                    {actionErrors?.mentorGender && (
                      <p style={styles.error}>{actionErrors.mentorGender}</p>
                    )}
                  </div>
                </div>
              </div>
              <div className="col-12 d-flex justify-content-center py4top">
                <div>
                  <div className="col-12 py-1">Phone Number</div>
                  <div className="col-12 py-1">
                    <input
                      type="text"
                      name="mentorPhoneNo"
                      className="myInputBox"
                      value={formData.mentorPhoneNo}
                      onChange={handleChange}
                      disabled={isSubmitting}
                    />
                    {actionErrors?.mentorPhoneNo && (
                      <p style={styles.error}>{actionErrors.mentorPhoneNo}</p>
                    )}
                  </div>
                </div>
              </div>
              <div className="col-12 d-flex justify-content-center py4top">
                <div>
                  <div className="col-12 py-1">Email Address</div>
                  <div className="col-12 py-1">
                    <input
                      type="text"
                      name="mentorEmail"
                      className="myInputBox"
                      placeholder="your@email.com"
                      value={formData.mentorEmail}
                      onChange={handleChange}
                      disabled={isSubmitting}
                    />
                    {actionErrors?.mentorEmail && (
                      <p style={styles.error}>{actionErrors.mentorEmail}</p>
                    )}
                  </div>
                </div>
              </div>
              <div className="col-12 d-flex justify-content-center py4top">
                <div>
                  <div className="col-12 py-1">Facebook Link</div>
                  <div className="col-12 py-1">
                    <input
                      type="url"
                      name="mentorFbProfileLink"
                      className="myInputBox"
                      placeholder="facebook profile link"
                      value={formData.mentorFbProfileLink}
                      onChange={handleChange}
                      disabled={isSubmitting}
                    />
                    {actionErrors?.mentorFbProfileLink && (
                      <p style={styles.error}>
                        {actionErrors.mentorFbProfileLink}
                      </p>
                    )}
                  </div>
                </div>
              </div>
              <div className="col-12 d-flex justify-content-center py4top">
                <div>
                  <div className="col-12 py-1">Upload mentor's image </div>
                  <div className="col-12 py-1">
                    <input
                      type="file"
                      name="mentorImage"
                      accept="image/*"
                      className="myInputBox"
                      onChange={handleChange}
                      disabled={isSubmitting}
                    />
                    {actionErrors?.mentorImage && (
                      <p style={styles.error}>{actionErrors.mentorImage}</p>
                    )}
                  </div>
                </div>
              </div>

              <div className="col-12 fw-bold text-center fs-3 ">
                <br />
                Add college's information
              </div>
              <div className="col-12 d-flex justify-content-center py4top">
                <div>
                  <div className="col-12 py-1">College Name</div>
                  <div className="col-12 py-1">
                    <input
                      type="text"
                      name="collegeName"
                      className="myInputBox"
                      placeholder="Your college's name"
                      value={formData.collegeName}
                      onChange={handleChange}
                      disabled={isSubmitting}
                    />
                    {actionErrors?.collegeName && (
                      <p style={styles.error}>{actionErrors.collegeName}</p>
                    )}
                  </div>
                </div>
              </div>
              <div className="col-12 d-flex justify-content-center py4top">
                <div>
                  <div className="col-12 py-1">College's district</div>
                  <div className="col-12 py-1">
                    <select
                      className="myInputBox"
                      name="collegeDistrict"
                      value={formData.collegeDistrict}
                      onChange={handleChange}
                      disabled={isSubmitting}
                    >
                      <option value="">Select District</option>
                      {districts.map((district) => (
                        <option
                          key={district}
                          value={district}
                          onChange={handleChange}
                        >
                          {district}
                        </option>
                      ))}
                    </select>
                    {actionErrors?.collegeDistrict && (
                      <p style={styles.error}>{actionErrors.collegeDistrict}</p>
                    )}
                  </div>
                </div>
              </div>
              <div className="col-12 d-flex justify-content-center py4top">
                <div>
                  <div className="col-12 py-1">Levels</div>
                  <div className="col-12 py-1  myInputBox">
                    <label className="d-flex align-items-center gap-1">
                      <input
                        type="checkBox"
                        name="collegeLevels"
                        value="+2"
                        checked={formData.collegeLevels.includes("+2")}
                        onChange={handleChange}
                        disabled={isSubmitting}
                      />
                      +2
                    </label>
                    <label className="d-flex align-items-center gap-1">
                      <input
                        type="checkBox"
                        name="collegeLevels"
                        value="bachelor"
                        checked={formData.collegeLevels.includes("bachelor")}
                        onChange={handleChange}
                        disabled={isSubmitting}
                      />
                      Bachelor
                    </label>
                    <label className="d-flex align-items-center gap-1">
                      <input
                        type="checkBox"
                        name="collegeLevels"
                        value="master"
                        checked={formData.collegeLevels.includes("master")}
                        onChange={handleChange}
                        disabled={isSubmitting}
                      />
                      Master
                    </label>
                    {actionErrors?.collegeLevels && (
                      <p style={styles.error}>{actionErrors.collegeLevels}</p>
                    )}
                  </div>
                </div>
              </div>
              <div className="col-12 d-flex justify-content-center py4top">
                <div>
                  <div className="col-12 py-1">Faculties</div>
                  <div className="col-12 py-1">
                    <input
                      type="text"
                      name="collegeFaculties"
                      className="myInputBox"
                      placeholder="Enter faculties seperated by comma"
                      value={formData.collegeFaculties}
                      onChange={handleChange}
                      disabled={isSubmitting}
                    />
                    {actionErrors?.collegeFaculties && (
                      <p style={styles.error}>
                        {actionErrors.collegeFaculties}
                      </p>
                    )}
                  </div>
                </div>
              </div>
              <div className="col-12 d-flex justify-content-center py4top">
                <div>
                  <div className="col-12 py-1">Upload College's Image</div>
                  <div className="col-12 py-1">
                    <input
                      type="file"
                      name="collegeImage"
                      accept="image/*"
                      className="myInputBox"
                      onChange={handleChange}
                      disabled={isSubmitting}
                    />
                    {actionErrors?.collegeImage && (
                      <p style={styles.error}>{actionErrors.collegeImage}</p>
                    )}
                  </div>
                </div>
              </div>
              <div className="col-12 d-flex justify-content-center py4top">
                <div>
                  <div className="col-12 py-1"> College's Website Link</div>
                  <div className="col-12 py-1">
                    <input
                      type="url"
                      name="collegeWebsiteLink"
                      placeholder="https://www.collegeName.com"
                      className="myInputBox"
                      value={formData.collegeWebsiteLink}
                      onChange={handleChange}
                      disabled={isSubmitting}
                    />
                    {actionErrors?.collegeWebsiteLink && (
                      <p style={styles.error}>
                        {actionErrors.collegeWebsiteLink}
                      </p>
                    )}
                  </div>
                </div>
              </div>
              <div className="col-12  d-flex justify-content-center py4top">
                <div className="mySignUpBtnContainer">
                  <button
                    className="mySignUpBtn my-1"
                    disabled={isSubmitting}
                    style={isSubmitting ? styles.disabledButton : {}}
                  >
                    {isSubmitting ? (
                      <div style={styles.buttonContent}>
                        <div style={styles.spinner}></div>
                        <span style={styles.loadingText}>Adding mentor...</span>
                      </div>
                    ) : (
                      "Add mentor"
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Form>
    </>
  );
};

const styles = {
  error: {
    color: "red",
    fontSize: "0.8em",
    marginTop: "5px",
  },
  disabledButton: {
    opacity: 0.7,
    cursor: "not-allowed",
  },
  buttonContent: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
  },
  spinner: {
    width: "18px",
    height: "18px",
    border: "2px solid #ffffff40",
    borderTop: "2px solid #ffffff",
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
  },
  loadingText: {
    fontSize: "inherit",
  },
};

// Add CSS animation for spinner (you can also add this to your CSS file)
const spinnerStyle = document.createElement("style");
spinnerStyle.textContent = `
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;
document.head.appendChild(spinnerStyle);

export async function action({ request }) {
  const formDataRaw = await request.formData();

  const data = Object.fromEntries(formDataRaw);

  const mentorImage = formDataRaw.get("mentorImage");
  const collegeImage = formDataRaw.get("collegeImage");

  // ✅ Convert repeated checkbox entries to array
  const collegeLevels = formDataRaw.getAll("collegeLevels");

  // ✅ Convert comma-separated faculties to array
  const collegeFacultiesRaw = data.collegeFaculties || "";
  const collegeFaculties = collegeFacultiesRaw
    .split(",")
    .map((v) => v.trim())
    .filter(Boolean);

  const errors = {};
  const alphabetRegex = /^[A-Za-z\s]+$/;
  const nameRegex = /^[A-Za-z'.\s]+$/;

  if (!data.mentorName) {
    errors.mentorName = "Full Name is required.";
  } else if (data.mentorName.trim().length < 3) {
    errors.mentorName = "Full Name must be of at least 3 letters.";
  } else if (!nameRegex.test(data.mentorName.trim())) {
    errors.mentorName =
      "Full Name must contain only letters, apostrophes(') or periods(.).";
  }

  // ... other validation logic ...
  if (!data.mentorFaculty) {
    errors.mentorFaculty = "Faulty is required.";
  }

  if (!data.mentorGender) {
    errors.mentorGender = "Gender is required.";
  }

  if (!data.mentorPhoneNo?.trim()) {
    errors.mentorPhoneNo = "Phone Number is required";
  } else if (!/^\d+$/.test(data.mentorPhoneNo.trim())) {
    errors.mentorPhoneNo = "Phone Number must contain only digits";
  } else if (data.mentorPhoneNo.trim().length < 10) {
    errors.mentorPhoneNo = "Phone Number must be at least 10 digits";
  }

  if (!data.mentorEmail?.trim()) {
    errors.mentorEmail = "Email is required";
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(data.mentorEmail.trim())
  ) {
    errors.mentorEmail = "Email is invalid";
  }

  if (!data.mentorFbProfileLink) {
    errors.mentorFbProfileLink = "This field is required.";
  } else if (
    !/^https?:\/\/(www\.)?facebook\.com/.test(data.mentorFbProfileLink)
  ) {
    errors.mentorFbProfileLink = "Must be a valid Facebook profile URL.";
  }

  if (!mentorImage || mentorImage.size === 0) {
    errors.mentorImage = "This field is required.";
  }

  if (!data.collegeName) {
    errors.collegeName = "College Name is required.";
  } else if (data.collegeName.trim().length < 3) {
    errors.collegeName = "College Name must be of atleast 3 letters.";
  } else if (!nameRegex.test(data.collegeName.trim())) {
    errors.collegeName =
      "College Name must contain only letters, apostrophes(') or periods(.).";
  }

  if (!data.collegeDistrict) {
    errors.collegeDistrict = "This field is required.";
  }

  if (!collegeLevels.length) {
    errors.collegeLevels = "At least one level must be selected.";
  }

  if (!collegeFaculties.length) {
    errors.collegeFaculties = "At least one faculty is required.";
  }
  if (!collegeImage || collegeImage.size === 0) {
    errors.collegeImage = "This field is required.";
  }

  if (!data.collegeWebsiteLink) {
    errors.collegeWebsiteLink = "This field is required.";
  } else if (
    !/^(https?:\/\/)?([\w\-])+\.{1}[a-zA-Z]{2,}(\S*)?$/.test(
      data.collegeWebsiteLink
    )
  ) {
    errors.collegeWebsiteLink = "Invalid URL format";
  }
  if (Object.keys(errors).length > 0) {
    return errors;
  }

  let mentorImageUrl = "";
  let collegeImageUrl = "";

  if (mentorImage && mentorImage.size > 0) {
    mentorImageUrl = URL.createObjectURL(mentorImage);
  }

  if (collegeImage && collegeImage.size > 0) {
    collegeImageUrl = URL.createObjectURL(collegeImage);
  }

  const formDataToSend = new FormData();

  // Append all fields
  formDataToSend.append("mentorName", data.mentorName);
  formDataToSend.append("mentorFaculty", data.mentorFaculty);
  formDataToSend.append("mentorPhoneNo", data.mentorPhoneNo);
  formDataToSend.append("mentorEmail", data.mentorEmail);
  formDataToSend.append("mentorGender", data.mentorGender);
  formDataToSend.append("mentorFbProfileLink", data.mentorFbProfileLink);
  formDataToSend.append("collegeName", data.collegeName);
  formDataToSend.append("collegeDistrict", data.collegeDistrict);
  formDataToSend.append("collegeWebsiteLink", data.collegeWebsiteLink);

  // Array fields (append one by one)
  collegeLevels.forEach((level) =>
    formDataToSend.append("collegeLevels", level)
  );
  collegeFaculties.forEach((faculty) =>
    formDataToSend.append("collegeFaculties", faculty)
  );

  // Append images (actual files)
  formDataToSend.append("mentorImage", mentorImage);
  formDataToSend.append("collegeImage", collegeImage);

  console.log("FormData contents:");
  for (let [key, value] of formDataToSend.entries()) {
    console.log(key, value);
  }
  // Send as multipart/form-data automatically (do not set Content-Type manually)
  const res = await fetch("http://localhost:7000/api/v1/admin/add_mentor", {
    method: "POST",
    body: formDataToSend,
  });

  const result = await res.json();

  if (!res.ok) {
    return {
      general: result.message || "Failed to send become a mentor request",
    };
  }
  if (res.ok) {
    console.log(
      "Response from server after add mentor  successfully sent: ",
      result.data
    );
    return redirect("/dashboard");
  }
}

export default AddMentor;
