/** @format */
import axios from "axios";

let back = process.env.REACT_APP_URL;

export const instance = axios.create({
  baseURL: back,
  headers: { "Content-Type": "multipart/form-data" },
});
