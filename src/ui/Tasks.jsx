import React from 'react';
import { FaCalendarAlt, FaClock } from 'react-icons/fa'; // Importing icons

function Tasks({ task }) {
  return (
    <div className="border border-gray-300 p-4 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out hover:bg-blue-50">
      <h2 className="text-lg font-semibold text-gray-800 mb-2">{task.name}</h2>
      <p className="text-gray-600 mb-4">{task.description}</p>
      <div className="text-sm text-gray-700 flex items-center space-x-4">
        <div className="flex items-center">
          <FaCalendarAlt className="mr-2 text-blue-500" />
          <span><strong>Start:</strong> {task.startDate}</span>
        </div>
        <div className="flex items-center">
          <FaClock className="mr-2 text-red-500" />
          <span><strong>Deadline:</strong> {task.deadline}</span>
        </div>
      </div>
    </div>
  );
}

export default Tasks;
