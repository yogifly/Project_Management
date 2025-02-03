import React from 'react';
import { FaCalendarAlt, FaClipboardList, FaEllipsisV, FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function ProjectCard({ project }) {
  const { name, category, progress, daysLeft, startDate, endDate, teamMembersCount } = project;

  return (
    <div className="bg-pink-200 shadow-lg rounded-2xl p-4 flex flex-col md:flex-row items-center md:items-start md:space-x-6 relative">
      {/* Left Section - Project Info */}
      <div className="flex flex-col flex-1 w-full md:w-auto">
        {/* Project Name and Category */}
        <div className="flex justify-between items-start mb-4 w-full">
          <div>
            <div className="text-xl font-semibold text-gray-800 mb-1">{name}</div>
            <div className="text-sm text-gray-500">{category}</div>
          </div>

          {/* More Button */}
          <button className="text-sm text-gray-500 hover:text-gray-700">
            <FaEllipsisV className="w-5 h-5" />
          </button>
        </div>

        {/* Start and End Dates */}
        <div className="flex items-center text-sm text-gray-600 mb-4">
          <FaCalendarAlt className="mr-2" />
          <span>{startDate} - {endDate}</span>
        </div>

        {/* Progress Bar */}
        <div className="relative w-full bg-gray-200 rounded-full h-2 mb-4">
          <div
            className="bg-pink-400 h-2 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Progress and Days Left */}
        <div className="flex justify-between items-center text-sm text-gray-500">
          <span>{progress}% Complete</span>
          <span>{daysLeft} Days Left</span>
        </div>
      </div>

      {/* Right Section - Team and Details Button */}
      <div className="flex flex-col items-center md:items-end space-y-4 mt-4 md:mt-0">
        {/* Team Members */}
        <div className="flex items-center space-x-[-10px]">
          {Array.from({ length: Math.min(teamMembersCount, 2) }).map((_, index) => (
            <div
              key={index}
              className="w-10 h-10 bg-gray-400 rounded-full flex justify-center items-center text-white border-2 border-white"
            >
              <FaUserCircle className="w-8 h-8" />
            </div>
          ))}
          {teamMembersCount > 2 && (
            <div className="text-sm text-gray-600 pl-4">+{teamMembersCount - 2} more</div>
          )}
        </div>

        {/* View Details Button */}
        <Link
          to={`/tasks/${name}`}
          className="bg-pink-400 text-white py-2 px-6 rounded-lg hover:bg-pink-500 transition"
        >
          <FaClipboardList className="mr-2 inline" /> View Details
        </Link>
      </div>
    </div>
  );
}

export default ProjectCard;
