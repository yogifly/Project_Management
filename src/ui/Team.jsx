import React from "react";

const dummyTeams = [
  {
    teamName: "Alpha Team",
    project: "NSS Website Development",
    members: [
      { name: "Rohan", role: "Team Lead", email: "yogesh@example.com" },
      { name: "Priya", role: "Frontend Developer", email: "priya@example.com" },
      { name: "Raj", role: "Backend Developer", email: "raj@example.com" },
    ],
  },
  {
    teamName: "Beta Team",
    project: "AI Meeting Summarizer",
    members: [
      { name: "Simran", role: "Data Scientist", email: "simran@example.com" },
      { name: "Arjun", role: "ML Engineer", email: "arjun@example.com" },
      { name: "Sara", role: "Project Manager", email: "sara@example.com" },
    ],
  },
  {
    teamName: "Gamma Team",
    project: "Automated Loan Processing",
    members: [
      { name: "Kiran", role: "Business Analyst", email: "kiran@example.com" },
      { name: "Anjali", role: "UI/UX Designer", email: "anjali@example.com" },
      { name: "Dev", role: "Fullstack Developer", email: "dev@example.com" },
    ],
  },
];

function Team() {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-center">Project Teams</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dummyTeams.map((team, index) => (
          <div key={index} className="bg-white p-5 rounded-xl shadow-lg">
            <h2 className="text-xl font-bold mb-2 text-gray-700">{team.teamName}</h2>
            <p className="text-sm text-gray-500 mb-4">Project: {team.project}</p>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Team Members:</h3>
            <ul className="space-y-2">
              {team.members.map((member, idx) => (
                <li
                  key={idx}
                  className="flex justify-between items-center bg-gray-100 p-3 rounded-md"
                >
                  <div>
                    <p className="text-gray-800 font-medium">{member.name}</p>
                    <p className="text-gray-600 text-sm">{member.role}</p>
                  </div>
                  <p className="text-blue-600 text-sm">{member.email}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;
