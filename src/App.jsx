import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/header.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx'; // Correct path
import AboutUs from './pages/AboutUs.jsx'; // Correct path
import ContactUs from './pages/ContactUs.jsx'; // Correct path
import PrivacyPolicy from './pages/PrivacyPolicy.jsx'; // Correct path
import TermsAndConditions from './pages/TermsAndConditions.jsx'; // Correct path

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsAndConditions />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;