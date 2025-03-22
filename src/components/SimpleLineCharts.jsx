import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "bootstrap/dist/css/bootstrap.min.css";

// Data with fluctuations for better visualization
const data = [
  {
    name: "Week 1",
    sales: 5000,
    expenses: 3200,
    profit: 1800,
    revenue: 7000,
    advertising: 10000,
    roi: 1.5,
  },
  {
    name: "Week 2",
    sales: 6000,
    expenses: 3500,
    profit: 2500,
    revenue: 8500,
    advertising: 1400,
    roi: 1.8,
  },
  {
    name: "Week 3",
    sales: 5500,
    expenses: 3300,
    profit: 2200,
    revenue: 8000,
    advertising: 1300,
    roi: 1.7,
  },
  {
    name: "Week 4",
    sales: 7200,
    expenses: 4500,
    profit: 2700,
    revenue: 10000,
    advertising: 8000,
    roi: 1.35,
  },
  {
    name: "Week 5",
    sales: 6500,
    expenses: 3700,
    profit: 2800,
    revenue: 9500,
    advertising: 1700,
    roi: 1.65,
  },
  {
    name: "Week 6",
    sales: 7800,
    expenses: 5200,
    profit: 2600,
    revenue: 10800,
    advertising: 2500,
    roi: 1.04,
  },
  {
    name: "Week 7",
    sales: 7200,
    expenses: 4800,
    profit: 2400,
    revenue: 10200,
    advertising: 6000,
    roi: 1.04,
  },
  {
    name: "Week 8",
    sales: 8500,
    expenses: 5500,
    profit: 3000,
    revenue: 11500,
    advertising: 2700,
    roi: 1.11,
  },
  {
    name: "Week 9",
    sales: 8000,
    expenses: 4900,
    profit: 3100,
    revenue: 11000,
    advertising: 2500,
    roi: 1.24,
  },
  {
    name: "Week 10",
    sales: 9000,
    expenses: 5200,
    profit: 3800,
    revenue: 12500,
    advertising: 2900,
    roi: 1.31,
  },
];

const SimpleLineCharts = () => {
  return (
    <div className="container mt-5">
      <h3 className="text-center mb-4">Weekly Business Metrics</h3>
      <div
        className="chart-container"
        style={{ width: "100%", height: "400px" }}
      >
        <ResponsiveContainer>
          <LineChart
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="sales"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="expenses" stroke="#82ca9d" />
            <Line type="monotone" dataKey="profit" stroke="#ffc658" />
            <Line type="monotone" dataKey="revenue" stroke="#ff7300" />
            <Line type="monotone" dataKey="advertising" stroke="#387908" />
            <Line type="monotone" dataKey="roi" stroke="#FF1493" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SimpleLineCharts;
