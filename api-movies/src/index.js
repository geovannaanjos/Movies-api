import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';
import Home from './pages/Home';
import Details from './pages/Details'
import {BrowserRouter, Routes, Route} from 'react-router-dom'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/details/:id" exact element={<Details/>}/>
    </Routes>
  </BrowserRouter>
);

export default root;




