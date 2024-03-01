import React,{useEffect} from "react";
import { Link } from "react-router-dom";
import StackOverFlow from "../../assets/StackOverFlow.png";
import { FaSearch } from "react-icons/fa";
import {useSelector,useDispatch} from 'react-redux';
import Avatar from "../Avatar/Avatar";

import "./Navbar.css";
import { setCurrentUser } from "../../actions/currentUser";
function Navbar() {
  var User = useSelector(state => state.currentUserReducer)
 
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))
  },[dispatch])
  return (
    <nav className='main-nav'>
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
          <div className='search-icon'>
            <FaSearch />
          </div>
        </form>

        {User === null ? (
          <Link to='/Auth' className='nav-item nav-links'>
            Login
          </Link>
        ) : (
          <>
            <Avatar
              backgroundColor='#009dff'
              px='10px'
              py='7px'
              borderRadius='50%'
            >
              <Link
                to='/User'
                style={{ textDecoration: "none", color: "white" }}
              >
                {User.result.name.charAt(0).toUpperCase()}
              </Link>
            </Avatar>

            <button className='nav-item nav-links'>Log Out</button>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
