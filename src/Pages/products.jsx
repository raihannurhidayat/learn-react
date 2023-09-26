import React from 'react'
import Button from '../components/Elements/button'
import CardProduct from '../components/Fragments/CardProduct'

const products = [
  {
    id: 1,
    name: "walpaper baru",
    price: "Rp. 1.000.000",
    images: "/images/product1.png",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod, facere a eum animi fuga tempora, quo iste at quae eveniet minima, illo natus ullam laborum veniam dolor doloribus amet molestiae quidem? Repudiandae deserunt dignissimos inventore delectus molestiae ab id? Illo ut molestias odit veniam consectetur dignissimos. Sint consectetur deserunt vero!"
  },
  {
    id: 2,
    name: "walpaper lama",
    price: "Rp. 500.000",
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
  return (
    <>
      <div className='flex justify-end h-10 bg-blue-600 text-white items-center px-10'>
        {email}
        <Button className="ml-5" action='logout' onClick={handleLogout}/>
      </div>
      <div className='flex justify-center py-5'>
        {products.map((product) => (
          <CardProduct key={product.id}>
            <CardProduct.Header images={product.images} />
            <CardProduct.Body name={product.name}>
              {product.description}
            </CardProduct.Body>
            <CardProduct.Footer price={product.price} />
          </CardProduct>
        ))}
      </div>
    </>
  )
}

export default ProductsPage