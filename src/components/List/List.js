/** @format */
import "./List.style.css";
import { Editor } from "../Edit/Edit";
import { useState, useEffect } from "react";
import { instance } from "../../axios/axios";

export const List = () => {
  const [list, setlist] = useState([]);
  const [pending, setpending] = useState(false);
  const [editor, seteditor] = useState(false);
  const [elem, setelem] = useState({
    _id: "",
    field: "",
  });
  const [filter, setfilter] = useState("");

  const pattern = /^http/;

  const getList = async () => {
    setpending(true);
    const res = await instance
      .get("/products")
      .catch((err) => console.error(err))
      .finally(() => setpending(false));
    console.log('res.data.data', res.data.data)
    setlist(res.data.data);
  };

  useEffect(() => {
    getList();
  }, []);

  const closerEditor = () => {
    seteditor(!editor);
  };

  useEffect(() => {
    if (!editor) getList();
  }, [editor]);

  const editorToggle = (e, _id) => {
    if (e.target.nodeName !== "BUTTON") return;
    if (e.target.dataset.field === "approve") return;
    if (e.target.dataset.field === "close") seteditor(false);
    else {
      if (!_id) {
        seteditor(false);
        return;
      } else {
        seteditor(true);
        setelem({
          _id,
          field: e.target.dataset.field,
        });
      }
    }
  };

  const filteredList =
    filter !== ""
      ? list.filter((e) => e.title.toLowerCase().includes(filter.toLowerCase()))
      : list;

  return (
    <>
      <div className='table'>
        {pending && <div>Pending...</div>}
        <input
          type='text'
          className='search'
          placeholder='search'
          onChange={(e) => setfilter(e.target.value)}></input>
        {filteredList?.length > 0 &&
          filteredList?.map(({ img, title, quantity, volume, price, _id, describe, usage, type }) => {
            const imgUrl = pattern.test(img)
              ? img
              : `${process.env.REACT_APP_URL}static/${img}`;
            return (
              <div
                className={
                  editor && elem._id === _id ? "active-raw" : "table-raw"
                }
                key={_id}
                onClick={(e) => editorToggle(e, _id)}>
                <div className='item'>
                  <span className='heading-item'>назва</span>
                  <span className='table-elem'>{title}</span>

                  <button type='button' data-field='title'>
                    ред.
                  </button>
                </div>
                <div className='item'>
                  <span className='heading-item'>фото</span>
                  <img
                    className='table-elem table-img'
                    src={imgUrl}
                    alt={img}></img>
                  <button type='button' data-field='img'>
                    ред.
                  </button>
                </div>
                <div className='item'>
                  <span className='heading-item'>кількість</span>
                  <span className='table-elem'>{quantity}</span>
                  <button type='button' data-field='quantity'>
                    ред.
                  </button>
                </div>
                <div className='item'>
                  <span className='heading-item'>об'єм</span>
                  <span className='table-elem'>{volume}</span>
                  <button type='button' data-field='volume'>
                    ред.
                  </button>
                </div>
                <div className='item'>
                  <span className='heading-item'>ціна</span>
                  <span className='table-elem'>{price}</span>
                  <button type='button' data-field='price'>
                    ред.
                  </button>
                </div>
                <div className='item'>
                  <span className='heading-item'>метод корист.</span>
                  <span className='table-elem'>{usage}</span>
                  <button type='button' data-field='usage'>
                    ред.
                  </button>
                </div>
                <div className='item'>
                  <span className='heading-item'>опис</span>
                  <span className='table-elem'>{describe}</span>
                  <button type='button' data-field='describe'>
                    ред.
                  </button>
                </div>
                <div className='item'>
                  <span className='heading-item'>тип</span>
                  <span className='table-elem'>{type}</span>
                  <button type='button' data-field='type'>
                    ред.
                  </button>
                </div>
                <div className='item'>
                  <span className='heading-item'>_id</span>
                  <span className='table-elem'>{_id}</span>
                  <button type='button' data-field='_id'>
                    вид.
                  </button>
                </div>
                {editor && elem._id === _id && (
                  <Editor elem={elem} closerEditor={closerEditor} />
                )}
              </div>
            );
          })}
      </div>
    </>
  );
};
