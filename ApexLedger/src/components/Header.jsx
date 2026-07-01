import React from 'react'
import Button from './Button'
import { FaMoneyBillTrendUp } from "react-icons/fa6";
const Header = () => {
    return (
        <div className='center w-full border-b border-zinc-300 px-6 h-22 md:h-18 bg-primary-gray'>
            <ul className='center w-full'>
                <li className='center gap-4 font-[Orbitron] font-extrabold md:text-2xl mr-auto  drop-shadow-amber-500'><FaMoneyBillTrendUp className='text-primary-emerald text-4xl border-2 rounded-lg p-1'/> <span className='uppercase drop-shadow-[1px_1px] drop-shadow-primary-emerald'>apex ledger</span></li>
                <li><Button butt={"Access Gateway"} color={"bg-gray-700"} /></li>
                

            </ul>
        </div>
    )
}

export default Header