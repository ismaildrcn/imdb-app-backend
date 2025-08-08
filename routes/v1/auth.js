const express = require("express");
const jwt = require("jsonwebtoken");
const { createUser, getUserByEmail, User } = require("../../queries/user.js");

const router = express.Router();

jwt.sign;

// /v1/api/auth/login
router.post("/login", async (req, res) => {
  console.log(req.body);
  const { email, password } = req.body;
  const user = await getUserByEmail(email);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  console.log(user);
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
router.post("/register", async (req, res) => {
  console.log(req.body);
  const existingUser = await User.findOne({
    where: { email: req.body.email },
  });

  if (existingUser) {
    console.log("Email already exists");
    return res.status(400).json({ message: "Email already exists" });
  }

  const user = await createUser(req.body);
  if (!user) {
    return res.status(500).json({ message: "User could not be created" });
  }

  const token = jwt.sign(
    { userId: user.id, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: "7d" }
  );

  res.status(200).json({
    message: "Registration successful",
    token: token,
    userId: user.id,
    expiresIn: 604800, // 7 gün saniye cinsinden
  });
});

module.exports = router;
