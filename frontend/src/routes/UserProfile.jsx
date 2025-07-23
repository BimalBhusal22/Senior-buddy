import { Form, redirect } from "react-router-dom";
import UserInfo from "../components/user_profile/UserInfo";
import Wishlist from "../components/user_profile/Wishlist";

const UserProfile = () => {
  return (
    <>
      <Form method="POST">
        <UserInfo />
      </Form>
      <Wishlist />
    </>
  );
};

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const user = JSON.parse(localStorage.getItem("user"));
  let bigData = [data, user];
  console.log("data sent to backend from sign up", JSON.stringify(bigData));

  const res = await fetch(
    "http://localhost:7000/api/v1/user/update_user_profile",
    {
      method: "PATCH",
      body: JSON.stringify(bigData),
      headers: { "Content-Type": "application/json" },
    }
  );
  const result = await res.json();
  console.log("Response from server after update user profile: ", result);

  return redirect("/sign_in");
}

export default UserProfile;
