import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './context/ThemeContext';

// Components aur Pages ko import karein
import Header from './components/Header'; // Navbar ki jagah Header import karein
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import ContactUs from './pages/ContactUs';
import PrivacyPolicy from './pages/PrivacyPolicy';
import NotFound from './pages/NotFound';
import TermsAndConditions from './pages/TermsAndConditions';

export default function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
          <Header /> {/* Yahan Navbar ki jagah Header component use karein */}

          <main className="flex-grow container mx-auto px-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<TermsAndConditions />} />
              {/* Agar koi page na mile to NotFound page dikhayein */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </ThemeProvider>
    </HelmetProvider>
  );
}