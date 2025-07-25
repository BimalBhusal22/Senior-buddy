import { Form, redirect, useActionData, useNavigate } from "react-router-dom";
import React, { useState } from "react";

const BecomeAMentor = () => {
  const actionErrors = useActionData();
  const navigate = useNavigate();
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
                Become A Mentor
              </div>
              <div className="col-12 text-center fs20">
                {/* Sign up now to get the help! */}
                <span className="specialWord">Help</span> newcomers and get{" "}
                <span className="specialWord">Paid</span> for your valuable{" "}
                <span className="specialWord">Guidance</span> !
              </div>
              <div className="col-12 fw-bold text-center fs-3 ">
                <br />
                Add your information
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
                  <div className="col-12 py-1">Upload your image </div>
                  <div className="col-12 py-1">
                    <input
                      type="file"
                      name="mentorImage"
                      accept="image/*"
                      className="myInputBox"
                      onChange={handleChange}
                    />
                    {actionErrors?.mentorImage && (
                      <p style={styles.error}>{actionErrors.mentorImage}</p>
                    )}
                  </div>
                </div>
              </div>

              <div className="col-12 fw-bold text-center fs-3 ">
                <br />
                Add your college's information
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
                  <button className="mySignUpBtn my-1">Submit</button>
                  <div className="col-12 py-1 text-center lightSmallFont">
                    We will contact you as soon as possible!
                  </div>
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
};

let mentorRequestsStore = [];

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

  // Send as multipart/form-data automatically (do not set Content-Type manually)
  const res = await fetch(
    "http://localhost:7000/api/v1/become_a_mentor/add_become_a_mentor_request",
    {
      method: "POST",
      body: formDataToSend,
    }
  );

  const result = await res.json();

  if (!res.ok) {
    return {
      general: result.message || "Failed to send become a mentor request",
    };
  }
  if (res.ok) {
    console.log(
      "Response from server after become a mentor request successfully sent: ",
      result.data
    );
    return redirect("/");
  }
}

export { mentorRequestsStore };

export default BecomeAMentor;
