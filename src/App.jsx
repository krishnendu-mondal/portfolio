import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </div>
      <Footer/>
    </BrowserRouter>  
    </>
  )
}

export default App