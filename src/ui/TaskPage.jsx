import React, { useState } from 'react';
import OverallProgressCircle from './OverallProgressCircle';
import TaskTable from './TaskTable';
import UpdatesList from './UpdatesList';
import ProjectDetails from './ProjectDetails';

function TasksPage() {
  const projects = [
    {
      projectName: 'Project Alpha',
      description: 'A project to design and develop a new user interface for the company website.',
      startDate: '2023-10-01',
      endDate: '2023-12-31',
      teamMembers: 8,
      tasks: [
        {
          taskName: 'Design UI',
          progress: 75,
          startDate: '2023-10-01',
          endDate: '2023-10-15',
          people: ['Alice', 'Bob'],
          status: 'In Progress',
          updates: [
            'Task started on 2023-10-01',
            'Initial design completed on 2023-10-05',
          ],
        },
        {
          taskName: 'Develop Backend',
          progress: 50,
          startDate: '2023-10-10',
          endDate: '2023-10-25',
          people: ['Charlie', 'David'],
          status: 'On Hold',
          updates: [
            'Task started on 2023-10-10',
            'Development paused due to server issues',
          ],
        },
      ],
      overallProgress: 60,
    },
  ];

  const [selectedProject, setSelectedProject] = useState(projects[0]);

  const handleProjectChange = (event) => {
    const selectedProjectName = event.target.value;
    const project = projects.find((p) => p.projectName === selectedProjectName);
    setSelectedProject(project);
  };

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Project Tasks</h1>
      
      <div className="mb-6 w-64">
        <label htmlFor="project-select" className="block text-sm font-medium text-gray-700">
          Select Project
        </label>
        <select
          id="project-select"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={selectedProject.projectName}
          onChange={handleProjectChange}
        >
          {projects.map((project, index) => (
            <option key={index} value={project.projectName}>
              {project.projectName}
            </option>
          ))}
        </select>
      </div>

      {selectedProject && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-4">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Tasks</h2>
              <TaskTable tasks={selectedProject.tasks} />
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white rounded-lg shadow-md p-4">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Updates</h2>
                <UpdatesList tasks={selectedProject.tasks} />
              </div>
              <div className="bg-white rounded-lg shadow-md p-4">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Overall Progress</h2>
                <OverallProgressCircle progress={selectedProject.overallProgress} />
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4">
              <ProjectDetails
                description={selectedProject.description}
                startDate={selectedProject.startDate}
                endDate={selectedProject.endDate}
                teamMembers={selectedProject.teamMembers}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default TasksPage;
