import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Header from './Component/Header'
import Login from './Component/Login'
import Register from './Component/Register'
import UpdateProduct from './Component/UpdateProduct'
import AddProduct from './Component/AddProduct'
import Home from './Component/Home'
import Protected from './Component/Protected'
import ProductList from './Component/ProductList'
import SearchProduct from './Component/SearchProduct'
import Profile from './Component/Profile'

function App() {

  return (
    <>
      <BrowserRouter>
        {/* <Header /> */}
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/*' element={<Protected Cmp={ProductList} />} />
          <Route path='/updateproduct/:id' element={<Protected Cmp={UpdateProduct} />} />
          <Route path='/addproduct' element={<Protected Cmp={AddProduct} />} />
          <Route path='/search' element={<Protected Cmp={SearchProduct} />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
