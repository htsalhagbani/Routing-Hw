import React from 'react'
import {Link } from "react-router-dom";


function CardDetails(props) {
  return (
    <div 
    className="relative w-full h-screen bg-cover bg-center"
    style={{ backgroundImage: `url(${props.img})` }} 
  >
    <div className="absolute inset-0 bg-black opacity-60"></div> 
    
    {/* Center Content */}
    <div className={`relative flex flex-col items-center justify-start md:justify-center h-full p-5 ${props.textColor}`}>
    <h1 className="text-4xl md:text-6xl font-bold mb-12 ">{props.title}</h1>
      <p className="text-sm md:text-2xl mb-10 text-center md:w-[60vw]">
        {props.description}
        </p>
    </div>

    {/* Buttons */}
    <div className="absolute bottom-0 w-full p-4">
<div className="grid grid-cols-2 gap-4 md:grid-cols-5">

<Link to="/" className="w-full">
  <button className="bg-[lightgray] hover:bg-[gray] text-[black] md:text-2xl font-bold py-3 md:py-12 px-4 rounded w-full">
    Desert
  </button>
</Link>

<Link to="/Sea" className="w-full ">
<button className="bg-[lightgray] hover:bg-[gray] text-[black] md:text-2xl font-bold py-3 md:py-12 px-4 rounded w-full">
Sea
  </button>
  </Link>

  <Link to="/Valley" className="w-full ">
  <button className="bg-[lightgray] hover:bg-[gray] text-[black] md:text-2xl font-bold py-3 md:py-12 px-4 rounded w-full">
  Valley
  </button>
  </Link>

  <Link to="/Forest" className="w-full ">
  <button className="bg-[lightgray] hover:bg-[gray] text-[black] md:text-2xl font-bold py-3 md:py-12 px-4 rounded w-full">
  Forest
  </button>
  </Link>


  <div className="col-span-2 md:col-span-1 flex justify-center">
  <Link to="/Cave" className="w-full ">
  <button className="bg-[lightgray] hover:bg-[gray] text-[black] md:text-2xl font-bold py-3 md:py-12 px-4 rounded w-full">
    Cave
    </button>
    </Link>

  </div>
</div>
</div>


  </div>
  )
}

export default CardDetails