/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import {useEffect,useState} from "react"



function useCurrencyInfo (currency){
    const curr = currency.toUpperCase();
    
    const [data,setdata] = useState({})
// api  ->  https://api.exchangerate-api.com/v4/latest/INR
    useEffect(()=>{
            fetch(`https://api.exchangerate-api.com/v4/latest/${currency}`)
            .then((res)=> (res.json()))
            .then((res) => setdata(res["rates"]))
             
    },[currency])

    // console.log(data);
 
    return data;
}

export default useCurrencyInfo;