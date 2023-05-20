/** @format */
import axios from "axios";

export let back =  'http://localhost:3000' // process.env.REACT_APP_URL //
  console.log("back", back);

export const instance = axios.create({
  baseURL: back,
  headers: { "Content-Type": "multipart/form-data" },
});


