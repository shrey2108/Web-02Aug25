import { useEffect } from 'react'
import ProductCard from '../components/ProductCard'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../features/products/productsThunk'

const ProductList = () => {
  const { loading, products } = useSelector(state => state.products);
  const dispatch = useDispatch();
  console.log(loading)

  useEffect(() => {
    dispatch(fetchProducts())
  }, [])

  if (loading) return (
    <div>Loading...</div>
  )

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