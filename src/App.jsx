import { useState } from 'react'
import './App.css'
import Login from "./pages/Login.jsx"
import Dashboard from "./pages/Dashboard.jsx"
import {BrowserRouter, Route, Routes} from "react-router-dom"

function App() {

  return (
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
