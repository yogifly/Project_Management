import React, { useState } from "react";
import { ExpenseTracking } from "./ExpenseTracking";
import { CostBreakdown } from "./CostBreakdown";
import { ReportExport } from "./ReportExport";
import LineChart from "./LineChart";
import { BudgetOverview } from "./BudgetOverview";

const dummyData = {
  "Project A": {
    budgetPlanning: 100000,
    expenses: [
      { id: 1, category: "API Services", amount: 20000, date: "2024-01-10" },
      { id: 2, category: "Online Tools Subscription", amount: 15000, date: "2024-01-15" },
      { id: 3, category: "Cloud Services", amount: 30000, date: "2024-01-20" },
    ],
    budgetData: [
      { week: "Week 1", planned: 20000, actual: 22000 },
      { week: "Week 2", planned: 25000, actual: 27000 },
      { week: "Week 3", planned: 30000, actual: 29000 },
    ],
    phases: [
      { phase: "Design", cost: 10000, resources: 3 },
      { phase: "Development", cost: 25000, resources: 5 },
      { phase: "Testing", cost: 15000, resources: 2 },
    ],
  },
  "Project B": {
    budgetPlanning: 150000,
    expenses: [
      { id: 1, category: "API Services", amount: 50000, date: "2024-01-12" },
      { id: 2, category: "Cloud Storage", amount: 20000, date: "2024-01-20" },
      { id: 3, category: "Domain and Hosting", amount: 30000, date: "2024-01-25" },
    ],
    budgetData: [
      { week: "Week 1", planned: 40000, actual: 45000 },
      { week: "Week 2", planned: 50000, actual: 52000 },
      { week: "Week 3", planned: 60000, actual: 61000 },
    ],
    phases: [
      { phase: "Design", cost: 20000, resources: 4 },
      { phase: "Development", cost: 50000, resources: 8 },
      { phase: "Testing", cost: 25000, resources: 3 },
    ],
  },
};

function Budget() {
  const [selectedProject, setSelectedProject] = useState("Project A");
  const projectData = dummyData[selectedProject];

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">Budget Management</h1>

      <div className="flex justify-between mb-4">
        <select
          className="p-1 md:p-2 border rounded-md w-full md:w-1/3 mb-2 md:mb-0"
          value={selectedProject}
          onChange={(e) => setSelectedProject(e.target.value)}
        >
          {Object.keys(dummyData).map((project) => (
            <option key={project} value={project}>
              {project}
            </option>
          ))}
        </select>
        <ReportExport />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
        <BudgetOverview budget={projectData.budgetPlanning} expenses={projectData.expenses} />
          <ExpenseTracking expenses={projectData.expenses} />
          
          {/* Line Chart Updates */}
          <LineChart budgetData={projectData.budgetData} />
        </div>

        <div>
          <CostBreakdown expenses={projectData.expenses} />
        </div>
      </div>
    </div>
  );
}

export default Budget;
