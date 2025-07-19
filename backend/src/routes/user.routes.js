import { Router } from "express";
import { refreshAccessToken, signIn, signOut, signUp } from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/sign_up").post(signUp);
router.route("/sign_in").post(signIn);

//secured routes
router.route("/sign_out").post(verifyJWT, signOut);
router.route("/refresh_access_token").post(refreshAccessToken);

export default router;
