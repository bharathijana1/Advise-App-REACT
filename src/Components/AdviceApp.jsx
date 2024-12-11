import React, { useEffect, useState } from 'react'
// https://api.adviceslip.com/advice

const AdviceApp = () => {
  const [ advice, setAdvice ] = useState("please click the button to get the advice");
  const [ count, setCount ] = useState(0);

  const handleGetAdvice = async() => {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    // console.log(data)
    setAdvice(data.slip.advice);
    setCount((count )=> count + 1) // or setCount(count + 1);
  }

  //  useEffect
  useEffect(function(){
    handleGetAdvice();
  },[]);

  return ( 
    <div className='bg-rose-100 h-screen  flex items-center justify-center'>
      <div className='flex justify-center items-center flex-col bg-rose-50 shadow-lg shadow-rose-300 mx-auto w-full lg:w-1/2 h-80' >
      
      <h1 className='text-center text-2xl font-medium p-2 m-2 text-rose-900 capitalize py-10'>{advice}</h1>
      <button className=' text-center border bg-rose-800 hover:bg-rose-900 text-white p-2 text-xl px-6 rounded' onClick={handleGetAdvice}>Get Advise</button>
      <p className='capitalize text-lg p-2 m-6 font-medium text-center'>you have read <strong className='bg-rose-800 text-white rounded-full px-4 py-2 mx-2'>{count}</strong> pieces of advice</p>
    
  </div>

    </div>
    
  )
}

export default AdviceApp
