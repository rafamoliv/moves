import axios from "axios";

//Create OMDB API
const api = axios.create({
  baseURL: "https://www.omdbapi.com",
});

export default api;
