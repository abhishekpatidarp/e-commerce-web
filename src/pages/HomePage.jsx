import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'

function HomePage() {
  const products = JSON.parse(localStorage.getItem("products"));

  return (
    <div className='w-full grid grid-cols-4 p-6'>
      {
        products.length > 0 ?
          products.map((product, index) => {
            return <ProductCard key={product.id} id={product.id} img={product.url} title={product.title} price={product.price} />
          }) :
          <p>no products</p>
      }

    </div>
  )
}

export default HomePage