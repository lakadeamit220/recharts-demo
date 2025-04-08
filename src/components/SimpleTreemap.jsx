import React from "react";
import { Treemap, ResponsiveContainer, Tooltip } from "recharts";

// Amit's Comprehensive Monthly Salary Distribution
const data = [
  { name: "Basic Pay", value: 50000, fill: "#d0f4f4" },
  { name: "House Rent Allowance", value: 20000, fill: "#a6e7e7" },
  { name: "Medical Allowance", value: 10000, fill: "#7ddada" },
  { name: "Travel Allowance", value: 8000, fill: "#54cdcd" },
  { name: "Food Allowance", value: 5000, fill: "#2bc0c0" },
  { name: "Bonus", value: 15000, fill: "#b2f1f1" },
  { name: "Provident Fund", value: 12000, fill: "#89e4e4" },
  { name: "Insurance", value: 7000, fill: "#61d7d7" },
  { name: "Performance Incentive", value: 17000, fill: "#38cacb" },
  { name: "Leave Travel Concession", value: 6000, fill: "#0fbebe" },
  { name: "Special Allowance", value: 8000, fill: "#95ecec" },
  { name: "Other Benefits", value: 15000, fill: "#6cdedf" },
];

export default function SimpleTreemap() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <div className="col-12">
          <h3 className="fw-bold text-secondary mb-3">
            Amit's Salary Distribution: Cyan-Teal Combination
          </h3>
          <p className="text-muted">
            This treemap visualizes Amit's monthly salary distribution with a cyan-teal color palette.
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
                content={({ root, depth, x, y, width, height, index, name }) => {
                  const color = data[index]?.fill || "#ccc";
                  return (
                    <g>
                      <rect
                        x={x}
                        y={y}
                        width={width}
                        height={height}
                        fill={color}
                        stroke="#fff"
                      />
                      {depth === 1 && (
                        <text
                          x={x + width / 2}
                          y={y + height / 2}
                          textAnchor="middle"
                          fill="#000"
                          fontSize="12"
                          fontWeight="bold"
                        >
                          {name}
                        </text>
                      )}
                    </g>
                  );
                }}
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
