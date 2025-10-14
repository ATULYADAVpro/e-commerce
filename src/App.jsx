import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomeLayout from './pages/home/HomeLayout'
import ProductLayout from './pages/Products/ProductLayout'
import ProductView from './pages/Products/ProductView'
import CartLayout from './pages/carts/CartLayout'
import OrderLayout from './pages/orders/OrderLayout'
import TrackLayout from './pages/trackproduct/TrackLayout'
import ProfileLayout from './pages/profile/ProfileLayout'
import Profile from './pages/profile/Profile'
import ManageAddress from './pages/profile/ManageAddress'

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<HomeLayout />} />
      <Route path='/products' element={<ProductLayout />} />
      <Route path='/products/view' element={<ProductView />} />
      <Route path='/carts' element={<CartLayout />} />
      <Route path='/orders' element={<OrderLayout />} />
      <Route path='/trackorder' element={<TrackLayout />} />
      <Route path='/profile' element={<ProfileLayout />}>
        <Route index element={<Profile />} />
        <Route path='address' element={<ManageAddress />} />
      </Route>
      <Route path='/login' element={<TrackLayout />} />
      <Route path='/register' element={<TrackLayout />} />
    </Routes>
  )
}
