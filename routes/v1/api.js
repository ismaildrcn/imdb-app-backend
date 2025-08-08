const express = require("express");
const auth = require("./auth.js");
const user = require("./user.js");
const movie = require("./movie/movie.js");

const router = express.Router();

// /v1/api/status → Bu şekilde erişilecek
router.get("/status", (req, res) => {
  res.json({ status: "Running", version: "v1" });
});

// /v1/api/ Local Alt route'ları bağlama
router.use("/auth", auth);
router.use("/user", user);

// /v1/api/ remote alt route'ları bağlama
router.use("/remote/3", movie);

module.exports = router;
