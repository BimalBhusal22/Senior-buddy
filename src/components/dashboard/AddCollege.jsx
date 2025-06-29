import { Form } from "react-router-dom";
import AddCollegeInfo from "./AddCollegeInfo";
import AddOneMentor from "./AddOneMentor";
import { useState } from "react";

const AddCollege = () => {
  const [noOfMentors, setNoOfMentors] = useState(0);

  const handleOnChange = (event) => {
    setNoOfMentors(event.target.value);
  };
  let arr = [];
  if (Number(noOfMentors) > 0) {
    for (let i = 0; i < Number(noOfMentors); i++) {
      arr[i] = i;
    }
  }
  return (
    <Form method="POST">
      <div className="my-5">
        <h1 className="text-center px-3">Add New College and it's Mentors</h1>

        <AddCollegeInfo />

        <div className="col-12 text-center fs-3 myHeading mt-3">
          Mentors' Information
        </div>

        <AddOneMentor rank={1} />
        <div className="col-12 px-4 px-sm-4 py-3 d-flex justify-content-center">
          <span>
            <b className="keyPart">No of Other Mentors: </b>

            <input
              type="number"
              name="noOfMentors"
              className="valuePart"
              placeholder="1 or 2 or 3 ..."
              onChange={(event) => handleOnChange(event)}
            />
          </span>
        </div>

        {Number(noOfMentors) > 0 &&
          arr.map((num) => <AddOneMentor key={num} rank={num + 2} />)}

        <div className="d-flex justify-content-center py-5">
          <div>
            <button className="mySignUpBtn" id="addCollegeAndMentorsBtn">
              Add College & Mentors
            </button>
          </div>{" "}
        </div>
      </div>
    </Form>
  );
};
export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log(data);

  return null;
}
export default AddCollege;
