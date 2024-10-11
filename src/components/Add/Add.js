/** @format */
import "./Add.style.css";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { instance } from "../../axios/axios"
import UploadWidget2 from "../cloudinary/UploadWidget";

const HookForm = () => {
  const [url, seturl] = useState('')
  const [pending, setpending] = useState(false);
  const { register, handleSubmit, reset } = useForm({
    defaultValues: { title: "", quantity: null, volume: null, price: null, type: '', usage: '', describe: '', file: null },
  });

  const onSubmit = async (data) => {
    if (url === '') return 
    data.img = url
    setpending(true);
    const response = await instance.post("/addOne", data,
      );
    
    if (response.data) {
      reset();
      setpending(false);
    }
  };
  return (
    <div className='add-container'>
      {pending && <div>pending...</div>}
      <div className='add-widget-container'>
        <span>img</span>
        <UploadWidget2 widgetStyles={"add-form-elem"} seturl={seturl} />
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className='adder-container'>
        title
        <input
          {...register("title")}
          type='text'
          placeholder='title'
          required
          className='add-form-elem'
        />
        discription
        <input
          {...register("describe")}
          placeholder='discription'
          type='text'
          required
          className='add-form-elem'
        />
        usage
        <input
          {...register("usage")}
          type='text'
          placeholder=''
          required
          className='add-form-elem'
        />
        price
        <input
          {...register("price")}
          type='number'
          placeholder='price'
          required
          className='add-form-elem'
        />
        volume
        <input
          {...register("volume")}
          type='number'
          placeholder='volume'
          required
          className='add-form-elem'
        />
        quantity
        <input
          {...register("quantity")}
          type='number'
          placeholder='quantity'
          required
          className='add-form-elem'
        />
        type
        <select {...register("type")} className='add-form-elem' required>
          <option value='beauty' className='add-form-elem'>
            beauty
          </option>
          <option value='clean' className='add-form-elem'>
            clean
          </option>
        </select>
        <input type='submit' className='add-form-elem add-form-submit' />
      </form>
    </div>
  );
};

export default HookForm