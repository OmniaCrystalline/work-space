/** @format */
import "./Edit.style.css";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { instance, back } from "../../axios/axios";
import UploadWidget2 from "../cloudinary/UploadWidget";

const editProduct = async (data) => {
  const response = await instance.patch("/editField", data);
  return response;
};

export const Editor = ({ elem: { _id, field }, closerEditor, seteditor }) => {
  const [pending, setpending] = useState(false);
  const [removingElem, setremovingElem] = useState(false);
  const { register, reset, handleSubmit } = useForm();
  const [url, seturl] = useState("");

  const handleImage = async () => {
    setpending(true);
    if (url !== "")
      try {
        const response = await editProduct({
          _id,
          img: url,
        });
        if (response.status === 200) {
          setpending(false);
          seteditor(false);
        }
      } catch (error) {
        console.log("error", error);
      }
  };

  const onSubmit = async (data) => {
    setpending(true);
    data._id = _id;
    if (removingElem) {
      try {
        const thisIsDelete = await instance.delete("/deleteOne", {
          params: { _id },
        });
        if (thisIsDelete.data) {
          reset();
          setpending(false);
          seteditor(false);
        }
      } catch (error) {
        console.log("error", error);
      }
    }
    if (!data?.field || data?.field === "") return;
    else {
      try {
        const response = await editProduct(data);
        if (response.data) {
          reset();
          setpending(false);
          closerEditor();
          console.log("response.data", response.data);
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <>
      <div className='editor-wrapper'>
        {pending && <div>Pending...</div>}
        {field !== "img" && field !== undefined && field !== "" && (
          <>
            <form onSubmit={handleSubmit(onSubmit)} className='adder-container'>
              {_id} - {field}
              {field !== "_id" && field !== "img" && (
                <input
                  {...register(field)}
                  placeholder={`${field} edit`}
                  type={back === "http://localhost:3000" ? "file" : field}
                  required
                  className='search'
                />
              )}
              {field === "_id" && field !== "img" && field !== undefined && (
                <>
                  <p>Точно видаляти товар?</p>
                  <button
                    type='button'
                    data-field='approve'
                    onClick={() => setremovingElem(true)}>
                    підтверджую
                  </button>
                </>
              )}
              {field !== "img" && (
                <input
                  type='submit'
                  data-field='edit'
                  value={field !== "_id" ? "редагувати" : "видалити"}
                  disabled={!removingElem && field === "_id"}
                  className={
                    removingElem && field === "_id" ? "primary" : "danger"
                  }
                />
              )}
            </form>
          </>
        )}
        {field === "img" && (
          <>
            <p>{url === "" ? "Додайте нове фото" : url}</p>
            <UploadWidget2 seturl={seturl} />
            <button onClick={handleImage} className='danger'>
              download
            </button>
          </>
        )}
        <button type='button' data-field='close' onClick={() => reset()}>
          x
        </button>
      </div>
    </>
  );
};
