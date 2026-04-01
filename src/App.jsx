import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import GlobalConversionBar from './components/GlobalConversionBar';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Vehicles from './pages/Vehicles';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="app">
      <ScrollToTop />
      <Navbar />
      <GlobalConversionBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vehicles" element={<Vehicles />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
