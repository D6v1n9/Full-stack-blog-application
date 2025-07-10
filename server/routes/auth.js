import express from "express";
import { register, login, logout } from "../controllers/auth.js";

const router = express.Router();

router.get("/register", (req, res) => {
  res.json("Yes it is working");
});
router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);

export default router;
