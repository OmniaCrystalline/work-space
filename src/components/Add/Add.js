/** @format */
//import axios from "axios";

import { useForm } from "react-hook-form";
import { useState } from "react";
import "./Add.style.css";
import { instance } from "../../axios/axios"

export const HookForm = () => {
  const [pending, setpending] = useState(false);
  const { register, handleSubmit, reset } = useForm({
    defaultValues: { title: "", quantity: null, volume: null, price: null, type: '', usage: '', describe: '', file: null },
  });

  const onSubmit = async (data) => {
    setpending(true);
    const response = await instance.post("/addOne", data);
    
    if (response.data) {
      reset();
      setpending(false);
    }
  };
  return (
    <>
      {pending && <div>pending</div>}
      <form onSubmit={handleSubmit(onSubmit)} className='adder-container'>
        title
        <input
          {...register("title")}
          type='text'
          placeholder='title'
          required
          className='search'
        />
        discription
        <input
          {...register("describe")}
          placeholder='discription'
          type='text'
          required
          className='search'
        />
        usage
        <input
          {...register("usage")}
          type='text'
          placeholder='usage'
          required
          className='search'
        />
        image
        <input {...register("file")} type='file' required />
        price
        <input
          {...register("price")}
          type='number'
          placeholder='price'
          required
          className='search'
        />
        volume
        <input
          {...register("volume")}
          type='number'
          placeholder='volume'
          required
          className='search'
        />
        quantity
        <input
          {...register("quantity")}
          type='number'
          placeholder='quantity'
          required
          className='search'
        />
        type
        <select {...register("type")} className='search' required>
          <option value='beauty'>beauty</option>
          <option value='clean'>clean</option>
        </select>
        <input type='submit' className='search' />
      </form>
    </>
  );
};
