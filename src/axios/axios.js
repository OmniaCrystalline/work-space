/** @format */
import axios from "axios";

const { REACT_APP_URL } = process.env

export const back = REACT_APP_URL

export const instance = axios.create({
  baseURL: REACT_APP_URL,
  headers: { "Content-Type": "multipart/form-data" },
});


