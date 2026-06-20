import React from 'react'
import { FaArrowRight } from "react-icons/fa";
const Button = ({butt}) => {
  return (
    <div >
      <button className='h-fit w-91 p-2 bg-emerald-500 text-white mt-7 rounded-xl uppercase font-Orbitron flex gap-2 items-center justify-center'>{butt} <span><FaArrowRight/></span> </button>
    </div>
  )
}

export default Button
