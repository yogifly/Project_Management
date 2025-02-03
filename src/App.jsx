import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './ui/Sidebar';
import Dashboard from './ui/Dashboard';
import TasksPage from './ui/TaskPage';
import BudgetPage from './ui/Budget';
import VizualizationPage from './ui/VizualitationPage';
import TeamPage from './ui/Team';


function App() {
  return (
    <Router>
      <div className="flex">
        {/* Fixed Sidebar */}
        <Sidebar />
        <div className="ml-16 w-full">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/task" element={<TasksPage />} />
            <Route path="/budget" element={<BudgetPage />} />
            <Route path="/vizualization" element={<VizualizationPage />} />
            <Route path="/team" element={<TeamPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
