import React from "react";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

// Data: Study Hours and Attendance Percentage
const studentData = [
  { studyHours: 10, attendance: 80 },
  { studyHours: 15, attendance: 85 },
  { studyHours: 20, attendance: 90 },
  { studyHours: 25, attendance: 92 },
  { studyHours: 30, attendance: 94 },
  { studyHours: 35, attendance: 96 },
  { studyHours: 40, attendance: 98 },
  { studyHours: 45, attendance: 99 },
];

const scoreData = [
  { studyHours: 10, score: 50 },
  { studyHours: 15, score: 60 },
  { studyHours: 20, score: 65 },
  { studyHours: 25, score: 70 },
  { studyHours: 30, score: 78 },
  { studyHours: 35, score: 85 },
  { studyHours: 40, score: 90 },
  { studyHours: 45, score: 92 },
];

export default function MultipleYAxesScatterChart() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <div className="col-12">
          <h3 className="fw-bold text-secondary mb-3">
            Study Hours vs. Scores and Attendance
          </h3>
          <p className="text-muted">
            A scatter plot with two Y-axes to visualize the relationship between study hours, test scores, and attendance.
          </p>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-12 col-md-12 col-lg-10">
          <div className="chart-container border rounded shadow p-5 bg-white">
            <ResponsiveContainer width="100%" height={450}>
              <ScatterChart
                margin={{ top: 20, right: 40, left: 20, bottom: 20 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis
                  type="number"
                  dataKey="studyHours"
                  name="Study Hours"
                  unit=" hrs"
                  label={{
                    value: "Study Hours (hrs)",
                    position: "insideBottom",
                    offset: -5,
                  }}
                />
                <YAxis
                  yAxisId="left"
                  type="number"
                  dataKey="score"
                  name="Test Scores"
                  unit="%"
                  label={{
                    value: "Test Scores (%)",
                    angle: -90,
                    position: "insideLeft",
                  }}
                  stroke="#8884d8"
                />
                <YAxis
                  yAxisId="right"
                  orientation="right"
                  type="number"
                  dataKey="attendance"
                  name="Attendance"
                  unit="%"
                  label={{
                    value: "Attendance (%)",
                    angle: 90,
                    position: "insideRight",
                  }}
                  stroke="#82ca9d"
                />
                <Tooltip cursor={{ strokeDasharray: "3 3" }} />
                <Legend />
                <Scatter
                  yAxisId="left"
                  name="Test Scores"
                  data={scoreData}
                  fill="#8884d8"
                  shape="circle"
                />
                <Scatter
                  yAxisId="right"
                  name="Attendance"
                  data={studentData}
                  fill="#82ca9d"
                  shape="triangle"
                />
              </ScatterChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
