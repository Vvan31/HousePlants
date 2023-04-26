import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Pages
import Login from '@/pages/Login/Login'
import  MyAccount  from '@/pages/Home/MyAccount'
import  MyPlants from '@/pages/Home/MyPlants'
import  AddNew  from '@/pages/Home/AddNew'

//Styles
import '@/App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/myaccount" element={<MyAccount />} />
      <Route path="/myplants" element={<MyPlants />} />
      <Route path="/addnew" element={<AddNew />} />
    </Routes>

  )

}
 
export default App