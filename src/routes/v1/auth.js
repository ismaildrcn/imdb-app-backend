const express = require("express");
const jwt = require("jsonwebtoken");

const router = express.Router();

jwt.sign;

// /v1/api/auth/login
router.post("/login", (req, res) => {
  const token = jwt.sign(
    { userId: 15, email: "example@gamil.com" },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );

  res.json({
    message: "Authentication successful",
    token: token,
    userId: 15,
    expiresIn: 3600, // 1 saat saniye cinsinden});
  });
});

// /v1/api/auth/register
router.post("/register", (req, res) => {
  res.json({ message: "Register endpoint" });
});

module.exports = router;