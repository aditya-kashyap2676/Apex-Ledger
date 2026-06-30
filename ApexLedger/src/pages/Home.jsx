import React from 'react'
import Hero from '../components/DashComps/Hero'
import Bar from '../components/DashComps/Bar'
import CreateAcc from '../components/CreateAcc'
const Home = () => {
  return (
    <div className='bg-primary-gray'>
      <div className='grid md:grid-cols-2 grid-cols-1'>
        <Hero/>
        <CreateAcc/>
      </div>
        <Bar/>
    </div>
  )
}

export default Home