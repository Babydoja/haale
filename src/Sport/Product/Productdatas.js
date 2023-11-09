import React from 'react'

const Productdatas = ({img,title,price}) => {
  return (
    <div className='con'>
         <img src={img} alt='product' className='image' width={40}/>
        <div>
            <h3>{title}</h3>
            <p>{price}</p>
            <button href='#' className='--btn --btn-danger'>Add to cart</button>
        </div>
    </div>
  )
}

export default Productdatas