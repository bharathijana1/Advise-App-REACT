import { useState } from 'react'
// import './App.css'
import AdviceApp from './Components/AdviceApp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='bg-rose-200 flex justify-start items-center '>
    <img src="../src/Components/img/advice.png" alt="advice app"  className='bg-rose-200 m-3' width="80px" height="80px" />
    <h1 className='font-bold text-3xl text-center p-2  py-6 text-rose-950'>Advicer App</h1>
    </div>
    
      <AdviceApp />
    </>
  )
}

export default App
