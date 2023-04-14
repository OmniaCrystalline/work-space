/** @format */

import axios from "axios";
import { useState, useEffect } from "react";
axios.defaults.baseURL = "https://ersagback.onrender.com";

export const ListOfProducts = async () => {
  const [list, setlist] = useState([]);
  

  useEffect(() => {
      try {
          const res = axios.get("/products");
          setlist(res.data)
      } catch (error) {
        console.log('error.message', error.message)
      }
  }, []);

  console.log("list", list);
    return (
      <>
        <ul>
          {list.map(({ img, title, quantity, volume, price, _id }) => (
            <li key={_id}>
              {title}-{price}
            </li>
          ))}
        </ul>
      </>
    );
};
