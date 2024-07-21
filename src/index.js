import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import AboutUs from './pages/AboutUs';
import HomePage from "./pages/HomePage";
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
      <Route exact path='/' element={<HomePage/>} />
      <Route exact path='/home-page' element={<HomePage/>} />
      <Route exact path='/about-us' element={<AboutUs/>} />
      <Route exact path='/services' element={<></>} />
      <Route exact path='/projects' element={<></>} />
      <Route exact path='/news' element={<></>} />
      <Route exact path='/japanese-in-vietnam' element={<></>} />
      <Route exact path='/contact' element={<></>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
