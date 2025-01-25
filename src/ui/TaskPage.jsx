import React from 'react';
import { useParams } from 'react-router-dom'; // Ensure this import is present
import Stack from './Stack'; // Assuming Stack is a component that displays tasks

const taskData = [
  { id: 1, name: "Web Designing", category: "Development", progress: 45, startDate: "2025-01-01", endDate: "2025-02-01", teamMembersCount: 4, projectName: "Web Designing" },
  { id: 2, name: "Project Beta", category: "Design", progress: 65, startDate: "2025-02-01", endDate: "2025-03-01", teamMembersCount: 6, projectName: "Mobile App" },
  { id: 3, name: "Project Gamma", category: "Testing", progress: 25, startDate: "2025-01-10", endDate: "2025-02-10", teamMembersCount: 3, projectName: "Dashboard" },
  { id: 4, name: "Project Delta", category: "Research", progress: 75, startDate: "2025-03-01", endDate: "2025-04-01", teamMembersCount: 2, projectName: "Web Designing" },
];

function TaskPage() {
  const { projectName } = useParams(); // Use useParams to get the route parameter

  // Filter tasks based on the project name
  const filteredTasks = taskData.filter(task => task.projectName === projectName);

  return (
    <div>
      <h1>Task List for {projectName}</h1>
      <Stack tasksData={filteredTasks} />
    </div>
  );
}

export default TaskPage;
