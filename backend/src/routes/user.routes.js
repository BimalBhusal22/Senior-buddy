import { Router } from "express";
import {
  changeCurrentPassword,
  getAllUsers,
  getCurrentUser,
  refreshAccessToken,
  signIn,
  signOut,
  signUp,
  updateAccountDetails,
} from "../controllers/user.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/sign_up").post(signUp);
router.route("/sign_in").post(signIn);

//secured routes
router.route("/sign_out").post(verifyJWT, signOut);
router.route("/refresh_access_token").post(verifyJWT,refreshAccessToken);
router.route("/change_password").post(verifyJWT, changeCurrentPassword);
router.route("/get_current_user").get(verifyJWT, getCurrentUser);
router.route("/get_all_users").get(verifyJWT, getAllUsers);
router.route("/update_user_profile").patch(verifyJWT, updateAccountDetails);

export default router;
