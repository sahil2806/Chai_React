import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
const Github1 = () => {
    // const [data,setData] = useState([])
    // useEffect(()=>{
    //       fetch('http://api.github.com/users/hiteshchoudhary')
    //       .then((res) =>res.json())
    //       .then((data) => setData(data));
    // },[])

    const data = useLoaderData([]);

  return (
    <>
    <h1>Github Followers:{data.followers}</h1>
    <img  src={data.avatar_url} style={{ width:"500px",  height:"400px" }} /> 
    </>
  )
}

export default Github1

export const   githubInfoLoader = async () =>{
   const response = await fetch('http://api.github.com/users/hiteshchoudhary');
   return response.json();
}