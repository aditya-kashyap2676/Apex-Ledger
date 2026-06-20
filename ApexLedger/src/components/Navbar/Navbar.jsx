import React from 'react'
import { FaArrowTrendUp } from "react-icons/fa6";
import Icon from './Icon';
import Name from './Name';
import Navbtn from './Navbtn';
const Navbar = () => {
  return (
    <div className='flex justify-between p-3  border-b-1 border-gray-300 pl-8 pr-8'>
      <div className='flex gap-1 items-center '>
        <Icon />
        <Name />
        </div>
        <Navbtn />
    </div>
  )
}

export default Navbar
