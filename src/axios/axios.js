/** @format */
import axios from "axios";

export let back =  process.env.REACT_APP_URL // 'http://localhost:3000'
  console.log("back", back);

export const instance = axios.create({
  baseURL: back,
  headers: { "Content-Type": "multipart/form-data" },
});
