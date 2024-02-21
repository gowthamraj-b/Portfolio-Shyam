import React, { useEffect, useState } from 'react'
import h_img from '../assets/h_i.png'

export default function Home() {

  const[text,setText]=useState('');

  const originalText="Hello, I'm Shyam FrountEnd developer";

  useEffect(() => {
    let index = 0;

    const intervalId = setInterval(() => {
      setText(originalText.slice(0, index + 1));
      index++;

      if (index === originalText.length) {
        clearInterval(intervalId);
      }
    }, 100); // Adjust the interval as needed

    return () => clearInterval(intervalId);
  }, [originalText]);
  

  
  return (
    <>
      <div className='min-h-screen  bg-gray-950   flex justify-around items-center'>
        <div>
          <h1 className="text-4xl font-bold text-center text-white">{text}</h1> 
        </div>
        <div>
          <img src={h_img} alt="" className='' />
        </div>

      </div>
    </>
  )
}
