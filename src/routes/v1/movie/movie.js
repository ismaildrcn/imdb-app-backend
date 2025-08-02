const express = require("express");
const asiosInstance = require("../../../services/externalApi");
const router = express.Router();

router.get("/movie/:movieID", async (req, res) => {
  const movieID = req.params.movieID; // URL'den gelen ID string olarak

  console.log(req);
  remoteResp = await asiosInstance.getMovie(movieID);
  res.json(remoteResp);
});

router.get("/movie/:movieType", async (req, res) => {
  const movieType = req.params.movieType; // URL'den gelen ID string olarak

  console.log(req);
  remoteResp = await asiosInstance.getMovie(movieType);
  res.json(remoteResp);
});

router.get("/movie/:movieID/credits", async (req, res) => {
  const movieID = req.params.movieID; // URL'den gelen ID string olarak

  console.log(req);
  remoteResp = await asiosInstance.getCredits(movieID);
  res.json(remoteResp);
});

router.get("/movie/:movieID/reviews", async (req, res) => {
  const movieID = req.params.movieID; // URL'den gelen ID string olarak

  console.log(req);
  remoteResp = await asiosInstance.getReviews(movieID);
  res.json(remoteResp);
});

router.get("/person/:personID/", async (req, res) => {
  const personID = req.params.personID; // URL'den gelen ID string olarak

  console.log(req);
  remoteResp = await asiosInstance.getPerson(personID);
  res.json(remoteResp);
});

router.get("/genre/movie/list", async (req, res) => {
  console.log(req);
  remoteResp = await asiosInstance.getGenre();
  res.json(remoteResp);
});

router.get("/movie/:movieID/videos", async (req, res) => {
  const movieID = req.params.movieID; // URL'den gelen ID string olarak
  console.log(req);
  remoteResp = await asiosInstance.getVideo(movieID);
  res.json(remoteResp);
});

module.exports = router;
