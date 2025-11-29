import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import ProductList from './pages/ProductList'
import ShowProduct from './pages/ShowProduct'

const App = () => {
  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/products' element={<ProductList/>} />
          <Route path='/products/:id' element={<ShowProduct/>} />
        </Routes>
      </div>
    </>
  )
}

export default App