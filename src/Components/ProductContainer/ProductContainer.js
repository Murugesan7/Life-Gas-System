import React from 'react'
import { Element } from 'react-scroll';
import product from  "../img/p1.jpg"

const ProductContainer = () => {
  return (
    <Element className="productcontainer" id="products">
      <div className='productcontainer_image'>
        <img src={product} alt=''></img>
      </div>
    </Element>
  )
}

export default ProductContainer;