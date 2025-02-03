import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const CostBreakdown = ({ expenses }) => {
  const data = {
    labels: expenses.map((expense) => expense.category),
    datasets: [
      {
        data: expenses.map((expense) => expense.amount),
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
      },
    ],
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-xl font-semibold mb-2">Cost Breakdown</h2>
      <Pie 
        data={data} 
        options={{ maintainAspectRatio: false }} 
        style={{ maxHeight: "400px", maxWidth: "400px" }} 
        />
    </div>
  );
};