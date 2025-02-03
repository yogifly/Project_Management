import React from 'react';
import { motion } from 'framer-motion';

function TaskTable({ tasks }) {
  return (
    <div className="space-y-4">
      {tasks.map((task, index) => (
        <div key={index} className="p-4 border border-gray-200 rounded-lg">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-medium text-gray-800">{task.taskName}</h3>
            <span
              className={`px-2 py-1 text-sm rounded-full ${
                task.status === 'Completed'
                  ? 'bg-green-100 text-green-800'
                  : task.status === 'In Progress'
                  ? 'bg-blue-100 text-blue-800'
                  : 'bg-yellow-100 text-yellow-800'
              }`}
            >
              {task.status}
            </span>
          </div>
          <div className="mt-2 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <p>Progress:</p>
              <div className="w-full bg-gray-200 rounded-lg overflow-hidden flex-1">
                <motion.div
                  className={`h-4 ${task.progress > 50 ? 'bg-green-500' : 'bg-yellow-500'}`}
                  initial={{ width: 0 }}
                  animate={{ width: `${task.progress}%` }}
                  transition={{ type: "spring", stiffness: 100, damping: 10 }}
                ></motion.div>
              </div>
              <span>{task.progress}%</span>
            </div>
            <p>Start Date: {task.startDate}</p>
            <p>End Date: {task.endDate}</p>
          </div>
          <div className="mt-2">
            <div className="flex flex-wrap gap-2">
              <span className="bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded-full">
                Team - {task.people.join(', ')}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TaskTable;
