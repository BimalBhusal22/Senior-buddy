import { Form } from "react-router-dom";
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
  console.log("Received from form:", data);

  // Here you can forward the data to your backend API, for example:
  // await fetch('/api/update-user', {
  //   method: 'POST',
  //   body: JSON.stringify(data),
  //   headers: { 'Content-Type': 'application/json' }
  // });

  return null;
}

export default UserProfile;
