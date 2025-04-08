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
  LabelList,
  ReferenceLine,
} from "recharts";

// New dataset: Net change in users (in thousands)
const userData = [
  { name: "Jan", users: 8 },
  { name: "Feb", users: -3 },
  { name: "Mar", users: 12 },
  { name: "Apr", users: -7 },
  { name: "May", users: 15 },
  { name: "Jun", users: 5 },
  { name: "Jul", users: -10 },
  { name: "Aug", users: 18 },
  { name: "Sep", users: 10 },
  { name: "Oct", users: -2 },
  { name: "Nov", users: 6 },
  { name: "Dec", users: -5 },
];

// Tooltip formatting
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload?.length) {
    const val = payload[0].value;
    return (
      <div style={{ backgroundColor: "#fff", border: "1px solid #ccc", padding: 10 }}>
        <p className="fw-bold">{label}</p>
        <p style={{ color: val >= 0 ? "#2196f3" : "#e57373" }}>
          {val >= 0 ? "Users Gained" : "Users Lost"}: {Math.abs(val)}k
        </p>
      </div>
    );
  }
  return null;
};

export default function PositiveAndNegativeBarChart() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <div className="col-12">
          <h3 className="fw-bold text-secondary mb-3">Monthly Net User Growth</h3>
          <p className="text-muted">Positive bars show user gains, negative bars show user losses</p>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-12 col-md-12 col-lg-10">
          <div className="chart-container border rounded shadow p-5 bg-white">
            <ResponsiveContainer width="100%" height={450}>
              <BarChart
                data={userData}
                margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#f5f5f5" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                <ReferenceLine
                  y={0}
                  stroke="#aaa"
                  strokeDasharray="4 2"
                  label={{ value: "No Change", position: "insideTopRight", fill: "#999", fontSize: 12 }}
                />
                <Bar
                  dataKey="users"
                  name="Net Users"
                  barSize={40}
                  shape={(props) => {
                    const { x, y, width, height, value } = props;
                    const color = value < 0 ? "#FFE0E0" : "#B3E5FC"; // light red / light blue
                    return (
                      <rect
                        x={x}
                        y={value < 0 ? y : y}
                        width={width}
                        height={Math.abs(height)}
                        fill={color}
                        rx={4}
                        ry={4}
                      />
                    );
                  }}
                >
                  <LabelList dataKey="users" position="top" formatter={(val) => `${val}k`} />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
