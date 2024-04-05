import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <> 
      <div>Contact</div>
      <Link to= '/contact/cc' >Go To Contact Child</Link>
    </>
  )
}

export default Contact