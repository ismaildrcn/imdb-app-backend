const express = require("express");
const router = express.Router();

// /v1/api/status → Bu şekilde erişilecek
router.get("/status", (req, res) => {
  res.json({ status: "Running", version: "v1" });
});

// /v1/api/ Local Alt route'ları bağlama
router.use("/auth", require("./auth"));
router.use("/user", require("./user"));

// /v1/api/ remote alt route'ları bağlama
router.use("/remote/3", require("./movie/movie"));

module.exports = router;
