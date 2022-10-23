import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Category from './Pages/Category'
import Home from './Pages/Home'
import ShowOne from './Pages/ShowOne'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/showone/:id' element={<ShowOne />} />
        <Route path='/category' element={<Category />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App