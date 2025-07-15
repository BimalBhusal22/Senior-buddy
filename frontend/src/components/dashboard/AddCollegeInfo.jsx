import { useState } from "react";

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

const AddCollegeInfo = () => {
  const [formData, setFormData] = useState({
    name: "",
    district: "",
    faculties: "",
    websiteLink: "",
    imageUrl: null,
  });

  const [errors, setErrors] = useState({});

  const validate = (name, value) => {
    let error = "";

    switch (name) {
      case "name":
        if (!value.trim()) error = "Name is required.";
        else if (!/^[A-Za-z\s]+$/.test(value)) error = "Only letters allowed.";
        break;
      case "faculties":
        if (!value.trim()) error = "Faculties are required.";
        break;
      case "websiteLink":
        if (
          value &&
          !/^(https?:\/\/)?([\w\-])+\.{1}[a-zA-Z]{2,}(\S*)?$/.test(value)
        )
          error = "Invalid URL format.";
        break;
      default:
        break;
    }

    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    const newValue = type === "file" ? files[0] : value;

    setFormData((prev) => ({
      ...prev,
      [name]: newValue,
    }));

    validate(name, newValue);
  };

  return (
    <div className="container-fluid py-1">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center fs-3 myHeading">
            College Information
          </div>

          {/* Name */}
          <div className="col-12 col-sm-6 px-sm-4 py-3 d-flex justify-content-center justify-content-sm-end">
            <div>
              <span className="keyPart">Name: </span>
              <input
                type="text"
                name="name"
                className="valuePart"
                placeholder="College Name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && (
                <div className="text-danger small">{errors.name}</div>
              )}
            </div>
          </div>

          {/* District */}
          <div className="col-12 col-sm-6 py-3 d-flex justify-content-center justify-content-sm-start">
            <div>
              <span className="keyPart">District: </span>
              <select
                className="valuePart"
                name="district"
                value={formData.district}
                onChange={handleChange}
              >
                <option value="">Select District</option>
                {districts.map((district) => (
                  <option key={district} value={district}>
                    {district}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Faculties */}
          <div className="col-12 col-sm-6 px-sm-4 py-3 d-flex justify-content-center justify-content-sm-end">
            <div>
              <span className="keyPart">Faculties: </span>
              <input
                type="text"
                name="faculties"
                className="valuePart"
                placeholder="faculty1 o faculty2 o more"
                value={formData.faculties}
                onChange={handleChange}
              />
              {errors.faculties && (
                <div className="text-danger small">{errors.faculties}</div>
              )}
            </div>
          </div>

          {/* Website Link */}
          <div className="col-12 col-sm-6 py-3 d-flex justify-content-center justify-content-sm-start">
            <div>
              <span className="keyPart">Website Link: </span>
              <input
                type="text"
                name="websiteLink"
                className="valuePart"
                value={formData.websiteLink}
                onChange={handleChange}
              />
              {errors.websiteLink && (
                <div className="text-danger small">{errors.websiteLink}</div>
              )}
            </div>
          </div>

          {/* Image Upload */}
          <div className="col-12 col-sm-6 px-sm-4 py-3 d-flex justify-content-center justify-content-sm-end">
            <div>
              <span className="keyPart">Image: </span>
              <input
                type="file"
                name="imageUrl"
                accept="image/*"
                className="valuePart imageInput"
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCollegeInfo;
