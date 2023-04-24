/** @format */
import "./Edit.style.css";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { instance } from "../../axios/axios";

export const Editor = ({ elem: { _id, field }, closerEditor }) => {
  const [pending, setpending] = useState(false);
  const [removingElem, setremovingElem] = useState(true);
  const { register, reset, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    setpending(true);
    data._id = _id;
    try {
      const response = await instance.patch("/editField", data);
      if (response.data) {
        reset();
        setpending(false);
        closerEditor()
        console.log('response.data', response.data)
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {pending && <div>Pending...</div>}
      <form onSubmit={handleSubmit(onSubmit)} className='adder-container'>
        {_id} - {field}
        {field === "img" && <p>Додайте нове фото</p>}
        {field !== "_id" && (
          <input
            {...register(field)}
            placeholder={`${field} edit`}
            type={field !== "img" ? field : "file"}
            required
          />
        )}
        {field === "_id" && (
          <>
            <p>Точно видаляти товар?</p>
            <button
              type='button'
              data-field='approve'
              onClick={() => setremovingElem(false)}>
              підтверджую
            </button>
          </>
        )}
        <input
          type='submit'
          data-field='close'
          value={field !== "_id" ? "редагувати" : "видалити"}
          disabled={removingElem && field === "_id"}
          className={removingElem && field === "_id" ? "danger" : "primary"}
        />
      </form>
      <button type='button' data-field='close'>
        x
      </button>
    </div>
  );
};
