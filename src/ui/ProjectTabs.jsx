import React, { useState } from "react";
import { Link } from "react-router-dom";

const ProjectTabs = ({ projects }) => {
  const [expandedTab, setExpandedTab] = useState(null);

  const toggleTab = (index) => {
    setExpandedTab(expandedTab === index ? null : index);
  };

  return (
    <div className="container mx-auto px-4 py-6">
      {!projects?.length ? (
        <p className="text-center text-gray-500">No projects available.</p>
      ) : (
        projects.map((project, index) => (
          <div
            key={index}
            className="border rounded-lg shadow-lg mb-4 bg-white p-4"
          >
            {/* Wide Tab */}
            <div
              className="flex flex-col md:flex-row items-center justify-between cursor-pointer"
              onClick={() => toggleTab(index)}
            >
              <div>
                <h2 className="text-xl font-bold">{project.name}</h2>
                <p className="text-gray-600">{project.description}</p>
                <p className="text-sm text-blue-600 mt-1">{project.category}</p>
              </div>
              <div className="flex items-center mt-4 md:mt-0">
                <div className="w-36 bg-gray-200 rounded-full h-4 mr-4">
                  <div
                    className="bg-blue-500 h-4 rounded-full"
                    style={{ width: `${project.progress}%` }}
                  ></div>
                </div>
                <div className="flex items-center">
                  <span className="text-gray-600 text-lg mr-2">👥</span>
                  <span>{project.teamMembersCount}</span>
                </div>
                <span className="text-gray-600 text-xl ml-4">
                  {expandedTab === index ? "▲" : "▼"}
                </span>
              </div>
            </div>

            {/* Expanded Content */}
            {expandedTab === index && (
              <div className="mt-4 border-t pt-4">
                <p>
                  <span className="font-bold">Duration:</span>{" "}
                  {project.startDate} - {project.endDate}
                </p>
                <div className="mt-4">
                  <h3 className="font-bold">Team Details:</h3>
                  <ul className="list-disc pl-6">
                    {project.teamDetails.map((member, i) => (
                      <li key={i}>
                        {member.name} -{" "}
                        <span className="text-gray-500">{member.role}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-4">
                  <h3 className="font-bold">Tasks:</h3>
                  <ul className="list-disc pl-6">
                    {project.tasks.map((task, i) => (
                      <li key={i}>
                        {task.name}:{" "}
                        <span className="text-gray-500">{task.description}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default ProjectTabs;
