// LineChart component to visualize week-wise progress of projects
const ProjectProgressLineChart = () => {
    return (
      <div className="p-4 bg-gray-800 rounded-xl shadow-lg">
        <div className="container mx-auto text-center text-white">
          <h2 className="text-2xl font-semibold mb-6 merienda-title">Weekwise Progress of Projects</h2>
  
          <ResponsiveContainer width="100%" height={350}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
              <XAxis dataKey="week" tick={{ fill: '#fff', fontWeight: 'bold' }} />
              <YAxis tick={{ fill: '#fff' }} />
              <Tooltip content={<CustomTooltip />} />
              <Legend
                iconType="circle"
                iconSize={14}
                layout="horizontal"
                verticalAlign="top"
                align="center"
              />
              <Line
                type="monotone"
                dataKey="Web Designing"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
                strokeWidth={3}
                isAnimationActive={true}
                animationDuration={1500}
              />
              <Line
                type="monotone"
                dataKey="Mobile App"
                stroke="#82ca9d"
                activeDot={{ r: 8 }}
                strokeWidth={3}
                isAnimationActive={true}
                animationDuration={1500}
              />
              <Line
                type="monotone"
                dataKey="Dashboard"
                stroke="#FF6347"
                activeDot={{ r: 8 }}
                strokeWidth={3}
                isAnimationActive={true}
                animationDuration={1500}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  };
  
  export default ProjectProgressLineChart;