import React from "react";
import "./LeftSidebar.css";
import { NavLink } from "react-router-dom";
// import Globe from "../../assets/Globe.svg";
import { FaGlobe } from "react-icons/fa";
const LeftSidebar = () => {
  return (
    <div className='left-sidebar'>
      <nav className='side-nav'>
        <NavLink to='/' className='side-nav-links' activeClassName='active'>
          <p>Home</p>
        </NavLink>
        <div className='side-nav-div'>
          <div>
            <p>Public</p>
          </div>
          <NavLink
            to='/Questions'
            className='side-nav-links'
            activeClassName='active'
            style={{ paddingLeft: "40px" }}
          >
            <FaGlobe />
            <p style={{ paddingLeft: "10px" }}>Questions</p>
          </NavLink>
          <NavLink
            to='/Tags'
            style={{ paddingLeft: "40px" }}
            className='side-nav-links'
            activeClassName='active'
          >
            <p>Tags</p>
          </NavLink>

          <NavLink
            to='/Users'
            style={{ paddingLeft: "40px" }}
            className='side-nav-links'
            activeClassName='active'
          >
            <p>Users</p>
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default LeftSidebar;
