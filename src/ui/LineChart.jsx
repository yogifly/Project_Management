import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, PointElement, LinearScale, Title, CategoryScale } from "chart.js";

ChartJS.register(LineElement, PointElement, LinearScale, Title, CategoryScale);

function LineChart({ budgetData }) {
  const data = {
    labels: budgetData.map((item) => item.week),
    datasets: [
      {
        label: "Planned Budget",
        data: budgetData.map((item) => item.planned),
        borderColor: "rgb(75, 192, 192)",
        fill: false,
        tension: 0.3,
      },
      {
        label: "Actual Expenses",
        data: budgetData.map((item) => item.actual),
        borderColor: "rgb(255, 99, 132)",
        fill: false,
        tension: 0.3,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="bg-white p-4 rounded-md shadow-md w-full h-72">
      <Line data={data} options={options} />
    </div>
  );
}

export default LineChart;
