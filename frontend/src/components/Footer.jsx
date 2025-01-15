import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          {/* Logo and Tagline */}
          <div className="w-full md:w-1/3 text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-2xl font-bold">Hackyless</h3>
            <p className="text-gray-400">Your ultimate hackathon guide.</p>
          </div>

          {/* Quick Links */}
          <div className="w-full md:w-1/3 text-center mb-4 md:mb-0">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="text-gray-400">
              <li><a href="#features" className="hover:text-blue-400">Features</a></li>
              <li><a href="#events" className="hover:text-blue-400">Events</a></li>
              <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="w-full md:w-1/3 text-center md:text-right">
            <h4 className="text-lg font-semibold">Follow Us</h4>
            <div className="flex justify-center md:justify-end space-x-4 mt-2">
              <a href="https://twitter.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                <svg className="w-6 h-6 text-gray-400 hover:text-blue-400" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.36 1.88-2.35-.82.49-1.74.85-2.71 1.04a4.16 4.16 0 0 0-7.09 3.8A11.77 11.77 0 0 1 3.2 4.9a4.16 4.16 0 0 0 1.29 5.55 4.1 4.1 0 0 1-1.88-.52v.05a4.16 4.16 0 0 0 3.33 4.08 4.14 4.14 0 0 1-1.87.07 4.16 4.16 0 0 0 3.88 2.88A8.35 8.35 0 0 1 2 19.54a11.75 11.75 0 0 0 6.29 1.84c7.55 0 11.67-6.26 11.67-11.67v-.53c.8-.58 1.5-1.3 2.05-2.12z" />
                </svg>
              </a>
              <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                <svg className="w-6 h-6 text-gray-400 hover:text-blue-400" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 5 3.66 9.12 8.44 9.88v-7h-2.5v-2.88h2.5V9.62c0-2.46 1.49-3.8 3.72-3.8 1.08 0 2.2.2 2.2.2v2.44h-1.24c-1.23 0-1.61.77-1.61 1.56v1.88h2.73l-.44 2.88h-2.3v7C18.34 21.12 22 17 22 12z" />
                </svg>
              </a>
              <a href="https://linkedin.com" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                <svg className="w-6 h-6 text-gray-400 hover:text-blue-400" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.45 3H3.55A2.55 2.55 0 0 0 1 5.55v12.9A2.55 2.55 0 0 0 3.55 21h16.9a2.55 2.55 0 0 0 2.55-2.55V5.55A2.55 2.55 0 0 0 20.45 3zM8.48 18.49H5.81V9.84h2.67v8.65zM7.15 8.61A1.54 1.54 0 1 1 8.68 7a1.54 1.54 0 0 1-1.53 1.61zM18.49 18.49h-2.67v-4.68c0-1.11-.02-2.55-1.56-2.55s-1.8 1.22-1.8 2.48v4.75h-2.67V9.84h2.56v1.18h.04a2.82 2.82 0 0 1 2.54-1.4c2.72 0 3.22 1.79 3.22 4.11v4.76z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center mt-8 border-t border-gray-700 pt-4">
          <p className="text-gray-400">&copy; 2025 Hackyless. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
