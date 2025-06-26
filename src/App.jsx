import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ItServices from './pages/ItServices';
import WebDevelopment from './pages/WebDevelopment';
import MobileAppDevelopment from './pages/MobileAppDevelopment';
import Designer from './pages/Designer';
import CloudServices from './pages/CloudServices';
import Networking from './pages/Networking';
import Contact from './pages/Contact';
import AboutUs from './pages/AboutUs';
import FloatingContactButton from './components/FloatingContactButton';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/it-services' element={<ItServices />} />
        <Route path='/web-development' element={<WebDevelopment />} />
        <Route path='/mobile-development' element={<MobileAppDevelopment />} />
        <Route path='/designer' element={<Designer />} />
        <Route path='/cloud-services' element={<CloudServices />} />
        <Route path='/networking' element={<Networking />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <FloatingContactButton />
      <Footer />
    </BrowserRouter>
  )
}

export default App