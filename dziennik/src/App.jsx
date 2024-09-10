import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Glowna from './components/KontentGlowna'
import Login from './components/Login.jsx'
import AdminPage from './components/admin/AdminPage.jsx'
import DodajUsera from './components/admin/DodajUsera.jsx'
import DodajKlase from './components/admin/DodajKlase.jsx'

function App() {
  return (
    <>
        <Routes>
          <Route index element={<Glowna/>} />
          <Route element={<Login/>} path='/login' />
          <Route element={<AdminPage/>} path='/admin'/>
          <Route element={<DodajUsera/>} path='/dodajUsera'/>
          <Route element={<DodajKlase/>} path="/dodajKlase"/>
        </Routes>
    </>
  )
}

export default App
