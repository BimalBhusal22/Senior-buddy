import { Form, redirect, useActionData } from "react-router-dom";
import { useState } from "react";

const BecomeAMentor = () => {
  // Get any errors returned by the action
  const actionErrors = useActionData();

  // Local form state (optional — but useful for immediate validation)
  const [formData, setFormData] = useState({
    fullName: "",
    college: "",
    faculty: "",
    yearGrade: "",
    semester: "",
    phoneNumber: "",
    email: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validate = () => {
    const newErrors = {};
    const alphabetRegex = /^[A-Za-z\s]+$/;

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required.";
    } else if (formData.fullName.trim().length < 3) {
      newErrors.fullName = "Full name must be at least 3 characters.";
    } else if (!alphabetRegex.test(formData.fullName.trim())) {
      newErrors.fullName = "Full name must contain only letters.";
    }

    if (!formData.college.trim()) {
      newErrors.college = "College name is required.";
    } else if (!alphabetRegex.test(formData.college.trim())) {
      newErrors.college = "College name must contain only letters.";
    }

    if (!formData.faculty.trim()) {
      newErrors.faculty = "Faculty is required.";
    } else if (!alphabetRegex.test(formData.faculty.trim())) {
      newErrors.faculty = "Faculty must contain only letters.";
    }

    if (!formData.yearGrade) {
      newErrors.yearGrade = "Please select your year/grade.";
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone number is required.";
    } else if (!/^\d{10}$/.test(formData.phoneNumber.trim())) {
      newErrors.phoneNumber = "Phone number must be exactly 10 digits.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    if (!validate()) {
      e.preventDefault(); // stop form submission
    }
  };

  return (
    <>
      <Form method="POST" onSubmit={handleSubmit}>
        <div className="container-fluid py-4">
          <div className="container">
            <div className="row">
              <div className="col-12 fs-2 fw-bold text-center">
                Become A Mentor
              </div>
              <div className="col-12 text-center">
                <span className="specialWord">Help</span> newcomers and get{" "}
                <span className="specialWord">Paid</span> for your valuable{" "}
                <span className="specialWord">Guidance</span>!
              </div>

              {/* Full Name */}
              <div className="col-12 d-flex justify-content-center py4top">
                <div>
                  <div className="col-12 py-1">Full Name</div>
                  <div className="col-12 py-1">
                    <input
                      type="text"
                      name="fullName"
                      className="myInputBox"
                      placeholder="Your Name"
                      value={formData.fullName}
                      onChange={handleChange}
                    />
                    {errors.fullName && (
                      <div className="text-danger small">{errors.fullName}</div>
                    )}
                  </div>
                </div>
              </div>

              {/* College */}
              <div className="col-12 d-flex justify-content-center py4top">
                <div>
                  <div className="col-12 py-1">College</div>
                  <div className="col-12 py-1">
                    <input
                      type="text"
                      name="college"
                      className="myInputBox"
                      placeholder="Your College Name"
                      value={formData.college}
                      onChange={handleChange}
                    />
                    {errors.college && (
                      <div className="text-danger small">{errors.college}</div>
                    )}
                  </div>
                </div>
              </div>

              {/* Faculty */}
              <div className="col-12 d-flex justify-content-center py4top">
                <div>
                  <div className="col-12 py-1">Faculty</div>
                  <div className="col-12 py-1">
                    <input
                      type="text"
                      name="faculty"
                      className="myInputBox"
                      placeholder="Your Faculty"
                      value={formData.faculty}
                      onChange={handleChange}
                    />
                    {errors.faculty && (
                      <div className="text-danger small">{errors.faculty}</div>
                    )}
                  </div>
                </div>
              </div>

              {/* Year / Grade */}
              <div className="col-12 d-flex justify-content-center py4top">
                <div>
                  <div className="col-12 py-1">Year / Grade</div>
                  <div className="col-12 py-1">
                    <select
                      className="myInputBox"
                      name="yearGrade"
                      value={formData.yearGrade}
                      onChange={handleChange}
                    >
                      <option value="">-- Select Year/Grade --</option>
                      <option value="Grade 12">Grade 12</option>
                      <option value="2nd Year">2nd Year</option>
                      <option value="3rd Year">3rd Year</option>
                      <option value="4th Year">4th Year</option>
                    </select>
                    {errors.yearGrade && (
                      <div className="text-danger small">
                        {errors.yearGrade}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Semester (Optional) */}
              <div className="col-12 d-flex justify-content-center py4top">
                <div>
                  <div className="col-12 py-1">Semester (Optional)</div>
                  <div className="col-12 py-1">
                    <select
                      className="myInputBox"
                      name="semester"
                      defaultValue=""
                      value={formData.semester}
                      onChange={handleChange}
                    >
                      <option value="" disabled>
                        -- Select Semester --
                      </option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Phone Number */}
              <div className="col-12 d-flex justify-content-center py4top">
                <div>
                  <div className="col-12 py-1">Phone Number</div>
                  <div className="col-12 py-1">
                    <input
                      type="tel"
                      name="phoneNumber"
                      className="myInputBox"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                    />
                    {errors.phoneNumber && (
                      <div className="text-danger small">
                        {errors.phoneNumber}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Email Address */}
              <div className="col-12 d-flex justify-content-center py4top">
                <div>
                  <div className="col-12 py-1">Email Address</div>
                  <div className="col-12 py-1">
                    <input
                      type="email"
                      name="email"
                      className="myInputBox"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    {errors.email && (
                      <div className="text-danger small">{errors.email}</div>
                    )}
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="col-12 d-flex justify-content-center py4top">
                <div className="mySignUpBtnContainer">
                  <button type="submit" className="mySignUpBtn my-1">
                    Submit
                  </button>
                  <div className="col-12 py-1 text-center lightSmallFont">
                    We will contact you as soon as possible!
                  </div>
                </div>
              </div>

              {/* Display any server-side errors */}
              {actionErrors?.serverError && (
                <div className="col-12 text-danger text-center mt-3">
                  {actionErrors.serverError}
                </div>
              )}
            </div>
          </div>
        </div>
      </Form>
    </>
  );
};

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log("Mentor Form Data:", data);

  // Example of simple server-side check
  if (data.email === "existing@email.com") {
    return { serverError: "This email is already registered." };
  }

  // Normally you’d save data to your database here.
  return redirect("/?mentorSignedUp=true");
}

export default BecomeAMentor;
