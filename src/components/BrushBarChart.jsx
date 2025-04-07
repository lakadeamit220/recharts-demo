import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Brush,
} from "recharts";

const dataUsage = [
  { name: "Jan 2023", usage: 18 },
  { name: "Feb 2023", usage: 22 },
  { name: "Mar 2023", usage: 25 },
  { name: "Apr 2023", usage: 20 },
  { name: "May 2023", usage: 27 },
  { name: "Jun 2023", usage: 30 },
  { name: "Jul 2023", usage: 32 },
  { name: "Aug 2023", usage: 29 },
  { name: "Sep 2023", usage: 26 },
  { name: "Oct 2023", usage: 23 },
  { name: "Nov 2023", usage: 21 },
  { name: "Dec 2023", usage: 28 },
  { name: "Jan 2024", usage: 26 },
  { name: "Feb 2024", usage: 24 },
  { name: "Mar 2024", usage: 29 },
  { name: "Apr 2024", usage: 31 },
  { name: "May 2024", usage: 33 },
  { name: "Jun 2024", usage: 30 },
  { name: "Jul 2024", usage: 35 },
  { name: "Aug 2024", usage: 34 },
  { name: "Sep 2024", usage: 28 },
  { name: "Oct 2024", usage: 27 },
  { name: "Nov 2024", usage: 26 },
  { name: "Dec 2024", usage: 32 },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload?.length) {
    return (
      <div style={{ backgroundColor: "#fff", border: "1px solid #ccc", padding: 10 }}>
        <p className="fw-bold">{label}</p>
        <p style={{ color: payload[0].fill }}>
          Usage: {payload[0].value} GB
        </p>
      </div>
    );
  }
  return null;
};

export default function BrushBarChart() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12 text-center">
          <h3 className="mb-4 fw-bold text-secondary">Monthly Mobile Data Usage (2 Years)</h3>
          <p className="text-muted">Use the brush tool below to zoom and explore trends over time</p>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-12 col-md-12 col-lg-10">
          <div className="chart-container border rounded shadow p-5 bg-white">
            <ResponsiveContainer width="100%" height={450}>
              <BarChart
                data={dataUsage}
                margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
                <XAxis dataKey="name" tick={{ fontSize: 12 }} interval={0} angle={-45} textAnchor="end" />
                <YAxis tick={{ fontSize: 14 }} unit=" GB" />
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                <Bar dataKey="usage" fill="#7FB3D5" name="Data Usage (GB)" />
                <Brush dataKey="name" height={30} stroke="#8884d8" travellerWidth={10} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
