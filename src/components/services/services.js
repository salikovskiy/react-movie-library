import axios from "axios";
const key = "6085d4a066b006a833bdc8d0882ec4b1";
axios.defaults.baseURL = "https://api.themoviedb.org/3";

export default {
  async getBestOfTheDay() {
    try {
      const data = await axios.get(`/trending/movie/day?api_key=${key}`);
      return data;
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  },
  async searchData(query) {
    try {
      const data = await axios.get(
        `/search/movie?api_key=${key}&language=en-US&query=${query}&page=1&include_adult=false`
      );
      return data;
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  },
  async getDetailsById(id) {
    try {
      const data = await axios.get(
        `/movie/${id}?api_key=${key}&language=en-US`
      );
      return data;
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  },
  async getActorsById(id) {
    try {
      const data = await axios.get(`/movie/${id}/credits?api_key=${key}`);
      return data;
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  },
  async getReviewsById(id) {
    try {
      const data = await axios.get(
        `/movie/${id}/reviews?api_key=${key}&language=en-US&page=1`
      );
      return data;
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  }
};
