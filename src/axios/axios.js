/** @format */
import axios from "axios";
export const back = require(process.env.REACT_APP_URL)

export const instance = axios.create({
  baseURL: process.env.REACT_APP_URL,
  headers: { "Content-Type": "multipart/form-data" },
});


