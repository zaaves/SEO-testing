import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SEOTesting from '../Components/SEOTesting'
import { Route, Routes } from 'react-router-dom'
import BrandSEOTEST from '../Components/BrandSEOTEST'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<SEOTesting />}/> 
        <Route path='/sell-old-test-deletion' element={<BrandSEOTEST />}/>
      </Routes>
    </>
  )
}

export default App
