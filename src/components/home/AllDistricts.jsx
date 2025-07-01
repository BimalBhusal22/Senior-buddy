import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { filterActions } from "../../store/filterSlice";

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
].sort();

const AllDistricts = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleOnClickDistrict = (district) => {
    navigate("/filter_output");
    dispatch(filterActions.applyDistrictFilter(district));
  };
  return (
    <div className="ms-1 ps-1 oneFilter shadow-sm">
      {districts.map((district) => {
        const id = district
          .toLowerCase()
          .replace(/\s+/g, "-")
          .replace(/[^a-z0-9\-]/g, "");
        return (
          <div key={id}>
            <input
              type="radio"
              id={id}
              name="filter2"
              onClick={() => handleOnClickDistrict(district)}
            />
            <label htmlFor={id}>
              <span className="ms-1">{district}</span>
            </label>
            <br />
          </div>
        );
      })}
    </div>
  );
};

export default AllDistricts;
