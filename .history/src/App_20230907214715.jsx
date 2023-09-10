
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import ListProduct from './pages/ListProduct'
import Cart from './pages/Cart'
import About from './pages/About'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/list-product' element={<ListProduct />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
        <Route path='/about' element={<About />}></Route>
      </Routes>
    </>
  )
}

export default App
