import React from 'react'
import Hero from '../components/HomeComps/Hero'
import Bar from '../components/HomeComps/Bar'
import CreateAcc from '../components/CreateAcc'
import About from '../components/HomeComps/About'
const Home = () => {
  return (
    <div className='bg-primary-gray'>
      <div className='grid md:grid-cols-2 grid-cols-1'>
        <Hero />
        <CreateAcc />
      </div>
      <Bar />
      <About/>
    </div>
  )
}

export default Home