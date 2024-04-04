import React from 'react'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

const Layoutd = () => {
  return (
    <div> 
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Layoutd