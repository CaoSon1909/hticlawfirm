import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import AboutUs from './pages/AboutUs';
import ContactPage from './pages/ContactPage';
import HomePage from "./pages/HomePage";
import JapaneseInVietnamPage from './pages/JapaneseInVietnamPage';
import NewsDetailPage from './pages/NewsDetailPage';
import NewsPage from './pages/NewsPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import ProjectPage from './pages/ProjectPage';
import Service02Page from './pages/Service02Page';
import ServiceDetailPage from './pages/ServiceDetailPage';
import ServicePage from './pages/ServicePage';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
      <Route exact path='/' element={<HomePage/>} />
      <Route exact path='/home-page' element={<HomePage/>} />
      <Route exact path='/about-us' element={<AboutUs/>} />
      <Route exact path='/services' element={<ServicePage />} />
      <Route exact path='/projects' element={<ProjectPage/>} />
      <Route exact path='/news' element={<NewsPage/>} />
      <Route exact path='/japanese-in-vietnam' element={<JapaneseInVietnamPage/>} />
      <Route exact path='/contact' element={<ContactPage/>} />
      <Route exact path='/services-02' element={<Service02Page/>} />
      <Route exact path='/services/:serviceId' element={<ServiceDetailPage/>} />
      <Route exact path='/news/:newsId' element={<NewsDetailPage/>} />
      <Route exact path='/projects/:projectId' element={<ProjectDetailPage/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
