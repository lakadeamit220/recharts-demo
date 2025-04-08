import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

// Employee Performance Data
const data = [
  { metric: "Teamwork", score: 85 },
  { metric: "Communication", score: 90 },
  { metric: "Technical Skills", score: 95 },
  { metric: "Problem Solving", score: 80 },
  { metric: "Time Management", score: 75 },
  { metric: "Adaptability", score: 88 },
];

export default function SimpleRadarChart() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <div className="col-12">
          <h3 className="fw-bold text-secondary mb-3">
            Employee Performance Metrics
          </h3>
          <p className="text-muted">
            A radar chart showcasing various performance metrics of an employee.
          </p>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-12 col-md-12 col-lg-8">
          <div className="chart-container border rounded shadow p-5 bg-white">
            <ResponsiveContainer width="100%" height={500}>
              <RadarChart
                data={data}
                cx="50%"
                cy="50%"
                outerRadius="80%"
              >
                <PolarGrid stroke="#f0f0f0" />
                <PolarAngleAxis
                  dataKey="metric"
                  tick={{ fontSize: 14, fill: "#333" }}
                />
                <PolarRadiusAxis
                  angle={30}
                  tick={{ fontSize: 12, fill: "#666" }}
                  stroke="#ccc"
                />
                <Radar
                  name="Score"
                  dataKey="score"
                  stroke="#8884d8"
                  fill="#8884d8"
                  fillOpacity={0.3}
                />
                <Tooltip />
                <Legend />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
