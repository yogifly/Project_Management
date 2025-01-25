import React, { useState } from 'react';
import { FaHome, FaUser, FaTasks, FaChartBar, FaCog, FaBars } from 'react-icons/fa';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Navbar for Mobile with Hamburger Menu */}
      <div className="lg:hidden fixed top-0 left-0 w-full bg-pink-500 text-white flex justify-between items-center px-4 py-4">
        <h1 className="text-xl font-semibold">Menu</h1>
        <FaBars 
          className="text-2xl cursor-pointer" 
          onClick={() => setIsOpen(!isOpen)} 
        />
      </div>

      {/* Sidebar Icons as Navbar for Mobile */}
      {isOpen && (
        <div className="fixed top-16 left-0 w-full bg-pink-500 text-white flex justify-around py-4 lg:hidden">
          <FaHome className="text-2xl cursor-pointer hover:text-blue-400" />
          <FaUser className="text-2xl cursor-pointer hover:text-blue-400" />
          <FaTasks className="text-2xl cursor-pointer hover:text-blue-400" />
          <FaChartBar className="text-2xl cursor-pointer hover:text-blue-400" />
          <FaCog className="text-2xl cursor-pointer hover:text-blue-400" />
        </div>
      )}

      {/* Sidebar for Desktop */}
      <div className="hidden lg:flex lg:w-16 bg-pink-500 text-white h-screen flex-col items-center py-6">
        <FaHome className="mb-4 cursor-pointer hover:text-blue-400" />
        <FaUser className="mb-4 cursor-pointer hover:text-blue-400" />
        <FaTasks className="mb-4 cursor-pointer hover:text-blue-400" />
        <FaChartBar className="mb-4 cursor-pointer hover:text-blue-400" />
        <FaCog className="cursor-pointer hover:text-blue-400" />
      </div>
    </>
  );
}

export default Sidebar;
