import React from 'react'

const AuthHead = ({title,para}) => {
  return (
    <div className='flex flex-col items-center'>
      <p className='text-2xl font-bold uppercase font-Orbitron'>{title}</p>
      <p className='text-gray-600'>{para}</p>
    </div>
  )
}

export default AuthHead
