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
  Rectangle,
} from "recharts";

// One product's monthly sales and returns
const barChartData = [
  { month: "Jan", sales: 3200, returns: 300 },
  { month: "Feb", sales: 2900, returns: 250 },
  { month: "Mar", sales: 4100, returns: 360 },
  { month: "Apr", sales: 4600, returns: 240 },
  { month: "May", sales: 5100, returns: 400 },
  { month: "Jun", sales: 4800, returns: 380 },
  { month: "Jul", sales: 5300, returns: 450 },
  { month: "Aug", sales: 5700, returns: 420 },
  { month: "Sep", sales: 4900, returns: 370 },
  { month: "Oct", sales: 5200, returns: 350 },
  { month: "Nov", sales: 5800, returns: 480 },
  { month: "Dec", sales: 6100, returns: 500 },
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
          <p key={index} style={{ color: entry.fill }}>
            {`${entry.name}: ${entry.value}`}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export default function SimpleBarChart() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12 text-center">
          <h3 className="mb-4 fw-bold text-secondary">Monthly Sales & Returns – Product A</h3>
          <p className="text-muted">Visual summary of performance for a single product</p>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-12 col-md-12 col-lg-10">
          <div className="chart-container border rounded shadow p-5 bg-white">
            <ResponsiveContainer width="100%" height={450}>
              <BarChart
                data={barChartData}
                margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                <XAxis dataKey="month" tick={{ fontSize: 14 }} />
                <YAxis tick={{ fontSize: 14 }} />
                <Tooltip content={<CustomTooltip />} />
                <Legend wrapperStyle={{ fontSize: "14px" }} />
                <Bar
                  dataKey="sales"
                  name="Units Sold"
                  fill="#4e79a7"
                  activeBar={<Rectangle fill="#a6c8ff" stroke="#1f4e79" />}
                />
                <Bar
                  dataKey="returns"
                  name="Returns"
                  fill="#e15759"
                  activeBar={<Rectangle fill="#ffb6b8" stroke="#a30000" />}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
