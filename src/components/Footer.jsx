import React from 'react';
import { Link } from 'react-router-dom';
import BrandName from './BrandName';

// Data for footer links, makes it easier to manage
const footerLinks = [
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
  { to: '/privacy', label: 'Privacy Policy' },
  { to: '/terms', label: 'Terms & Conditions' },
];

// Data for social media links
const socialLinks = [
  { href: 'https://github.com/farhan-ansari-1', label: 'GitHub', iconClass: 'fab fa-github' },
  { href: 'https://www.linkedin.com/in/farhan-ansari-', label: 'LinkedIn', iconClass: 'fab fa-linkedin-in' },
  { href: 'https://x.com/0_farX_antiX?t=kOm_0716T19m28pydN34FA&s=09', label: 'X', iconClass: 'fab fa-x-twitter' },
  { href: 'https://www.instagram.com/0_farx_antix?igsh=ZWVraTFsOG5mNXJj', label: 'Instagram', iconClass: 'fab fa-instagram' },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-auto">
      <div className="container mx-auto py-8 px-4">
        <div className="flex flex-col items-center text-center">
          {/* Page Links */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-6">
            {footerLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:underline"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center space-x-6 mb-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                aria-label={link.label}
              >
                <i className={`${link.iconClass} text-2xl`}></i>
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-sm text-gray-600 dark:text-gray-400">
            <p>
              &copy; {currentYear}{' '}
              <BrandName className="font-bold text-gray-700 dark:text-gray-300" />
              . All Rights Reserved.
            </p>
            <p className="mt-1">
              Made by <a href="https://farhan-ansari-1.github.io/farX-Portfolio/" target="_blank" rel="noopener noreferrer" className="font-semibold hover:underline">farX</a>.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;