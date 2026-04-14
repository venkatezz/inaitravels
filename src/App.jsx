import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import GlobalConversionBar from './components/GlobalConversionBar';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Explore from './pages/Explore';
import Vehicles from './pages/Vehicles';
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
          <Route path="/explore" element={<Explore />} />
          <Route path="/vehicles" element={<Vehicles />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
