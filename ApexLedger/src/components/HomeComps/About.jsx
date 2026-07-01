import React from 'react'
import { BsLayoutWtf,BsBarChart,BsReverseLayoutTextSidebarReverse } from 'react-icons/bs'
const About = () => {

  const data = [
    { style : "bg-primary-blue/20 text-primary-blue",title: "Dashboard analytics",content : "Visualize aggregate health metrics at a glance. Get real-time net position computation, instant incoming/outgoing flow tracking, and custom categorical distribution diagrams that update dynamically as transaction ledgers evolve.", icon: <BsLayoutWtf /> },
    { style : "bg-primary-emerald/20 text-primary-emerald",title: "high-fidelity ledger",content : "Interact with your raw transaction streams. Log new line-item income inflows and expense outflows with precise descriptors and unified tags, search through records instantly, or filter subsets with customized multi-key search criteria.", icon: <BsReverseLayoutTextSidebarReverse /> },
    { style : "bg-red-500/20 text-red-500",title: "smart budgets",content : "Implement financial safety limits. Set customized maximum category bounds (e.g., Housing, Food, Entertainment, Utilities) and automatically monitor consumption with active budget visualizer bars and instant over-budget alerts.", icon: <BsBarChart /> },
  ]
  return (
    <div className=' bg-primary-gray px-8 py-10 space-y-6 '>
      <h1 className='uppercase center font-Orbitron font-black text-4xl'>About us</h1>
      <p className='font-[Poppins] text-sm text-primary-deep-gray/90 font-medium text-center'>ApexLedger is a Real-Time, High-Perfomance financial intelligence platform designed for individuals. We unify raw Transaction logging, Analytical insights and Proactive Risk Detection into a single intuitive portal</p>
      <div className='border-2 border-primary-charcoal/5 bg-white rounded-xl md:flex md:space-x-5 space-y-5 justify-around p-5'>
        {data.map((item,index) => {
          return <Cards title={item.title} icon={item.icon} content={item.content} style={item.style}/>
        })}
      </div>
    </div>
  )
}

export default About


const Cards = ({ icon, title, content,style }) => {
  return (
    <div className='border border-primary-charcoal/5 bg-primary-gray rounded-xl w-full h-full p-6 space-y-3'>
      <div className={`md:text-2xl ${style} w-fit p-2 rounded-lg`} >{icon}</div>
      <div className='font-Orbitron uppercase font-bold text-xl '>{title}</div>
      <div className='font-[Poppins] text-sm text-primary-deep-gray/90 '>{content}</div>
      
    </div>
  )
}