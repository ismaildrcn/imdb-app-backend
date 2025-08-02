const express = require("express");
const router = express.Router();

router.get("/my", (req, res) => {
  res.json({ user: "İsmail Durcan", version: "v1" });
});

module.exports = router;