import React from "react";

export const BudgetOverview = ({ budget, expenses }) => {
  const totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  const variance = budget - totalExpenses;
  const varianceColor = variance < 0 ? "text-red-600" : "text-green-600";

  return (
    <div className="p-4 bg-white rounded-xl shadow-md mb-4">
      <div className="flex justify-between items-center">
        {/* Budget Planning */}
        <div className="w-1/2 p-4 border-r">
          <h3 className="text-xl font-semibold">Alloted Budget</h3>
          <p className="text-lg"> ${budget}</p>
        </div>

        {/* Variance Analysis */}
        <div className="w-1/2 p-4">
          <h3 className="text-xl font-semibold">Variance Analysis</h3>
          <p className={`text-lg ${varianceColor}`}>
            {variance < 0 ? "Over Budget" : "Under Budget"}: ${Math.abs(variance)}
          </p>
        </div>
      </div>
    </div>
  );
};
