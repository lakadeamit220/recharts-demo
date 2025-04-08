import React from "react";
import {
  ComposedChart,
  Scatter,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

// Study Hours vs. Test Scores Data
const studentData = [
  { studyHours: 10, score: 50 },
  { studyHours: 15, score: 60 },
  { studyHours: 20, score: 65 },
  { studyHours: 25, score: 70 },
  { studyHours: 30, score: 78 },
  { studyHours: 35, score: 85 },
  { studyHours: 40, score: 90 },
  { studyHours: 45, score: 92 },
  { studyHours: 50, score: 95 },
];

// Function to calculate linear regression (Line of Best Fit)
const calculateRegressionLine = (data) => {
  const n = data.length;
  const sumX = data.reduce((sum, point) => sum + point.studyHours, 0);
  const sumY = data.reduce((sum, point) => sum + point.score, 0);
  const sumXY = data.reduce((sum, point) => sum + point.studyHours * point.score, 0);
  const sumX2 = data.reduce((sum, point) => sum + point.studyHours ** 2, 0);

  const slope = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX ** 2);
  const intercept = (sumY - slope * sumX) / n;

  // Generate points for the line
  const xMin = Math.min(...data.map((d) => d.studyHours));
  const xMax = Math.max(...data.map((d) => d.studyHours));
  return [
    { studyHours: xMin, score: slope * xMin + intercept },
    { studyHours: xMax, score: slope * xMax + intercept },
  ];
};

const regressionLine = calculateRegressionLine(studentData);

export default function ScatterAndLineOfBestFit() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <div className="col-12">
          <h3 className="fw-bold text-secondary mb-3">
            Study Hours vs. Test Scores with Connected Lines
          </h3>
          <p className="text-muted">
            Scatter plot showing individual data points, connected lines, and a best fit line
          </p>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-12 col-md-12 col-lg-10">
          <div className="chart-container border rounded shadow p-5 bg-white">
            <ResponsiveContainer width="100%" height={450}>
              <ComposedChart
                data={studentData}
                margin={{ top: 20, right: 40, left: 20, bottom: 20 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis
                  dataKey="studyHours"
                  type="number"
                  name="Study Hours"
                  unit="hrs"
                  label={{
                    value: "Study Hours (hrs)",
                    position: "insideBottomRight",
                    offset: 0,
                  }}
                />
                <YAxis
                  dataKey="score"
                  type="number"
                  name="Test Score"
                  unit="%"
                  label={{
                    value: "Test Score (%)",
                    angle: -90,
                    position: "insideLeft",
                  }}
                />
                <Tooltip />
                <Legend />
                {/* Scatter points */}
                <Scatter name="Students" dataKey="score" fill="#8884d8" />
                {/* Connecting line */}
                <Line
                  dataKey="score"
                  name="Trend"
                  stroke="#8884d8"
                  dot={false}
                  activeDot={false}
                  strokeWidth={2}
                />
                {/* Best Fit Line */}
                <Line
                  data={regressionLine}
                  dataKey="score"
                  name="Best Fit Line"
                  stroke="#82ca9d"
                  dot={false}
                  strokeWidth={2}
                  legendType="none"
                />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
