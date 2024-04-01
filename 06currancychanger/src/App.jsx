/* eslint-disable no-unused-vars */

import { useState } from "react"
import { InputBox } from "./components"
import useCurrencyInfo from "./hooks/useCurrencyInfo"
import { red } from "@mui/material/colors";



function App() {

    const [amount, setAmount] = useState(0);
    const [from, setFrom] = useState("USD");
    const [to, setTo] = useState("INR");
    const [convertedAmount, setConvertedAmount] = useState(0);

    const currencyInfo = useCurrencyInfo(from);

    const options = Object.keys(currencyInfo);

    //   console.log(options)

    const swap = () => {
        setFrom(to);
        setTo(from);
        setAmount(convertedAmount);
        setConvertedAmount(amount);
    }

    const convert = () => {
        setConvertedAmount(amount * currencyInfo[to]);
    }

    return (
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url(https://media.istockphoto.com/id/610771930/photo/international-currency-global-money-exchange-and-business-finance.jpg?s=612x612&w=0&k=20&c=KFYWfdLI6s9GPCH1OQZMluXzs0Xp4DRZ9vkSywSzlDs=)`,
                
            }}

        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault(); // It will help in to stop the data to goes to the url 
                            convert(); // calling the convert function
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount={amount}
                                currencyOptions={options} // currency types  in the form of object
                                onCurrencyChange={(currency) => setFrom(currency)}
                                selectCurrency={from}
                                onAmountChange={(amount) => setAmount(amount)}
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="to"
                                amount={convertedAmount}
                                currencyOptions={options}  // currency types  in the form of object
                                onCurrencyChange={(currency) => setTo(currency)}
                                selectCurrency={to}
                                amountDisable
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert {from.toString()}  to {to.toUpperCase()}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default App
