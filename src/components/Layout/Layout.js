/** @format */
import './Layout.style.css'
import { NavLink, Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <div className='layout'>
        <div className='sidebar'>
          <NavLink to='/add' className='navlink'>
            add product
          </NavLink>
          <NavLink to='/edit' className='navlink'>
            edit product
          </NavLink>
          <NavLink to='/orders' className='navlink'>
            orders
          </NavLink>
        </div>
        <div className='main'>
          <Outlet />
        </div>
      </div>
    </>
  );
};
