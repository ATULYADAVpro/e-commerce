import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomeLayout from './pages/home/HomeLayout'
import ProductLayout from './pages/Products/ProductLayout'
import ProductView from './pages/Products/ProductView'
import CartLayout from './pages/carts/CartLayout'
import OrderLayout from './pages/orders/OrderLayout'

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<HomeLayout />} />
      <Route path='/products' element={<ProductLayout />} />
      <Route path='/products/view' element={<ProductView />} />
      <Route path='/carts' element={<CartLayout />} />
      <Route path='/orders' element={<OrderLayout />} />
    </Routes>
  )
}
