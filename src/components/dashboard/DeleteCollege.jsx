import { Form } from "react-router-dom";

const DeleteCollege = () => {
  return (
    <>
      <Form method="POST">
        <h1 className="text-center px-3 mt-5">
          Delete College and it's Mentors Information
        </h1>

        <h3 className="text-center p-3">
          Enter College Name:{" "}
          <input
            type="text"
            name="collegeName"
            id="collegeNameInputBox"
            className=" valuePart collegeNameInput ms-sm-3"
            placeholder="College Name"
            required
          />
        </h3>

        <div className="d-flex justify-content-center py-5">
          <div>
            <button className="mySignUpBtn" id="deleteCollegeAndMentorsBtn">
              Delete College & Mentors
            </button>
          </div>
        </div>
      </Form>
    </>
  );
};
export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log(data);

  return null;
}

export default DeleteCollege;
