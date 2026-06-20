import React from 'react'
import { BiCheckShield } from "react-icons/bi";
import { HiOutlineLightningBolt } from "react-icons/hi";
const Hero = () => {
  const def = [
    { h: "zero latency mapping", p: "Reactive calculations sync balance states instantly with zero load time.", i: <HiOutlineLightningBolt /> },
    { h: "isolated ledger sync", p: "Client-side processing safegaurds and compartmentalizes your asset record.", i: <BiCheckShield /> },
  ]
  return (
    <div className='grid grid-cols-2 px-8 py-16 h-lvh font-[Poppins]'>
      <div className='space-y-6'>
        <p className='px-4 py-1 space-x-2 tracking-wider flex border border-primary-emerald/30 rounded-full text-primary-emerald bg-primary-emerald/10 w-fit items-center font-bold'><BiCheckShield className='' /><span className='uppercase h-full flex items-center text-xs'>secure wealth gateway</span></p>
        <h1 className='font-[Orbitron] uppercase font-extrabold text-6xl text-primary-charcoal'>
          next-gen <span className='text-primary-emerald'>financial intelligence</span> platform
        </h1>
        <p className='text-sm text-primary-deep-gray/90 font-medium'>ApexLedger unifies enterprise-grade transaction mapping predictive category analysis, and real-time risk-bound tracking into a high-performance single-view system. Unshackle your ledger.</p>
        <div className='flex space-x-4'>

          {def.map((item, index) => {
            return <Tabs head={item.h} p={item.p} icon={item.i} index={index} />
          })}
        </div>
      </div>
      <div>

      </div>
    </div>
  )
}

export default Hero


const Tabs = ({ head, p, icon, index }) => {
  return (
    <div className="flex space-x-3 h-fit flex-11/12">
      <div className={`${index % 2 === 0 ? "text-primary-blue bg-primary-blue/15" : "text-primary-emerald bg-primary-emerald/15"} text-xl rounded p-1 h-full my-1`}>
        {icon}
      </div>
      <div>
        <h3 className="font-bold uppercase font-[Orbitron] text-sm">{head}</h3>
        <p className="text-xs text-primary-deep-gray/90 font-medium">{p}</p>
      </div>
    </div>
  )
}
