import { Router } from "express";
import { addCollege } from "../controllers/user.controller.js";

const router = Router();

router.route("/add_college").post(
  upload.fields([
    {
      name: clzImage,
      maxCount: 1,
    },
    {
      name: mentorImage,
      maxCount: 10,
    },
  ]),
  addCollege
);

export default router;
