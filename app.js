import React from "react";
import "./App.css";
import Login from './components/Login';
import Registration from "./components/Registration";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Home } from "@mui/icons-material";
import { useForm } from 'react-hook-form';



function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/login' element={<Login />} />
          <Route path='/Registration' element={<Registration />} />
          <Route path='/Home' element={<Home />} />
        </Routes>
      </>
    </Router>

//jgrnfjhgfhgnfn



  )

}

export default App;
