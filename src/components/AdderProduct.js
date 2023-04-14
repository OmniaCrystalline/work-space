/** @format */
//import axios from "axios";

import { useForm } from "react-hook-form";
//import {  useEffect,  //useState} from "react";
import "./AdderProduct.style.css";
import axios from "axios";



axios.defaults.baseURL = '"" || process.env.REACT_APP_URL';

export const HookForm = () => {
  const {
    register,
    handleSubmit,
    // reset
  } = useForm();

  const onSubmit = (data) => {
   // const formData = new FormData();
    //formData.append("file", data.file[0]);
console.log('data', data)
    const response = axios.post("/addOne", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    alert(response.message);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className='adder-container'>
      title
      <input {...register("title")} type='text' placeholder='title' required />
      discription
      <input
        {...register("describe")}
        placeholder='discription'
        type='text'
        required
      />
      usage
      <input {...register("usage")} type='text' placeholder='usage' required />
      image-link
      <input {...register("img")} type='text' placeholder='img' required />
      file
      <input {...register("file")} type='file' required />
      price
      <input
        {...register("price")}
        type='number'
        placeholder='price'
        required
      />
      volume
      <input
        {...register("volume")}
        type='number'
        placeholder='volume'
        required
      />
      quantity
      <input
        {...register("quantity")}
        type='number'
        placeholder='quantity'
        required
      />
      type
      <select {...register("type")} required>
        <option value='beauty'>beauty</option>
        <option value='clean'>clean</option>
      </select>
      <input type='submit' />
    </form>
  );
};
