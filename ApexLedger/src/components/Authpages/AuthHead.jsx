import React from 'react'

const AuthHead = ({title,para}) => {
  return (
    <div className='flex flex-col items-center mb-6'>
      <p className='text-2xl font-bold uppercase font-Orbitron '>{title}</p>
      <p className='text-zinc-500 font-bold text-xs tracking-wide font-Montserrat '>{para}</p>
    </div>
  )
}

export default AuthHead
