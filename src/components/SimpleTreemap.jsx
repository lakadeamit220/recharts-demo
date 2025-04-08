import React from "react";
import { Treemap, ResponsiveContainer, Tooltip } from "recharts";

// Amit's Detailed Monthly Salary Distribution
const data = [
  { name: "Basic Pay", value: 50000, fill: "#f7cac9" },
  { name: "House Rent Allowance", value: 20000, fill: "#f8e9a1" },
  { name: "Medical Allowance", value: 8000, fill: "#d5e8d4" },
  { name: "Travel Allowance", value: 5000, fill: "#a7d8de" },
  { name: "Food Allowance", value: 4000, fill: "#fad9c1" },
  { name: "Bonus", value: 15000, fill: "#f4c7c3" },
  { name: "Provident Fund", value: 10000, fill: "#d9d2e9" },
  { name: "Insurance", value: 7000, fill: "#f9cb9c" },
  { name: "Other Benefits", value: 12000, fill: "#c3e6f7" },
];

export default function EnhancedTreemap() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <div className="col-12">
          <h3 className="fw-bold text-secondary mb-3">
            Amit's Detailed Monthly Salary Distribution
          </h3>
          <p className="text-muted">
            A treemap showing the breakdown of Amit's monthly salary into various components.
          </p>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-12 col-md-12 col-lg-8">
          <div className="chart-container border rounded shadow p-5 bg-white">
            <ResponsiveContainer width="100%" height={500}>
              <Treemap
                data={data}
                dataKey="value"
                aspectRatio={4 / 3}
                stroke="#fff"
                fill="#8884d8"
              >
                <Tooltip formatter={(value, name) => [`₹${value}`, name]} />
              </Treemap>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
