
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import ListProduct from './pages/ListProduct'
import Cart from './pages/Cart'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/list-product' element={<ListProduct />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
      </Routes>
    </>
  )
}

export default App
