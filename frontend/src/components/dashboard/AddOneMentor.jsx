import { useState } from "react";

const AddOneMentor = ({ rank }) => {
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    present: "",
    past: "",
    phoneNo: "",
    fbProfileLink: "",
    email: "",
    imageUrl: null,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    }

    if (!formData.gender.trim()) {
      newErrors.gender = "Gender is required.";
    } else if (!["M", "F"].includes(formData.gender.trim().toUpperCase())) {
      newErrors.gender = "Gender must be either 'M' or 'F'.";
    }

    if (!formData.present.trim()) {
      newErrors.present = "Present field is required.";
    }

    if (!formData.phoneNo.trim()) {
      newErrors.phoneNo = "Phone number is required.";
    } else if (!/^\d{10}$/.test(formData.phoneNo.trim())) {
      newErrors.phoneNo = "Phone number must be 10 digits.";
    }

    if (
      formData.fbProfileLink &&
      !/^https?:\/\/(www\.)?facebook\.com/.test(formData.fbProfileLink)
    ) {
      newErrors.fbProfileLink = "Must be a valid Facebook profile URL.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/.test(formData.email.trim())) {
      newErrors.email = "Invalid email format.";
    }

    return newErrors;
  };

  const handleSubmit = () => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      alert("Form submitted successfully!");
      console.log(formData);
      // proceed with whatever logic you wish
    }
  };

  return (
    <>
      <div className="container-fluid py-1">
        <div className="container">
          <div className="row">
            <div className="col-12 fs-4 fw-bold text-center">Mentor {rank}</div>

            {/* Name */}
            <div className="col-12 col-sm-6 px-sm-4 py-3 d-flex justify-content-center justify-content-sm-end">
              <span className="float-sm-end ">
                <span className="keyPart">Name: </span>
                <input
                  type="text"
                  name="name"
                  className="valuePart"
                  placeholder="Mentor Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                {errors.name && (
                  <div className="text-danger small">{errors.name}</div>
                )}
              </span>
            </div>

            {/* Gender */}
            <div className="col-12 col-sm-6 px-sm-4 py-3 d-flex justify-content-center justify-content-sm-start">
              <span className="float-sm-end ">
                <span className="keyPart">Gender: </span>
                <input
                  type="text"
                  name="gender"
                  className="valuePart"
                  placeholder="M or F"
                  value={formData.gender}
                  onChange={handleChange}
                  required
                />
                {errors.gender && (
                  <div className="text-danger small">{errors.gender}</div>
                )}
              </span>
            </div>

            {/* Present */}
            <div className="col-12 col-sm-6 px-sm-4 py-3 d-flex justify-content-center justify-content-sm-end">
              <span className="float-sm-end">
                <span className="keyPart">Present: </span>
                <input
                  type="text"
                  name="present"
                  className="valuePart"
                  placeholder="Year/Grade, % or GPA"
                  value={formData.present}
                  onChange={handleChange}
                  required
                />
                {errors.present && (
                  <div className="text-danger small">{errors.present}</div>
                )}
              </span>
            </div>

            {/* Past */}
            <div className="col-12 col-sm-6 px-sm-4 py-3 d-flex justify-content-center justify-content-sm-start">
              <span className="float-sm-end">
                <span className="keyPart">Past: </span>
                <input
                  type="text"
                  name="past"
                  className="valuePart"
                  placeholder="Year/Grade, % or GPA"
                  value={formData.past}
                  onChange={handleChange}
                />
              </span>
            </div>

            {/* Phone Number */}
            <div className="col-12 col-sm-6 px-sm-4 py-3 d-flex justify-content-center justify-content-sm-end">
              <span className="float-sm-end">
                <span className="keyPart">Phone Number: </span>
                <input
                  type="text"
                  name="phoneNo"
                  className="valuePart"
                  placeholder=""
                  value={formData.phoneNo}
                  onChange={handleChange}
                  required
                />
                {errors.phoneNo && (
                  <div className="text-danger small">{errors.phoneNo}</div>
                )}
              </span>
            </div>

            {/* Facebook Link */}
            <div className="col-12 col-sm-6 px-sm-4 py-3 d-flex justify-content-center justify-content-sm-start">
              <span className="float-sm-end">
                <span className="keyPart">Facebook Link: </span>
                <input
                  type="url"
                  name="fbProfileLink"
                  className="valuePart"
                  placeholder="facebook profile link"
                  value={formData.fbProfileLink}
                  onChange={handleChange}
                />
                {errors.fbProfileLink && (
                  <div className="text-danger small">
                    {errors.fbProfileLink}
                  </div>
                )}
              </span>
            </div>

            {/* Email */}
            <div className="col-12 col-sm-6 px-sm-4 py-3 d-flex justify-content-center justify-content-sm-end">
              <span className="float-sm-end">
                <span className="keyPart">Email: </span>
                <input
                  type="email"
                  name="email"
                  className="valuePart"
                  placeholder="mentor@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                {errors.email && (
                  <div className="text-danger small">{errors.email}</div>
                )}
              </span>
            </div>

            {/* Image */}
            <div className="col-12 col-sm-6 px-sm-4 py-3 d-flex justify-content-center justify-content-sm-start">
              <span className="float-sm-end">
                <span className="keyPart">Image: </span>
                <input
                  type="file"
                  name="imageUrl"
                  accept="image/*"
                  className="valuePart imageInput"
                  onChange={handleChange}
                />
              </span>
            </div>

            {/* Submit Button */}
            <div className="col-12 text-center mt-3">
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddOneMentor;
