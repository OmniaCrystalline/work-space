/** @format */

import { useEffect, useState } from "react";
import { instance } from "../../axios/axios";

export const Archive = () => {
  const [pending, setpending] = useState(false);
  const [orders, setorders] = useState([]);

  useEffect(() => {
    (async () => {
      setpending(true);
      const res = await instance.get("/archive").then(res=>setpending(false))
      setorders(res.data.data);
    })();
  }, []);

  console.log("orders", orders);

    return <>
        {pending && <p>pending...</p>}
    </>;
};
