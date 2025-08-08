const express = require("express");
const jwt = require("jsonwebtoken");
const { createUser } = require("../../queries/user.js");

const router = express.Router();

jwt.sign;

// /v1/api/auth/login
router.post("/login", async (req, res) => {
  const user = await createUser();
  const token = jwt.sign(
    { userId: user.id, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: "7d" }
  );

  res.json({
    message: "Authentication successful",
    token: token,
    userId: user.id,
    expiresIn: 604800, // 7 gün saniye cinsinden
  });
});

// /v1/api/auth/register
router.post("/register", (req, res) => {
  res.json({ message: "Register endpoint" });
});

module.exports = router;
