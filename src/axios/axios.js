/** @format */
import axios from "axios";

export let back =  'https://ersagback.onrender.com' // process.env.REACT_APP_URL //
  console.log("back", back);

export const instance = axios.create({
  baseURL: back,
  headers: { "Content-Type": "multipart/form-data" },
});


