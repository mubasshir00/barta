import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AlertNotification from './components/AlertNotification'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {
  return (
    <>
      <BrowserRouter>
       <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
       </Routes>
      </BrowserRouter>
      <AlertNotification/>
    </>
  )
}

export default App