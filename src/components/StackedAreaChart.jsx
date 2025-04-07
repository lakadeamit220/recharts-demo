import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// Simulated real-world traffic data
const trafficData = [
  { month: "Jan", organic: 1200, social: 800, direct: 600 },
  { month: "Feb", organic: 1400, social: 900, direct: 700 },
  { month: "Mar", organic: 1700, social: 1100, direct: 900 },
  { month: "Apr", organic: 2000, social: 1300, direct: 1000 },
  { month: "May", organic: 2300, social: 1600, direct: 1200 },
  { month: "Jun", organic: 2100, social: 1700, direct: 1100 },
  { month: "Jul", organic: 2500, social: 1800, direct: 1400 },
  { month: "Aug", organic: 2600, social: 1900, direct: 1500 },
  { month: "Sep", organic: 2400, social: 1700, direct: 1300 },
  { month: "Oct", organic: 2700, social: 2000, direct: 1600 },
  { month: "Nov", organic: 2800, social: 2100, direct: 1700 },
  { month: "Dec", organic: 3000, social: 2200, direct: 1800 },
];

// Custom tooltip
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          backgroundColor: "#fff",
          border: "1px solid #ccc",
          padding: "10px",
        }}
      >
        <p className="fw-bold">{`Month: ${label}`}</p>
        {payload.map((entry, index) => (
          <p key={index} style={{ color: entry.color }}>
            {`${entry.name}: ${entry.value}`}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export default function StackedAreaChart() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12 text-center">
          <h3 className="mb-4 fw-bold text-secondary">Monthly Website Traffic by Source</h3>
          <p className="text-muted">Stacked view of traffic sources across the year</p>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-12 col-md-12 col-lg-10">
          <div className="chart-container border rounded shadow p-5 bg-white">
            <ResponsiveContainer width="100%" height={450}>
              <AreaChart
                data={trafficData}
                margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#d8d8d8" />
                <XAxis dataKey="month" tick={{ fontSize: 14 }} />
                <YAxis tick={{ fontSize: 14 }} />
                <Tooltip content={<CustomTooltip />} />
                <Legend wrapperStyle={{ fontSize: "14px" }} />
                <Area
                  type="monotone"
                  dataKey="organic"
                  stackId="1"
                  stroke="#4e79a7"
                  fill="#a6c8ff"
                  name="Organic Search"
                />
                <Area
                  type="monotone"
                  dataKey="social"
                  stackId="1"
                  stroke="#59a14f"
                  fill="#b5e6b3"
                  name="Social Media"
                />
                <Area
                  type="monotone"
                  dataKey="direct"
                  stackId="1"
                  stroke="#f28e2c"
                  fill="#ffd8a8"
                  name="Direct Traffic"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
