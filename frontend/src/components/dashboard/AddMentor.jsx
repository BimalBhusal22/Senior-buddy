import { Form, redirect, useActionData } from "react-router-dom";
import React, { useState } from "react";

const AddMentor = () => {
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
              <br />
              <div className="col-12 fw-bold text-center fs-3 ">
                Add Mentor's information
              </div>
              <div className="col-12 d-flex justify-content-center py4top">
                <div>
                  <div className="col-12 py-1">Mentor's Name</div>
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
                  <div className="col-12 py-1">Mentor's Faculty</div>
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
                  <div className="col-12 py-1">Mentor's Gender</div>
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
                  <div className="col-12 py-1">Mentor's Phone Number</div>
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
                  <div className="col-12 py-1">Mentor's Email Address</div>
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
                  <div className="col-12 py-1">Mentor's Facebook Link</div>
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
                  <div className="col-12 py-1">Upload Mentor's image </div>
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
                Add Mentor's college's information
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

  if (!data.mentorName) {
    errors.mentorName = "Full Name is required.";
  } else if (data.mentorName.trim().length < 3) {
    errors.mentorName = "Full Name must be of at least 3 letters.";
  } else if (!alphabetRegex.test(data.mentorName.trim())) {
    errors.mentorName = "Full Name must contain only letters.";
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
  } else if (!alphabetRegex.test(data.collegeName.trim())) {
    errors.collegeName = "College Name must contain only letters.";
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

  // ✅ Final structured payload
  const finalPayload = {
    ...data,
    collegeLevels,
    collegeFaculties,
  };

  console.log("🚀 Final submission payload:", finalPayload);
  return redirect("/");
}

export default AddMentor;

//   const [mentors, setMentors] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         // Replace with actual API call
//         const response = await fetch("/api/mentors");
//         const data = await response.json();
//         setMentors(data);
//       } catch (error) {
//         console.error("Error fetching mentors:", error);
//       }
//     };

//     fetchData();
//   }, []);
