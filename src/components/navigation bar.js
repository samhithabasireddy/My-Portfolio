import React from 'react';

const NavigationBar = () => {
  return (
    <nav className="p-7 text-white">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl">Samhitha Basireddy</h1>
        <ul className="flex space-x-4">
          <li><a href="#home" className="hover:text-gray-300">Home</a></li>
          <li><a href="#about" className="hover:text-gray-300">About</a></li>
          <li><a href="#projects" className="hover:text-gray-300">Projects</a></li>
          <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default NavigationBar;
