import React from 'react'

const AuthFoot = ({cont,spn}) => {
  return (
    <div className='center'>
      <p className='text-zinc-500 '>{cont}<span className='font-bold text-emerald-500'> {spn}</span></p>
    </div>
  )
}

export default AuthFoot
