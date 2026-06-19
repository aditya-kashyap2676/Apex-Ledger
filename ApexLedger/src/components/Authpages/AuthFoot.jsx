import React from 'react'

const AuthFoot = ({cont,spn}) => {
  return (
    <div className='h-fit w-fit p-5'>
      <p>{cont}<span className='font-bold text-emerald-500'>{spn}</span></p>
    </div>
  )
}

export default AuthFoot
