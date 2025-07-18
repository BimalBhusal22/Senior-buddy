import { Router } from "express";
import { addMentor } from "../controllers/admin.controller.js";
import { upload } from "../middlewares/multer.middleware.js";

const router = Router();

router.route("/add_mentor").post(
  upload.fields([
    {
      name: "mentorImage",
      maxCount: 1,
    },
    {
      name: "collegeImage",
      maxCount: 1,
    },
  ]),
  addMentor
);

// router.route("/add_mentor").post(addMentor);

export default router;
