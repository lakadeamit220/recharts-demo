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

// Weekly mobile app downloads
const appData = [
  { name: "WhatsApp", downloads: 120000 },
  { name: "Instagram", downloads: 95000 },
  { name: "TikTok", downloads: 105000 },
  { name: "Spotify", downloads: 88000 },
  { name: "Snapchat", downloads: 77000 },
  { name: "YouTube", downloads: 130000 },
];

// Pill-shaped bar
const PillBar = (props) => {
  const { x, y, width, height, fill } = props;
  const radius = width / 2; // roundness depends on width
  return (
    <rect
      x={x}
      y={y}
      width={width}
      height={height}
      rx={radius}
      ry={radius}
      fill={fill}
    />
  );
};

// Tooltip
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload?.length) {
    return (
      <div style={{ backgroundColor: "#fff", padding: 10, border: "1px solid #ccc" }}>
        <p className="fw-bold">{label}</p>
        <p style={{ color: payload[0].fill }}>
          Downloads: {payload[0].value.toLocaleString()}
        </p>
      </div>
    );
  }
  return null;
};

export default function CustomShapeBarChart() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12 text-center">
          <h3 className="mb-4 fw-bold text-secondary">Weekly App Downloads</h3>
          <p className="text-muted">Rounded bars show download volume per mobile app</p>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-12 col-md-12 col-lg-8">
          <div className="chart-container border rounded shadow p-5 bg-white">
            <ResponsiveContainer width="100%" height={400}>
              <BarChart
                data={appData}
                margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
                <XAxis dataKey="name" tick={{ fontSize: 14 }} />
                <YAxis tick={{ fontSize: 14 }} />
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                <Bar
                  dataKey="downloads"
                  fill="#FFBC9A"
                  shape={<PillBar />}
                  name="Downloads"
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
