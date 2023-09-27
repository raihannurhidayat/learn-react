import React from 'react'
import Button from '../Elements/button'

const CardProduct = ({ children }) => {
  return (
    <div className='w-full max-w-xs bg-gray-800 border border-gray-700 rounded-lg shadow mx-3 flex-col flex justify-between mb-3'>
      {children}
    </div>
  )
}

const Header = ({ images }) => {
  return (
    <a href="" className=''>
      <img className='p-8 rounded-t-lg h-60 w-full object-cover' src={images} alt="" />
    </a>
  )
}

const Body = ({ children, name }) => {
  return (
    <div className="px-5 pb-5 h-full">
      <a href="">
        <h5 className='text-xl font-semibold tracking-tight text-white'>{name.substring(0, 20)}...</h5>
        <p className='text-sm text-white'>{ children.substring(0, 100) }</p>
      </a>
    </div>
  )
}

const Footer = ({ price, handleAddCart, id }) => {
  return (
    <div className="flex items-center justify-between px-5 pb-5">
      <span className='text-3xl font-bold text-white'>$.{price}</span>
      <Button action='Add to Card' variant='bg-blue-600' onClick={() => handleAddCart(id)} />
    </div>
  )
}

CardProduct.Body = Body
CardProduct.Header = Header
CardProduct.Footer = Footer

export default CardProduct