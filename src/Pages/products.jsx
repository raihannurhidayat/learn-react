import React, { useEffect, useRef, useState } from 'react'
import Button from '../components/Elements/button'
import CardProduct from '../components/Fragments/CardProduct'
import { getProducts } from '../services/product.service'
import { getUsername } from '../services/auth.service'


const handleLogout = () => {
  localStorage.removeItem('token')
  window.location.href = '/login'
}


const ProductsPage = () => {
  const [cart, setCart] = useState([])
  const [totalPrice, seTotalPrice] = useState(0)
  const [products, setProducts] = useState([])
  const [username, setUsername] = useState('')

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem('cart')) || [])
  }, [])

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      setUsername(getUsername(token))
    } else {
      
      window.location.href = '/login'
    }
  }, [])

  useEffect(() => {
    getProducts((data) => {
      setProducts(data)
    })
  }, [])

  useEffect(() => {
    if (products.length > 0 && cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = products.find((product) => product.id == item.id)
        return acc + product.price * item.quantity
      }, 0)
      seTotalPrice(sum)
      localStorage.setItem('cart', JSON.stringify(cart))
    }
  }, [cart, products])

  const handleAddCart = (id) => {
    if (cart.find((item) => item.id == id)) {
      setCart(cart.map((item) => item.id == id ? { ...item, quantity: item.quantity + 1 } : item))
    } else {
      setCart([
        ...cart,
        {
          id,
          quantity: 1
        }
      ])
    }
  }

  return (
    <>
      <div className='flex justify-end h-20 bg-blue-600 text-white items-center px-10'>
        {username}
        <Button className="ml-5" action='logout' onClick={handleLogout} />
      </div>
      <div className='flex justify-center py-5'>
        <div className="w-3/4 flex flex-wrap">
          {products.length > 0 && products.map((product) => (
            <CardProduct key={product.id}>
              <CardProduct.Header images={product.image} />
              <CardProduct.Body name={product.title}>
                {product.description}
              </CardProduct.Body>
              <CardProduct.Footer price={product.price} handleAddCart={handleAddCart} id={product.id} />
            </CardProduct>
          ))}
        </div>
        <div className="w-1/4">
          <div className="text-3xl font-bold text-blue-600 ml-5 mb-2">Cart</div>
          <table className='text-left table-auto border-separate border-spacing-x-5'>
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {products.length > 0 && cart.map((item, key) => {
                const product = products.find((product) => product.id == item.id)
                return (
                  <tr key={key}>
                    <td>{product.title.substring(0, 10)}...</td>
                    <td>{product.price}</td>
                    <td>{item.quantity}</td>
                    <td>$.{item.quantity * product.price}</td>
                  </tr>
                )
              })}
              <tr>

                <td colSpan={3}><b>Total Price</b></td>
                <td>$.{totalPrice}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </>
  )
}

export default ProductsPage