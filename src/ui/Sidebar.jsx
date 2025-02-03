import React, { useState } from 'react';
import { FaHome, FaUser, FaTasks, FaChartBar, FaFileInvoiceDollar, FaBars } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'Home', path: '/', icon: <FaHome /> },
    { name: 'Team', path: '/team', icon: <FaUser /> },
    { name: 'Tasks', path: '/task', icon: <FaTasks /> },
    { name: 'Budget', path: '/budget', icon: <FaFileInvoiceDollar /> },
    { name: 'Visualization', path: '/vizualization', icon: <FaChartBar /> },
  ];

  return (
    <>
      {/* Navbar for Mobile with Hamburger Menu */}
      <div className="lg:hidden fixed top-0 left-0 w-full  text-white flex justify-between items-center px-4 py-4 z-50">
        <FaBars
          className="text-2xl cursor-pointer text-black"
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>

      {/* Sidebar for Mobile with Vertical Line */}
      {isOpen && (
        <div className="fixed top-0 left-0 h-full w-16 bg-gray-800 text-white flex flex-col py-4 z-50">
          {menuItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className="flex items-center justify-center my-4 text-xl hover:text-yellow-300"
              activeClassName="text-yellow-300"
              onClick={() => setIsOpen(false)}
            >
              {item.icon}
            </NavLink>
          ))}
        </div>
      )}

      {/* Sidebar for Desktop with Vertical Line */}
      <div className="hidden lg:flex fixed top-0 left-0 h-full w-16 bg-gray-800 text-white flex-col py-4 z-50">
        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className="flex items-center justify-center my-4 text-xl hover:text-yellow-300"
            activeClassName="text-yellow-300"
          >
            {item.icon}
          </NavLink>
        ))}
      </div>
    </>
  );
}

export default Sidebar;
