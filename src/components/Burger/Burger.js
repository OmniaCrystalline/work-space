/** @format */
import "./Burger.style.css";
import { useState } from "react";

export const Burger = () => {
  const [open, setopen] = useState(false);
  return (
    <>
      <button type='button' onClick={() => setopen(!open)}>
        open
      </button>
      <div className={open ? "drop" : "insisible"}>
        <div className={open ? "burger-container active" : "burger-container"}>
          <button type='button' onClick={() => setopen(!open)}>
            close
          </button>
        </div>
      </div>
    </>
  );
};
