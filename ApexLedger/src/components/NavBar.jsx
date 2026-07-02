import React, { useState } from 'react'
import { BsLayoutWtf, BsReverseLayoutTextSidebarReverse, BsBarChart, BsInfoCircle } from "react-icons/bs";
import { FaMoneyBillTrendUp } from 'react-icons/fa6';
import { ActiveTabContext } from "./Context/Context"
const NavBar = ({ activeTab, setActiveTab }) => {
    const data = [
        { title: "Dashboard", icon: <BsLayoutWtf /> },
        { title: "Ledger", icon: <BsReverseLayoutTextSidebarReverse /> },
        { title: "Analytics", icon: <BsBarChart /> },
        { title: "About", icon: <BsInfoCircle /> },
    ];

    return (
        <div className="w-fit h-screen">
            <ul className="flex flex-col h-full p-5 bg-secondary-ocean-blue">
                <li className="center gap-4 font-[Orbitron] font-extrabold md:text-2xl  drop-shadow-amber-500">
                    <FaMoneyBillTrendUp className="text-white text-4xl border-2 rounded-lg p-1 h-10 w-12" />
                    <span className="uppercase text-white">
                        apex ledger
                    </span>
                </li>
                {data.map((item, index) => (
                    <li
                        key={index}
                        onClick={() => setActiveTab(item.title)}
                        className={`${activeTab === item.title ? " border-2 border-t-0 border-b-0 border-emerald-300 bg-zinc-50/30 text-emerald-300" : "bg-transparent text-white"} flex items-center gap-4 font-sans my-2 p-2 rounded-lg font-bold cursor-pointer`}
                    >
                        <span className='text-xl'>{item.icon}</span> {item.title}
                    </li>
                ))}
                <li className="mt-auto">Username</li>
            </ul>
        </div>
    );
};

export default NavBar