import { Form, redirect, useActionData } from "react-router-dom";
import React, { useState } from "react";

const BecomeAMentor = () => {
  const actionErrors = useActionData();
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
    mentorImage: "",
    collegeName: "",
    collegeFaculties: "",
    collegeDistrict: "",
    collegeLevels: "",
    collegeImage: "",
    collegeWebsiteLink: "",
  });

  const handleChange = (e) => {
    if (e.target.type === "file") {
      setFormData({
        ...formData,
        [e.target.name]: e.target.files[0],
      });
    }
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Form method="POST">
        <div className="container-fluid py-4">
          <div className="container">
            <div className="row">
              <div className="col-12 fs-2 fw-bold text-center">
                Become A Mentor
              </div>
              <div className="col-12 text-center ">
                {/* Sign up now to get the help! */}
                <span className="specialWord">Help</span> newcomers and get{" "}
                <span className="specialWord">Paid</span> for your valuable{" "}
                <span className="specialWord">Guidance</span> !
              </div>
              \<br />
              <div className="col-12 fw-bold text-center fs-3 ">
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
                      required
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
                      required
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
                        required
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
                      required
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
                      required
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
                      value={formData.mentorImage}
                      onChange={handleChange}
                    />
                    {actionErrors?.mentorImage && (
                      <p style={styles.error}>{actionErrors.mentorImage}</p>
                    )}
                  </div>
                </div>
              </div>
              \<br />
              <br />
              <div className="col-12 fw-bold text-center fs-3 ">
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
                      required
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
                      required
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
                      value={formData.collegeImage}
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

export async function action({ request }) {
  const formData = Object.fromEntries(await request.formData());

  const errors = {};
  const alphabetRegex = /^[A-Za-z\s]+$/;

  if (!formData.mentorName) {
    errors.mentorName = "Full Name is required.";
  } else if (formData.mentorName.trim().length < 3) {
    errors.mentorName = "Full Name must be of atleast 3 letters.";
  } else if (!alphabetRegex.test(formData.mentorName.trim())) {
    errors.mentorName = "Full Name must contain only letters.";
  }

  if (!formData.mentorFaculty) {
    errors.mentorFaculty = "Faulty is required.";
  }

  if (!formData.mentorGender) {
    errors.mentorGender = "Gender is required.";
  }

  if (!formData.mentorPhoneNo?.trim()) {
    errors.mentorPhoneNo = "Phone Number is required";
  } else if (!/^\d+$/.test(formData.mentorPhoneNo.trim())) {
    errors.mentorPhoneNo = "Phone Number must contain only digits";
  } else if (formData.mentorPhoneNo.trim().length < 10) {
    errors.mentorPhoneNo = "Phone Number must be at least 10 digits";
  }

  if (!formData.mentorEmail?.trim()) {
    errors.mentorEmail = "Email is required";
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
      formData.mentorEmail.trim()
    )
  ) {
    errors.mentorEmail = "Email is invalid";
  }

  if (!formData.mentorFbProfileLink) {
    errors.mentorFbProfileLink = "This field is required.";
  } else if (
    !/^https?:\/\/(www\.)?facebook\.com/.test(formData.mentorFbProfileLink)
  ) {
    errors.mentorFbProfileLink = "Must be a valid Facebook profile URL.";
  }

  if (!formData.mentorImage) {
    errors.mentorImage = "This field is required.";
  }

  if (!formData.collegeName) {
    errors.collegeName = "College Name is required.";
  } else if (formData.collegeName.trim().length < 3) {
    errors.collegeName = "College Name must be of atleast 3 letters.";
  } else if (!alphabetRegex.test(formData.collegeName.trim())) {
    errors.collegeName = "College Name must contain only letters.";
  }

  if (!formData.collegeDistrict) {
    errors.collegeDistrict = "This field is required.";
  }

  if (!formData.collegeLevels) {
    errors.collegeLevels = "This field is required.";
  }

  if (!formData.collegeFaculties) {
    errors.collegeFaculties = "This field is required.";
  }

  if (!formData.collegeWebsiteLink) {
    errors.collegeWebsiteLink = "This field is required.";
  } else if (
    !/^(https?:\/\/)?([\w\-])+\.{1}[a-zA-Z]{2,}(\S*)?$/.test(
      formData.collegeWebsiteLink
    )
  ) {
    errors.collegeWebsiteLink = "Invalid URL format";
  }
  if (Object.keys(errors).length > 0) {
    return errors;
  }

  // ✅ If passed validation
  console.log("Form submitted to backend:", formData);
  return redirect("/");
}
export default BecomeAMentor;
