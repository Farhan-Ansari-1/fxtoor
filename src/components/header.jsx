import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import BrandName from "./BrandName.jsx";

export default function Header() {
  const [showModal, setShowModal] = useState(false);

  const activeLinkStyle = {
    color: '#2563eb', // blue-600
    fontWeight: '600',
  };

  return (
    <>
      <header className="bg-white shadow-sm border-b sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <NavLink to="/" className="text-2xl md:text-3xl font-bold">
            <BrandName className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600" />
          </NavLink>
          <div className="flex items-center gap-6">
            <nav className="hidden md:flex items-center gap-6 text-gray-600">
              <NavLink to="/" style={({ isActive }) => (isActive ? activeLinkStyle : undefined)} className="hover:text-blue-600 transition-colors">Home</NavLink>
              <NavLink to="/about" style={({ isActive }) => (isActive ? activeLinkStyle : undefined)} className="hover:text-blue-600 transition-colors">About Us</NavLink>
              <NavLink to="/contact" style={({ isActive }) => (isActive ? activeLinkStyle : undefined)} className="hover:text-blue-600 transition-colors">Contact Us</NavLink>
            </nav>
            <button
              onClick={() => setShowModal(true)}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-600 transition-colors shadow-sm flex items-center gap-2 text-sm"
            >
              <span>Support Project</span>
              <span role="img" aria-label="coffee">
                ☕
              </span>
            </button>
          </div>
        </div>
      </header>

      {showModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-white p-8 rounded-xl shadow-2xl relative text-center transform transition-all"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowModal(false)}
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
