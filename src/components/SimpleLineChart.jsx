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
  ReferenceLine,
} from "recharts";


const data = [
  { name: "Week 1", sales: 5000, expenses: 3200, profit: 1800, revenue: 6800, advertising: 1000, roi: 1.2 },
  { name: "Week 2", sales: 6200, expenses: 3500, profit: 2700, revenue: 9700, advertising: 1500, roi: 1.8 },
  { name: "Week 3", sales: 7000, expenses: 4000, profit: 3000, revenue: 11000, advertising: 2000, roi: 1.5 },
  { name: "Week 4", sales: 8000, expenses: 4500, profit: 3500, revenue: 12500, advertising: 2500, roi: 1.4 },
  { name: "Week 5", sales: 8500, expenses: 5000, profit: 3500, revenue: 13000, advertising: 3000, roi: 1.1 },
  { name: "Week 6", sales: 9000, expenses: 4800, profit: 4200, revenue: 13800, advertising: 3500, roi: 1.2 },
  { name: "Week 7", sales: 9500, expenses: 5200, profit: 4300, revenue: 14200, advertising: 4000, roi: 1.3 },
  { name: "Week 8", sales: 8900, expenses: 5000, profit: 3900, revenue: 13900, advertising: 4500, roi: 1.1 },
  { name: "Week 9", sales: 9100, expenses: 5100, profit: 4000, revenue: 14100, advertising: 4700, roi: 1.15 },
  { name: "Week 10", sales: 9200, expenses: 5300, profit: 3900, revenue: 14200, advertising: 4800, roi: 1.2 },
];

const SimpleLineChart = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12 text-center">
          <h3 className="mb-4 fw-bold text-secondary">Weekly Business Metrics</h3>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-12 col-md-12 col-lg-10">
          <div className="chart-container border rounded shadow p-5 bg-white">
            <ResponsiveContainer width="100%" height={450}>
              <LineChart
                data={data}
                margin={{ top: 20, right: 40, left: 40, bottom: 20 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#d0d0d0" />
                <XAxis dataKey="name" tick={{ fontSize: 14 }} />
                <YAxis tick={{ fontSize: 14 }} />
                <Tooltip contentStyle={{ fontSize: "14px" }} />
                <Legend wrapperStyle={{ fontSize: "16px" }} />
                <ReferenceLine x="Week 5" stroke="red" label="Midpoint" />
                <ReferenceLine y={12500} stroke="blue" label="Target Revenue" />
                <Line type="monotone" dataKey="sales" stroke="#8884d8" strokeWidth={3} />
                <Line type="monotone" dataKey="expenses" stroke="#82ca9d" strokeWidth={3} />
                <Line type="monotone" dataKey="profit" stroke="#ffc658" strokeWidth={3} />
                <Line type="monotone" dataKey="revenue" stroke="#ff7300" strokeWidth={3} />
                <Line type="monotone" dataKey="advertising" stroke="#387908" strokeWidth={3} />
                <Line type="monotone" dataKey="roi" stroke="#FF1493" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimpleLineChart;