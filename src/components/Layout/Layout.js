/** @format */
import './Layout.style.css'
import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
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
          <NavLink to='/archive' className='navlink'>
            archive
          </NavLink>
        </div>
        <div className='main'>
          <Outlet />
        </div>
      </div>
    </>
  );
};


export default Layout