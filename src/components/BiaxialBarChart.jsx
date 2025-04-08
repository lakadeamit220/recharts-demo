import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

// Monthly Study Hours and Scores Data
const studentData = [
  { name: "Jan", studyHours: 25, avgScore: 75 },
  { name: "Feb", studyHours: 30, avgScore: 78 },
  { name: "Mar", studyHours: 28, avgScore: 80 },
  { name: "Apr", studyHours: 35, avgScore: 85 },
  { name: "May", studyHours: 40, avgScore: 90 },
  { name: "Jun", studyHours: 32, avgScore: 82 },
  { name: "Jul", studyHours: 20, avgScore: 70 },
  { name: "Aug", studyHours: 25, avgScore: 75 },
  { name: "Sep", studyHours: 37, avgScore: 88 },
  { name: "Oct", studyHours: 42, avgScore: 92 },
  { name: "Nov", studyHours: 38, avgScore: 89 },
  { name: "Dec", studyHours: 22, avgScore: 74 },
];

export default function BiaxialBarChart() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <div className="col-12">
          <h3 className="fw-bold text-secondary mb-3">
            Monthly Study Hours vs. Average Scores
          </h3>
          <p className="text-muted">
            A comparison between study effort and performance trends
          </p>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-12 col-md-12 col-lg-10">
          <div className="chart-container border rounded shadow p-5 bg-white">
            <ResponsiveContainer width="100%" height={450}>
              <BarChart
                data={studentData}
                margin={{ top: 20, right: 40, left: 20, bottom: 20 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="name" />
                <YAxis
                  yAxisId="left"
                  orientation="left"
                  stroke="#4caf50"
                  label={{
                    value: "Study Hours (hrs)",
                    angle: -90,
                    position: "insideLeft",
                    fill: "#4caf50",
                  }}
                />
                <YAxis
                  yAxisId="right"
                  orientation="right"
                  stroke="#2196f3"
                  label={{
                    value: "Average Score (%)",
                    angle: 90,
                    position: "insideRight",
                    fill: "#2196f3",
                  }}
                />
                <Tooltip />
                <Legend />
                <Bar
                  yAxisId="left"
                  dataKey="studyHours"
                  name="Study Hours"
                  fill="#81c784"
                  barSize={20}
                />
                <Bar
                  yAxisId="right"
                  dataKey="avgScore"
                  name="Average Score"
                  fill="#64b5f6"
                  barSize={20}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
