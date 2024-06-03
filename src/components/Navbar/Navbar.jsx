import React, { useState, useEffect } from 'react'
import { IoMdMenu } from "react-icons/io";
// import { Link } from 'react-router-dom';
import { CiSearch } from "react-icons/ci";
import { IoMdArrowDropdown } from "react-icons/io";
import './navbar.css'
import { Link } from 'react-router-dom';
import { MdCancel } from "react-icons/md";


const Navbar = () => {
  const [openMenu, setopenMenu] = useState(true)

  // const changeMenu = () => {
  //     setopenMenu((prev=>!prev))
  // }
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

                        <span className="menu"><IoMdMenu onClick={()=>setopenMenu(true)}/></span>
                    </span>
                </div>
              {
                openMenu?
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
  
                <div className="cancel">
                <small><MdCancel onClick={()=>setopenMenu(false)}  /></small>
                </div>
  
                <ul className='right__link'>
                        <input type="text" placeholder='Search for latest news, update...' />
                        <span><CiSearch /></span>
                        
                </ul>
            </div> :null
              }
          
           
        </div>
        
    </div>
  )
}

export default Navbar