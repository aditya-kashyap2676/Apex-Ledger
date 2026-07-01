import React from 'react'
import { BsLayoutWtf, BsReverseLayoutTextSidebarReverse, BsBarChart, BsInfoCircle } from "react-icons/bs";

const NavBar = () => {

    const data = [
        { title: "Dashboard", icon: <BsLayoutWtf /> },
        { title: "Ledger", icon: <BsReverseLayoutTextSidebarReverse /> },
        { title: "Analytics", icon: <BsBarChart /> },
        { title: "About", icon: <BsInfoCircle /> },
    ]

    return (
        <div className = "w-fit h-full">
            <ul>
                <li className='center gap-4 font-[Orbitron] font-extrabold md:text-2xl mr-auto  drop-shadow-amber-500'><FaMoneyBillTrendUp className='text-primary-emerald text-4xl border-2 rounded-lg p-1'/> <span className='uppercase drop-shadow-[1px_1px] drop-shadow-primary-emerald'>apex ledger</span></li>
                {data.map((item,index) => {
                    return <li key={index}>{item.icon}{item.title}</li>
                })}
                <li>Username</li>
            </ul>
        </div>
    )
}

export default NavBar