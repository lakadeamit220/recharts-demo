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
} from "recharts";

// Department expenses across months
const expenseData = [
  { month: "Jan", rnd: 4000, marketing: 2400, operations: 3200 },
  { month: "Feb", rnd: 3800, marketing: 2600, operations: 3100 },
  { month: "Mar", rnd: 4500, marketing: 2800, operations: 3300 },
  { month: "Apr", rnd: 4700, marketing: 2900, operations: 3400 },
  { month: "May", rnd: 5000, marketing: 3200, operations: 3500 },
  { month: "Jun", rnd: 5200, marketing: 3100, operations: 3600 },
  { month: "Jul", rnd: 5100, marketing: 3300, operations: 3700 },
  { month: "Aug", rnd: 5300, marketing: 3500, operations: 3800 },
  { month: "Sep", rnd: 4900, marketing: 3000, operations: 3600 },
  { month: "Oct", rnd: 5100, marketing: 3400, operations: 3900 },
  { month: "Nov", rnd: 5400, marketing: 3600, operations: 4000 },
  { month: "Dec", rnd: 5600, marketing: 3700, operations: 4200 },
];

// Custom Tooltip
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload?.length) {
    return (
      <div style={{ backgroundColor: "#fff", border: "1px solid #ccc", padding: "10px" }}>
        <p className="fw-bold">Month: {label}</p>
        {payload.map((entry, i) => (
          <p key={i} style={{ color: entry.fill }}>
            {`${entry.name}: $${entry.value.toLocaleString()}`}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export default function StackedBarChart() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12 text-center">
          <h3 className="mb-4 fw-bold text-secondary">Monthly Departmental Expenses</h3>
          <p className="text-muted">Stacked breakdown of R&D, Marketing, and Operations</p>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-12 col-md-12 col-lg-10">
          <div className="chart-container border rounded shadow p-5 bg-white">
            <ResponsiveContainer width="100%" height={450}>
              <BarChart
                data={expenseData}
                margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
                <XAxis dataKey="month" tick={{ fontSize: 14 }} />
                <YAxis tick={{ fontSize: 14 }} />
                <Tooltip content={<CustomTooltip />} />
                <Legend wrapperStyle={{ fontSize: "14px" }} />
                <Bar dataKey="rnd" stackId="a" fill="#B5D3FF" name="R&D" />
                <Bar dataKey="marketing" stackId="a" fill="#FFE5B4" name="Marketing" />
                <Bar dataKey="operations" stackId="a" fill="#D0F0C0" name="Operations" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
