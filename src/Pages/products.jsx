import React, { useEffect, useRef, useState } from 'react'
import Button from '../components/Elements/button'
import CardProduct from '../components/Fragments/CardProduct'

const products = [
  {
    id: 1,
    name: "walpaper baru",
    price: 1000000,
    images: "/images/product1.png",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod, facere a eum animi fuga tempora, quo iste at quae eveniet minima, illo natus ullam laborum veniam dolor doloribus amet molestiae quidem? Repudiandae deserunt dignissimos inventore delectus molestiae ab id? Illo ut molestias odit veniam consectetur dignissimos. Sint consectetur deserunt vero!"
  },
  {
    id: 2,
    name: "walpaper lama",
    price: 500000,
    images: "/images/product1.png",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod, facere a eum animi fuga tempora, quo iste at quae eveniet minima, illo natus ullam laborum veniam dolor doloribus amet molestiae quidem?"
  },
]

const email = localStorage.getItem('email')

const handleLogout = () => {
  localStorage.removeItem('email')
  localStorage.removeItem('password')
  window.location.href = '/login'
}


const ProductsPage = () => {
  const [cart, setCart] = useState([])
  const [totalPrice, seTotalPrice] = useState(0)

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem('cart')) || [])
  }, [])

  useEffect(() => {
    if (cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = products.find((product) => product.id == item.id)
        return acc + product.price * item.quantity
      }, 0)
      seTotalPrice(sum)
      localStorage.setItem('cart', JSON.stringify(cart))
    }
  }, [cart])

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

  // useReff start
  const carHref = useRef([
    {
      id: 1,
      quantity: 1
    }
  ])
  // useReff end


  return (
    <>
      <div className='flex justify-end h-20 bg-blue-600 text-white items-center px-10'>
        {email}
        <Button className="ml-5" action='logout' onClick={handleLogout} />
      </div>
      <div className='flex justify-center py-5'>
        <div className="w-3/4 flex flex-wrap">
          {products.map((product) => (
            <CardProduct key={product.id}>
              <CardProduct.Header images={product.images} />
              <CardProduct.Body name={product.name}>
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
              {cart.map((item, key) => {
                const product = products.find((product) => product.id == item.id)
                return (
                  <tr key={key}>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>{item.quantity}</td>
                    <td>Rp.{item.quantity * product.price}</td>
                  </tr>
                )
              })}
              <tr>

                <td colSpan={3}><b>Total Price</b></td>
                <td>Rp. {totalPrice}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </>
  )
}

export default ProductsPage