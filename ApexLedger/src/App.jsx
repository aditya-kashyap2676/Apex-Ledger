import React from 'react'
import Login from './components/Login'
import CreateAcc from './components/CreateAcc'
import Home from './pages/Home'
import Footer from './components/Footer'
import Header from './components/Header'
const App = () => {
  return (
    <div>
      {/* <Login/> */}
      <Header/>
      <Home/>
      <Footer/>
    </div>
  )
}

export default App
