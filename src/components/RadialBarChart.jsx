import React from "react";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  Tooltip,
  ResponsiveContainer,
  PolarAngleAxis,
} from "recharts";

// Employee Performance Data with adjusted levels
const data = [
  { name: "Teamwork", value: 85, fill: "#0088FE" },
  { name: "Communication", value: 92, fill: "#00C49F" },
  { name: "Technical Skills", value: 98, fill: "#FFBB28" },
  { name: "Problem Solving", value: 75, fill: "#FF8042" },
  { name: "Time Management", value: 65, fill: "#AA67CC" },
  { name: "Adaptability", value: 88, fill: "#FF5A5F" },
];

export default function EnhancedRadialBarChart() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <div className="col-12">
          <h3 className="fw-bold text-secondary mb-3">
            Employee Performance Metrics
          </h3>
          <p className="text-muted">
            A detailed radial bar chart illustrating employee performance metrics with low and high levels.
          </p>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-12 col-md-12 col-lg-8">
          <div className="chart-container border rounded shadow p-5 bg-white">
            <ResponsiveContainer width="100%" height={500}>
              <RadialBarChart
                width={500}
                height={500}
                cx="50%"
                cy="50%"
                innerRadius="20%"
                outerRadius="90%"
                barSize={15}
                data={data}
              >
                {/* PolarAngleAxis for Low and High Levels */}
                <PolarAngleAxis
                  type="number"
                  domain={[0, 100]}
                  angleAxisId={0}
                  tick={{ fontSize: 14, fill: "#666" }}
                  tickLine={false}
                />
                <RadialBar
                  minAngle={15}
                  clockWise
                  background={{ fill: "#f0f0f0" }}
                  dataKey="value"
                  cornerRadius={10}
                />
                <Tooltip />
                <Legend
                  iconSize={12}
                  layout="horizontal"
                  verticalAlign="bottom"
                  align="center"
                  wrapperStyle={{ fontSize: "14px", marginTop: "20px" }}
                />
              </RadialBarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
