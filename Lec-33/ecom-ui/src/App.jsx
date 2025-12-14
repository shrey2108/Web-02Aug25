import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import ProductList from './pages/ProductList'
import ShowProduct from './pages/ShowProduct'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getWishlist } from './features/wishlist/wishlistThunk'
import Wishlist from './pages/Wishlist'

const App = () => {
  const { isAuthenticated } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if(isAuthenticated){
      dispatch(getWishlist());
    }
  }, [])

  return (
    <>
      <Navbar />
      <div className='mt-20'>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/products' element={<ProductList/>} />
          <Route path='/products/:id' element={<ShowProduct/>} />
          <Route path='/wishlist' element={<Wishlist/>} />
        </Routes>
      </div>
    </>
  )
}

export default App