
import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import ListProduct from './pages/ListProduct'
import Cart from './pages/Cart'
import About from './pages/About'
import Contact from './pages/Contact'
import Register from './pages/Register'
import Login from './pages/Login'
import ProductDetail from './pages/ProductDetail'
import { useEffect } from 'react'
import PrivateRouter from './pages/private/PrivateRouter'
import HomeAdmin from './pages/private/HomeAdmin'
import ManagerProduct from './pages/private/ManagerProduct'
import ManagerUser from './pages/private/ManagerUser'

function App() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname])
  return (
    <>
      <Routes>
        {/* Router ai cung co the truy cap */}
        <Route path='/' element={<Home />}></Route>
        <Route path='/list-product' element={<ListProduct />}></Route>
        <Route path='/product/:id' element={<ProductDetail />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/product-detail' element={<ProductDetail />}></Route>

        {/* Router chi admin moi co the truy cap */}
        <Route element={<PrivateRouter />}>
          <Route path='/admin' element={<HomeAdmin />}></Route>
          <Route path='/manager-product' element={<ManagerProduct />}></Route>
          <Route path='/manager-user' element={<ManagerUser />}></Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
