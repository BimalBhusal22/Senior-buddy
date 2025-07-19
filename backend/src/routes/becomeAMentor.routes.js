import { Router } from "express";
import { addBecomeAMentorRequest } from "../controllers/becomeAMentor.controller.js";
import { upload } from "../middlewares/multer.middleware.js";

const router = Router();

router.route("/add_become_a_mentor_request").post(
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
  addBecomeAMentorRequest
);

// router.route("/add_mentor").post(addMentor);

export default router;
