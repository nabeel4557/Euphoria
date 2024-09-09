
import React from 'react';
import './App.css'
import Home from './include/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductView from './components/ProductView';


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path="/products/:id" element={<ProductView/>} />
        </Routes>
      </Router>
      

  </div>
  )
}

export default App
