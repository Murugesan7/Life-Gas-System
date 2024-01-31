import React from 'react'
import '../TopContent/TopContent.css';
import {Link} from "react-scroll";
import { Element } from 'react-scroll';
const TopContent = () => {
  return (
<Element className="q" id="about">
<div className='topcontent'>
    <div className='topcontent__container'>
        <h1>N Kishore Kumar</h1> 
        <p>Medical equipment supplier</p>
        <a href='https://www.google.co.in'>
            <button className='topcontent__button'>
                Download List
            </button>
        </a>
        <Link to='services' smooth={true} duration={500}>
        </Link>
    </div>
    </div>
</Element>    
   
  
  )
}

export default TopContent;