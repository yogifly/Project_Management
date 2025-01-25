import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './ui/Dashboard';
import TaskPage from './ui/TaskPage'; // Import TaskPage component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/tasks/:projectName" element={<TaskPage />} /> {/* Add route for TaskPage */}
      </Routes>
    </Router>
  );
}

export default App;
