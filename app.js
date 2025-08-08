const express = require("express");
const app = express();

// Middlewares
app.use(express.json());

// Ana route'ları import et
const router = require("./routes/v1/api");

// /v1/api ön eki ile route'ları bağla
app.use("/v1/api", router);

module.exports = app;
