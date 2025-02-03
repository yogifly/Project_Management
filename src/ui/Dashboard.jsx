import React from 'react';
import Sidebar from './Sidebar';
import SearchBar from './SearchBar';
import Tasks from './Tasks'; // Import the Tasks component
import { FaCheckCircle, FaHourglassStart, FaProjectDiagram } from 'react-icons/fa';
import BasicDateCalendar from './Calendar';
import ProjectTabs from './ProjectTabs';

// Sample task data
const tasks = [
  { name: 'Design Landing Page', description: 'Create a responsive landing page.', startDate: '2025-01-01', deadline: '2025-03-30', status: 'In Progress' },
  { name: 'Develop API Endpoints', description: 'Build API endpoints.', startDate: '2025-01-05', deadline: '2025-09-15', status: 'Not Started' },
  { name: 'Testing & QA', description: 'Test the application.', startDate: '2025-07-10', deadline: '2025-10-05', status: 'Pending' },
];

const projects = [
  {
    name: 'Web Designing',
    category: 'Prototyping',
    description: 'A project focused on creating an interactive and responsive web prototype for a client website.',
    startDate: 'July 2, 2025',
    endDate: 'Sep 28, 2025',
    progress: 90,
    daysLeft: 2,
    teamMembersCount: 5,
    teamDetails: [
      { name: 'Alice', role: 'Designer' },
      { name: 'Bob', role: 'Frontend Developer' },
      { name: 'Charlie', role: 'Backend Developer' },
      { name: 'Diana', role: 'Tester' },
      { name: 'Eve', role: 'Project Manager' },
    ],
    tasks: [
      {
        name: 'Homepage Design',
        description: 'Create an intuitive and user-friendly homepage layout.',
        startDate: 'July 3, 2025',
        endDate: 'July 10, 2025',
        members: ['Alice', 'Bob'],
      },
      {
        name: 'API Integration',
        description: 'Integrate backend APIs with the frontend components.',
        startDate: 'July 15, 2025',
        endDate: 'July 25, 2025',
        members: ['Charlie', 'Bob'],
      },
    ],
  },
  {
    name: 'Mobile App',
    category: 'Shopping',
    description: 'Develop a mobile application for an online shopping platform.',
    startDate: 'July 5, 2025',
    endDate: 'Sep 28, 2025',
    progress: 30,
    daysLeft: 21,
    teamMembersCount: 4,
    teamDetails: [
      { name: 'John', role: 'App Developer' },
      { name: 'Sarah', role: 'UI/UX Designer' },
      { name: 'Mike', role: 'QA Specialist' },
      { name: 'Emma', role: 'Product Owner' },
    ],
    tasks: [
      {
        name: 'Wireframing',
        description: 'Create wireframes for the shopping cart and payment screens.',
        startDate: 'July 6, 2025',
        endDate: 'July 10, 2025',
        members: ['Sarah'],
      },
      {
        name: 'Feature Development',
        description: 'Implement user authentication and product search functionality.',
        startDate: 'July 15, 2025',
        endDate: 'July 25, 2025',
        members: ['John', 'Emma'],
      },
    ],
  },
  {
    name: 'Dashboard',
    category: 'Medical',
    description: 'Develop a medical data dashboard for healthcare providers.',
    startDate: 'July 10, 2025',
    endDate: 'Sep 28, 2025',
    progress: 50,
    daysLeft: 14,
    teamMembersCount: 3,
    teamDetails: [
      { name: 'Sophia', role: 'Data Analyst' },
      { name: 'Liam', role: 'Full Stack Developer' },
      { name: 'Olivia', role: 'Project Manager' },
    ],
    tasks: [
      {
        name: 'Data Analysis',
        description: 'Analyze and preprocess patient data for visualization.',
        startDate: 'July 11, 2025',
        endDate: 'July 18, 2025',
        members: ['Sophia'],
      },
      {
        name: 'Frontend Development',
        description: 'Create charts and graphs for the dashboard UI.',
        startDate: 'July 20, 2025',
        endDate: 'July 30, 2025',
        members: ['Liam'],
      },
    ],
  },
  {
    name: 'Web Designing',
    category: 'Wireframing',
    description: 'Design wireframes for a corporate client’s website.',
    startDate: 'July 15, 2025',
    endDate: 'Sep 28, 2025',
    progress: 20,
    daysLeft: 21,
    teamMembersCount: 2,
    teamDetails: [
      { name: 'James', role: 'Designer' },
      { name: 'Emily', role: 'Frontend Developer' },
    ],
    tasks: [
      {
        name: 'Client Requirement Gathering',
        description: 'Understand the client’s requirements and prepare wireframes accordingly.',
        startDate: 'July 16, 2025',
        endDate: 'July 20, 2025',
        members: ['James'],
      },
      {
        name: 'Prototype Development',
        description: 'Convert wireframes into an interactive prototype.',
        startDate: 'July 22, 2025',
        endDate: 'July 30, 2025',
        members: ['Emily'],
      },
    ],
  },
];

function Dashboard() {
  // Calculating project counts
  const totalProjects = projects.length;
  const completedProjects = projects.filter(project => project.progress === 100).length;
  const upcomingProjects = projects.filter(project => project.progress < 100).length;

  // Current date
  const today = new Date();

  // Filter tasks based on startDate and deadline
  const filteredTasks = tasks.filter(task => {
    const startDate = new Date(task.startDate);
    const deadline = new Date(task.deadline);
    return startDate <= today && deadline >= today;
  });

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="fixed">
        <Sidebar />
      </div>

      <div className="flex-1 p-4 ml-16 gap-4 flex bg-blue-100 flex-col lg:flex-row">
        <div className="flex-1 flex flex-col space-y-6 border border-gray p-8 rounded-3xl bg-white">
          {/* Search Bar */}
          <SearchBar />

          {/* Project Summary Section */}
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Projects Overview</h2>
            <div className="flex space-x-8">
              <div className="text-lg text-gray-800">
                <div className="text-4xl font-bold">{totalProjects}</div>
                <div className="text-sm text-gray-600 flex items-center">
                  Total <FaProjectDiagram className="ml-2 text-gray-600" />
                </div>
              </div>
              <div className="text-lg text-gray-800">
                <div className="text-4xl font-bold">{completedProjects}</div>
                <div className="text-sm text-gray-600 flex items-center">
                  Completed <FaCheckCircle className="ml-2 text-green-600" />
                </div>
              </div>
              <div className="text-lg text-gray-800">
                <div className="text-4xl font-bold">{upcomingProjects}</div>
                <div className="text-sm text-gray-600 flex items-center">
                  Upcoming <FaHourglassStart className="ml-2 text-yellow-600" />
                </div>
              </div>
            </div>
          </div>

          {/* Project Cards */}
          <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      {/* Render ProjectTabs */}
      <ProjectTabs projects={projects} />
    </div>
        </div>

        <div className="lg:w-1/3 flex flex-col border p-4 bg-white rounded-3xl overflow-hidden">
          {/* Calendar */}
          <BasicDateCalendar />

          {/* Tasks Section */}
          <div className="mt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Today's Tasks</h2>
            {filteredTasks.map((task, index) => (
              <Tasks key={index} task={task} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
