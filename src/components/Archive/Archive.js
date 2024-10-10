/** @format */

import { useEffect, useState } from "react";
import { instance } from "../../axios/axios";

const Archive = () => {
  const [pending, setpending] = useState(false);
  //const [orders, setorders] = useState([]);

  useEffect(() => {
    (async () => {
      setpending(true);
      await instance.get("/archive").then(res=>setpending(false))
      //setorders(res.data.data);
    })();
  }, []);
    return (
      <>
        {pending && <p>pending...</p>}
        {!pending && <div>maybe later</div>}
      </>
    );
};

export default Archive