/** @format */
import "./Orders.style.css";
import { useEffect, useState } from "react";
import { instance } from "../../axios/axios";

const Orders = () => {
  const [orders, setorders] = useState([]);
  const [pending, setpending] = useState(false);

  useEffect(() => {
    const dataFetch = setTimeout(async () => {
      setpending(true);
      const res = await instance
        .get("/order")
        .catch((e) => console.error(e))
        .finally(() => setpending(false));
      setorders(res.data.data);
    }, 1000);

    return () => {
      clearTimeout(dataFetch);
    };
  }, []);

  const markAsProcessed = async(_id) => {
    console.log('_id', _id)
    try {
      const res = await instance.patch("/moveToArchive", _id, {
        headers: {
          "Content-Type": "application/json"
        }
      });
      if(res.data) alert(`${{_id}} was marked as processed`)
      return res.data;
    } catch (error) {
      console.log('error.message', error.message)
    }
  } 

  return (
    <>
      {pending && <p>pending...</p>}
      {orders && orders.length > 0 && (
        <ol>
          {orders.map(({ name, order, phone, _id }) => (
            <li key={_id} className='order'>
              <div className='order-info'>
                <p>замовник: {name}</p>
                <p>тел.: {phone}</p>
                <button type='button' 
                onClick={() => markAsProcessed({_id})}
                >відмаркувати як оброблений</button>
              </div>
              <ul>
                <div className='table-row'>
                  <span>#</span>
                  <span>назва</span>
                  <span>кількість</span>
                  <span>ціна</span>
                </div>
                {order.map((elem, index) => {
                  return (
                    <div className='table-row' key={index}>
                      <span>{index + 1}</span>
                      <span>{elem.title}</span>
                      <span>{elem.quantity}</span>
                      <span>{elem.price}</span>
                    </div>
                  );
                })}
                <div className='table-row' key={order.title}>
                  сума:{" "}
                  {order.reduce((acc, curr) => {
                    return acc + curr.price * curr.quantity;
                  }, 0)}{" "}
                  грн
                </div>
              </ul>
            </li>
          ))}
        </ol>
      )}
    </>
  );
};

export default Orders