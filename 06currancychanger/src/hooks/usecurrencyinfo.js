// eslint-disable-next-line no-unused-vars
import {useEffect,useState} from "react"

 
function usecurrencyInfo(currency){
    const  [data,setData] = useState({});
     useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res)=>(res.json()))
        .then((res)=>(setData(res[currency])))
        console.log(data);
     },[currency])
}