import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

export const ExpenseTracking = ({ expenses }) => {
  const data = {
    labels: expenses.map((expense) => expense.category),
    datasets: [
      {
        label: "Expense Amounts",
        data: expenses.map((expense) => expense.amount),
        backgroundColor: "#36A2EB",
      },
    ],
  };

  return (
    <div className="p-4 bg-white rounded-xl shadow-md">
      <h2 className="text-xl font-semibold mb-2">Expense Tracking</h2>
      <Bar data={data} />
    </div>
  );
};