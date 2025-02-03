import React from 'react';

function ProjectDetails({ description, startDate, endDate, teamMembers }) {
  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Project Details</h2>
      <div className="space-y-3 text-gray-700">
        <p>
          <strong>Description:</strong> {description}
        </p>
        <p>
          <strong>Start Date:</strong> {startDate}
        </p>
        <p>
          <strong>End Date:</strong> {endDate}
        </p>
        <p>
          <strong>Team Members:</strong> {teamMembers}
        </p>
      </div>
    </div>
  );
}

export default ProjectDetails;