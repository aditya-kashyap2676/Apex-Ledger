import React from 'react'
import { FaArrowRight } from "react-icons/fa";
const Button = ({butt,color,style}) => {
  return (
    <div >
      <button className={`text-md font-bold h-fit w-fit py-2 px-6 ${style} ${color ? color : "bg-emerald-500"} text-white rounded-md uppercase font-Orbitron flex gap-2 items-center justify-center`}>{butt}<FaArrowRight/></button>
    </div>
  )
}

export default Button
