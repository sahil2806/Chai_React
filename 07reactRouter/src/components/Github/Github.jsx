import React from 'react'
import { useParams } from 'react-router-dom'
const Github = () => {
    const {userid} = useParams();
  return (
    <div>Github:{userid}</div>
  )
}

export default Github