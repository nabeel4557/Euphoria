
import React from 'react';
import './App.css'
import Home from './include/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductView from './components/ProductView';
import Navbar from './include/Navbar';
import Footer from './components/Footer';


function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path="/products/:id" element={<ProductView/>} />
        </Routes>
        <Footer/>
      </Router>
      

    </div>
  )
}

export default App
