import { asyncHandler } from "../utils/asyncHandler.js";

const signUp = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: "ok",
  });
});

export { signUp };
