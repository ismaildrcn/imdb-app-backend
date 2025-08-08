const axiosInstance = require("./base.js");

const EXTERNAL_API = process.env.BASE_URL;
const API_TOKEN = process.env.API_TOKEN;

class ExternalApiService {
  static customAxios = axiosInstance(`${EXTERNAL_API}/3`, API_TOKEN);

  static async getMovie(movieID) {
    try {
      const rsp = await this.customAxios.get(`/movie/${movieID}`);
      return rsp.data;
    } catch (error) {
      console.error("External API Error:", error.rsp?.data || error.message);
      throw new Error("External service unavailable");
    }
  }

  static async getMovies(movieType) {
    try {
      const rsp = await this.customAxios.get(`/movie/${movieType}`);
      return rsp.data;
    } catch (error) {
      console.error("External API Error:", error.rsp?.data || error.message);
      throw new Error("External service unavailable");
    }
  }

  static async getCredits(movieID) {
    try {
      const rsp = await this.customAxios.get(`/movie/${movieID}/credits`);
      return rsp.data;
    } catch (error) {
      console.error("External API Error:", error.rsp?.data || error.message);
      throw new Error("External service unavailable");
    }
  }

  static async getPerson(personId) {
    try {
      const rsp = await this.customAxios.get(`/person/${personId}`);
      return rsp.data;
    } catch (error) {
      console.error("External API Error:", error.rsp?.data || error.message);
      throw new Error("External service unavailable");
    }
  }

  static async getReviews(movieID) {
    try {
      const rsp = await this.customAxios.get(`/movie/${movieID}/reviews`);
      return rsp.data;
    } catch (error) {
      console.error("External API Error:", error.rsp?.data || error.message);
      throw new Error("External service unavailable");
    }
  }

  static async getGenre() {
    try {
      const rsp = await this.customAxios.get("/genre/movie/list");
      return rsp.data;
    } catch (error) {
      console.error("External API Error:", error.rsp?.data || error.message);
      throw new Error("External service unavailable");
    }
  }

  static async getVideo(movieID) {
    try {
      const rsp = await this.customAxios.get(`/movie/${movieID}/videos`);
      return rsp.data;
    } catch (error) {
      console.error("External API Error:", error.rsp?.data || error.message);
      throw new Error("External service unavailable");
    }
  }
}

module.exports = ExternalApiService;
