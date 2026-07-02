import React from 'react'
import Login from './components/Login'
import CreateAcc from './components/CreateAcc'
import Home from './pages/Home'
import Footer from './components/Footer'
import Header from './components/Header'

import { Routes,Route,Router } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
const App = () => {
  return (
    <div>
      {/* <Login/> */}
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
