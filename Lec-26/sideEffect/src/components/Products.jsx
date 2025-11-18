import React, { useState, useEffect } from 'react'
import axios from "axios"
import ProductCard from './ProductCard';

const Products = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const res = await axios.get("https://dummyjson.com/products");
    console.log(res.data.products)
    setProducts(res.data.products)
  }

  useEffect(() => {
    // mounting
    getProducts();

    return () => {
      // unmounting
    }
  }, []);

  return (
    <div className='flex flex-wrap gap-4 justify-center'>
      {products.map(product => <ProductCard product={product} />)}
    </div>
  )
}

export default Products