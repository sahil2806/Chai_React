import './App.css'
import Card from './components/Card'
import Counter from './components/Counter';
 
function App() {
  const obj = {
     Name:"sahil sahu",
     Class:"10",
     School:"iips",
     College:"iiit N"
  }

  const arr =  [1,2,3,4,5];

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-5'>Tailwind test</h1>
      {/* <Card  data = {obj} /> */}
       {/* <Card  obj={arr}/>  */}
       <Counter/>
    </>
  )
}

export default App
