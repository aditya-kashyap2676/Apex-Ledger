import React from 'react'
const UserInput = ({icon,label,type,plh}) => {
  return (
    <div className='flex flex-col leading-10'>
      <label className='font-semibold uppercase text-sm mt-5 font-sans text-gray-700 flex items-center gap-2'>{icon}{label}</label>
      <input type={type} placeholder={plh} className='border-1 border-gray-300 rounded-xl bg-gray-50 pl-2'/>

    </div>
  )
}

export default UserInput
