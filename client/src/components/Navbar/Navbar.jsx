import React from "react";
import { Link } from "react-router-dom";
import StackOverFlow from "../../assets/StackOverFlow.png";
import { FaSearch } from "react-icons/fa";
import Button from "../../components/Button/Button";
import Avatar from "../../components/Avtar/Avtar";

import "./Navbar.css";
function Navbar() {
  var User = null;

  return (
    <nav>
      <div className='navbar'>
        <Link to='/' className='nav-item nav-logo'>
          <img src={StackOverFlow} alt='logo' height={60} />
        </Link>
        <Link to='/' className='nav-item nav-btn'>
          About
        </Link>
        <Link to='/' className='nav-item nav-btn'>
          Products
        </Link>
        <Link to='/' className='nav-item nav-btn'>
          For Teams
        </Link>
        {/* in react we don't have action in form tag */}
        <form>
          <input type='text' placeholder='Search...' />

          <FaSearch className='search-icon' />
        </form>

        {User === null ? (
          <Link to='/Auth' className='nav-item nav-links'>
            Login
          </Link>
        ) : (
          <>
            <Link to='/' className='nav-item nav-btn'>
              <Avatar> F </Avatar>
            </Link>
            <Button>Log Out</Button>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
