import React from 'react'
import CreateAccount from './Components/CreateAccount'
import Navbar from './Components/Navbar'
import Login from './Components/Login'
import Women from "./Pages/Women";
import Men from "./Pages/Men";
import Products from "./Pages/Products";
import Company from "./Pages/Company";
import {BrowserRouter, Routes, Route} from "react-router-dom"


const Index = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar />

        <Routes>
          <Route path='/' element={<Women />}/>
          <Route path='/men' element={<Men />}/>
          <Route path='/company' element={<Company />}/>
          <Route path='/products' element={<Products />}/>
          <Route path='/sign' element={<Login />}/>
          <Route path='/create' element={<CreateAccount />}/>
        </Routes>
      </BrowserRouter>
        {/* <Login /> */}

        {/* <CreateAccount /> */}
    </div>
  )
}

export default Index