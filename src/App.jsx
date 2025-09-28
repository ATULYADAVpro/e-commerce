import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomeLayout from './pages/home/HomeLayout'

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<HomeLayout />} />
    </Routes>
  )
}
