import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AddProduct from './adminSide/pages/AddProduct'
import Dashboard from './adminSide/pages/Dashboard'
import ProductList from './adminSide/pages/ProductList'

const MainRoutes = () => {
  return (
    <Routes>
      <Route path='/dashboard' element={<Dashboard/>} />
      <Route path='/addProduct' element={<AddProduct/>} />
      <Route path='/productList' element={<ProductList/>} />
      {/* <Route path='' element={} /> */}
    </Routes>
  )
}

export default MainRoutes
