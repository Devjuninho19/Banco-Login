import React from 'react'
import { Routes, Route } from 'react-router-dom'
//import de pages
import Home from "../pages/Home"
import Register from "../pages/Register"
const RoutesApp = () => {
  return (
<Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/register' element={<Register/>}/>
</Routes>
  )
}

export default RoutesApp