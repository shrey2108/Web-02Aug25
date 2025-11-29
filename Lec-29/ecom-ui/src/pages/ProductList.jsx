import React, { useEffect, useState } from 'react'
// import { products } from '../data/products'
import ProductCard from '../components/ProductCard'
import axios from "axios"

const ProductList = () => {
  const [products, setProducts] = useState([]);

  const getData = async () => {
    const res = await axios.get(`${import.meta.env.VITE_API_BASEURL}/products`)
    setProducts(res.data.data);
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <div className='flex flex-wrap gap-3 justify-center'>
      {products.map(product => (
        <ProductCard 
          id={product._id}
          imageUrl={product.imageUrl}
          name={product.name}
          description={product.description}
          price={product.price}
        />
      ))}
    </div>
  )
}

export default ProductList