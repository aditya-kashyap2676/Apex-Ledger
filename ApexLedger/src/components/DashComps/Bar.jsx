import React from 'react'
import { GoGlobe, GoDatabase } from "react-icons/go";
import { BiCheckShield } from "react-icons/bi";
import { HiOutlineLightningBolt } from "react-icons/hi";
const Bar = () => {
    const def = [
        { icon: <GoGlobe />, val: "99.99%", desc: "gateway uptime" },
        { icon: <GoDatabase />, val: "256-bit", desc: "local encryption" },
        { icon: <HiOutlineLightningBolt />, val: "< 5ms", desc: "calculative latency" },
        { icon: <BiCheckShield />, val: "Zero", desc: "external dataleaks" },
    ]
    return (
        <div className='border-2 border-l-0 border-r-0 border-primary-charcoal/5 flex justify-around py-8 px-4'>
            {def.map((item, index) => {
                return <Tabs icon={item.icon} value={item.val} description={item.desc} index = {index}/>
            })}
        </div>
    )
}

export default Bar


const Tabs = ({ icon, description, value,index }) => {
    return (
        <div className='space-y-4'>
            <div >
                <p className='flex items-center gap-2 font-[Orbitron] font-extrabold justify-center text-2xl tracking-tight'><span className={` ${index % 2 === 0 ? "text-primary-emerald" : "text-primary-blue"}`}>{icon}</span>{value}</p>
            </div>
            <div className='uppercase text-xs font-extrabold tracking-wider flex justify-center font-[Nunito] text-primary-deep-gray/90'>
                {description}
            </div>
        </div>
    )
}