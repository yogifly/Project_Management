import React, { createContext, useState, useContext } from 'react';

// Create a context for the project
const ProjectContext = createContext();

// Provider to wrap around the app to provide project data
export const ProjectProvider = ({ children }) => {
  const [projectData, setProjectData] = useState([]);

  // Function to set project data
  const setProject = (project) => {
    setProjectData((prevData) => [...prevData, project]);
  };

  return (
    <ProjectContext.Provider value={{ projectData, setProject }}>
      {children}
    </ProjectContext.Provider>
  );
};

// Custom hook to use project context
export const useProject = () => {
  return useContext(ProjectContext);
};
