import React, { useState, useRef } from "react";
import './BlurBackground.css';


const BlurBackground = () => {
  const [count, setCount] = useState(0);
  const timerRef = useRef(null);

  const startIncrement = () => {
    // Start the interval if it's not already running
    if (!timerRef.current) {
      timerRef.current = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 100); // Increase every 100 ms, adjust this for speed
    }
  };

  const stopIncrement = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  };

  const stopDecrement = () =>{
    clearInterval(timerRef.current);
    timerRef.current = null;
  }

    const startDecrement = () =>{
      if(!timerRef.current){
        timerRef.current = setInterval(()=>{
          setCount((prevCount)=>prevCount-1);
        }, 100);
      }
    }

  return (
    <div className="relative">
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-6 rounded-lg shadow-lg w-80">
          <h2 className="text-xl font-semibold mb-4">Counter</h2>
          <p className="text-gray-700 flex items-center justify-between space-x-4">
            <button className=" px-4 py-2 bg-blue-500 text-white rounded" onMouseDown = {startDecrement}
            onMouseUp = {stopDecrement}
            onMouseLeave = {stopDecrement} >-</button>
            <span className="text-gray-700 " > {count} </span>
            <button className="px-4 py-2 bg-blue-500 text-white rounded" onMouseDown={startIncrement}
        onMouseUp={stopIncrement}
        onMouseLeave={stopIncrement} >+</button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlurBackground;
