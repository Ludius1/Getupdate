import React from 'react'
import './../footer/footer.css'
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer__container'>
            <div className="footer">
                  <Link to="/"className='logo logo__footer'>GETUPDATE</Link>

                  <div className="first__send">
                                    <input type="email" placeholder='Enter E-mail Address'/>
                                    <span className="send__email">Send</span>
                  </div>

                  <div className="socials">
                        <span><FaLinkedin /></span>
                        <span><FaXTwitter /></span>
                        <span><FaInstagram /></span>
                        <span><FaFacebook /></span>
                  </div>
            </div>
    </div>
  )
}

export default Footer