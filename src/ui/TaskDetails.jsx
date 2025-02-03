import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const TaskDetails = () => {
  const location = useLocation();
  const { project } = location.state || {}; // Check if state is present

  if (!project) {
    return <div>No project data available!</div>; // Handle the case where project data is not available
  }

  return (
    <div className="container mx-auto p-6 bg-white rounded-xl shadow-lg mt-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-semibold text-gray-800">{project.name}</h1>
        <Link to="/dashboard">
          <button className="px-4 py-2 bg-gray-500 text-white rounded-lg">Back to Dashboard</button>
        </Link>
      </div>
      
      <div className="text-lg text-gray-700">
        <p className="mb-4"><strong>Description:</strong> {project.description}</p>
        <p className="mb-4"><strong>Category:</strong> {project.category}</p>
        <p className="mb-4"><strong>Duration:</strong> {project.startDate} - {project.endDate}</p>
        <p className="mb-4"><strong>Progress:</strong> {project.progress}%</p>

        <div className="mt-6">
          <h3 className="font-bold text-xl mb-2">Team Members:</h3>
          <ul className="list-disc pl-6 mb-4">
            {project.teamDetails.map((member, index) => (
              <li key={index} className="mb-2">{member.name} - {member.role}</li>
            ))}
          </ul>
        </div>

        <div className="mt-6">
          <h3 className="font-bold text-xl mb-2">Tasks:</h3>
          <ul className="list-disc pl-6">
            {project.tasks.map((task, index) => (
              <li key={index} className="mb-2">
                <strong>{task.name}:</strong> {task.description}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TaskDetails;
