import React from 'react'
import { IoMdMenu } from "react-icons/io";
// import { Link } from 'react-router-dom';
import { CiSearch } from "react-icons/ci";
import { IoMdArrowDropdown } from "react-icons/io";
import './navbar.css'
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <div>

        <div className="navbar">
                <div className="left__nav">
                    <Link to="/"className='logo'>GETUPDATE</Link>
                    
                    <span className='nav__span'>
                      
                      <ul className='right__link nav__right__link'>
                                <input type="text" placeholder='Search for latest news, update...' />
                                <span><CiSearch /></span>
                        </ul>

                        <span className="menu"><IoMdMenu /></span>
                    </span>
                </div>

              <div className="middle__nav">
                        <ul className='left__link'>
                            <div className="entertaiment">
                              <a href="">ENTERTAINMENT</a>
                              <span><IoMdArrowDropdown /></span>
                            </div>

                            <Link to="/">CULTURE</Link>
                            <Link to="/">SMALL BUSINESS</Link>
                            <Link to="/blog">GETUPDATE U</Link>
                            <Link to="/">BRANDS</Link>


                            <div className="entertaiment">
                                <Link to="/">NEW UPDATE</Link>
                                <span><IoMdArrowDropdown /></span>
                            </div>
                        </ul>

                        <ul className='right__link'>
                                <input type="text" placeholder='Search for latest news, update...' />
                                <span><CiSearch /></span>
                        </ul>
                    </div>
           
        </div>
        
    </div>
  )
}

export default Navbar