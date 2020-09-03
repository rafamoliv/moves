import axios from "axios";

//Create OMDB API
const api = axios.create({
  baseURL: "https://www.omdbapi.com/?s=man&apikey=972e1325",
});

export default api;
