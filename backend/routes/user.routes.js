import express from "express";
import {
  getMyProfile,
  getAdmins,
  register,
  login,
  logout,
} from "../controller/user.controller.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.get("/my-profile", auth, getMyProfile);
router.get("/admins", getAdmins);

export default router;
