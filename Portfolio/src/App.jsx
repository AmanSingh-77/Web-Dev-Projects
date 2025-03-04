import './App.css'
import Home from './components/Home'
import React from 'react'
import { BrowserRouter, Routes, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import About from './components/About';
import TechStack from './components/TechStack';
import Master from './components/Master';

function App() {

  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route path='/' element={<Master/>}>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/techStack' element={<TechStack/>}/>
          </Route>
          
        </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
