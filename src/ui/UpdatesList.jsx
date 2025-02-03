import React from 'react';

function UpdatesList({ tasks }) {
  return (
    <div>
      {tasks.map((task, index) => (
        <div key={index} className="mb-4">
          <h3 className="text-lg font-medium text-gray-700">{task.taskName}</h3>
          <ul className="list-disc pl-5 text-gray-600">
            {task.updates.map((update, updateIndex) => (
              <li key={updateIndex}>{update}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default UpdatesList;