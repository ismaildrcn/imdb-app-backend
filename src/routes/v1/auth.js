const express = require("express");
const router = express.Router();

// /v1/api/auth/login
router.post("/login", (req, res) => {
  res.json({ message: "Login endpoint" });
});

// /v1/api/auth/register
router.post("/register", (req, res) => {
  res.json({ message: "Register endpoint" });
});

module.exports = router;