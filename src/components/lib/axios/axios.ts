// * Import Tools
import axios from "axios";
axios.defaults.withCredentials = true;

export const server = axios.create({
  baseURL: "https://restcountries.com/v3.1/",
});
