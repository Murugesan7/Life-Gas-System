import {Link} from "react-scroll";
import React from 'react';
import './Header.css';


const Header = () => {
  return (
    <>
    <div className="header">
      <div className='header__left'>
    <h1>
      Life <span>Gas</span> System
    </h1>
      </div>
      <div className='header__right'>
    <Link to="about" smooth={true} duration={500}>
      <h4>
        About Us
      </h4>
    </Link>
    <Link to="products" smooth={true} duration={500}>
      <h4>
        Our Products
      </h4>
    </Link>
    <Link to="services" smooth={true} duration={500}>
      <h4>
        Our Services
      </h4>
    </Link>
    <Link to="clients" smooth={true} duration={500}>
      <h4>
        Our Clients
      </h4>
    </Link>
    <h4 className="header_rightButton">Join with Our</h4>
      </div>
    </div>
    </>
  )
}

export default Header;