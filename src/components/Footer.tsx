import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-800 text-white p-4 mt-8 text-center">
      <div className="container mx-auto">
        © {currentYear} VDA Next.js. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
