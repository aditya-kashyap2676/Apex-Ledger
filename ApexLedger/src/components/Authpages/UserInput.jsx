import React from 'react'
const UserInput = ({icon,label,type,plh}) => {
  return (
    <div className='flex flex-col space-y-1'>
      <label className='font-black uppercase text-xs font-Montserrat text-zinc-800 flex items-center gap-2'>{icon}{label}</label>
      <input type={type} placeholder={plh} className='border border-gray-300 rounded-lg bg-gray-50  focus:outline-none w-full py-2 px-4 placeholder:text-zinc-400'/>

    </div>
  )
}

export default UserInput
