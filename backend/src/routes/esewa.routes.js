import { Router } from "express";
import {
  EsewaInitiatePayment,
  paymentStatus,
} from "../controllers/esewa.controller.js";

const router = Router();

router.route("/initiate_payment").post(EsewaInitiatePayment);
router.route("/payment_status").post(paymentStatus);

export default router;
