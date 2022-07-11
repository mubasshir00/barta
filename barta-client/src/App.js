import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard'
import Login from './components/login/Login'
import Register from './components/register/Register'

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
    </>
  );
}

export default App