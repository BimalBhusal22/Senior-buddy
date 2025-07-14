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
  console.log(data);

  return null;
}
export default UserProfile;
