import { Router } from "express";
import {
  addMentor,
  deleteMentor,
  getAllMentors,
  getAllMentorsForAdmin,
  getOneMentor,
  updateMentor,
} from "../controllers/admin.controller.js";
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
router.route("/update_mentor").post(
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
  updateMentor
);
router.route("/get_one_mentor").post(getOneMentor);
router.route("/delete_mentor").post(deleteMentor);
router.route("/get_all_mentors").get(getAllMentors);
router.route("/get_all_mentors_for_admin").get(getAllMentorsForAdmin);

// router.route("/add_mentor").post(addMentor);

export default router;
