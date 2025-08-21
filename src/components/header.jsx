import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSupportModalOpen, setIsSupportModalOpen] = useState(false);

  const activeStyle = {
    color: '#2563eb', // blue-600
    fontWeight: '600',
  };

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const navLinks = (
    <>
      <NavLink to="/" style={({ isActive }) => (isActive ? activeStyle : undefined)} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors" onClick={closeMobileMenu}>Home</NavLink>
      <NavLink to="/about" style={({ isActive }) => (isActive ? activeStyle : undefined)} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors" onClick={closeMobileMenu}>About Us</NavLink>
      <NavLink to="/contact" style={({ isActive }) => (isActive ? activeStyle : undefined)} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors" onClick={closeMobileMenu}>Contact Us</NavLink>
    </>
  );

  return (
    <>
      <header className="bg-white dark:bg-gray-800 shadow-sm border-b dark:border-gray-700 sticky top-0 z-20">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <NavLink to="/" className="text-2xl md:text-3xl font-bold" onClick={closeMobileMenu}>
            <img 
              src={`${import.meta.env.BASE_URL}logo192.png`}
              alt="fXtooR Logo" 
              className="h-8 w-auto" 
            />
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 text-gray-600 dark:text-gray-300">
            {navLinks}
          </nav>

          <div className="flex items-center gap-4">
            {/* Support Button */}
            <button
              onClick={() => setIsSupportModalOpen(true)}
              className="bg-blue-500 text-white px-3 sm:px-4 py-2 rounded-lg font-semibold hover:bg-blue-600 transition-colors shadow-sm flex items-center gap-2 text-sm"
            >
              <span>Support</span>
              <span className="hidden sm:inline">Project</span>
              <span role="img" aria-label="coffee">
                ☕
              </span>
            </button>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                {isMobileMenuOpen ? (
                  <XMarkIcon className="h-7 w-7" />
                ) : (
                  <Bars3Icon className="h-7 w-7" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-800 border-t dark:border-gray-700">
            <nav className="container mx-auto px-4 py-4 flex flex-col items-center gap-4 text-gray-600 dark:text-gray-300">
              {navLinks}
            </nav>
          </div>
        )}
      </header>

      {/* Support Modal */}
      {isSupportModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={() => setIsSupportModalOpen(false)}
        >
          <div
            className="bg-white p-8 rounded-xl shadow-2xl relative text-center transform transition-all"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsSupportModalOpen(false)}
              className="absolute top-2 right-3 text-gray-500 hover:text-gray-800 text-3xl"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-2 text-gray-800">
              Support the Project
            </h2>
            <p className="text-gray-600 mb-6">
              Your support helps keep this tool running!
            </p>

            <img
              src={`${import.meta.env.BASE_URL}qr-code.png`}
              alt="Donation QR Code"
              className="w-56 h-56 mx-auto border-4 border-gray-200 rounded-lg"
            />
            <p className="text-sm text-gray-500 mt-4">
              Scan with any UPI app to donate.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
