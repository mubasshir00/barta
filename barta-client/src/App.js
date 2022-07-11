import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard'
import LoginPage from './components/login/LoginPage';
import Register from './components/register/RegisterPage'

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
    </>
  );
}

export default App