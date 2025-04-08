import React from "react";
import {
  PieChart,
  Pie,
  Tooltip,
  ResponsiveContainer,
  Legend,
  Cell,
} from "recharts";

// Employee Data
const departmentData = [
  { name: "Engineering", value: 40 },
  { name: "HR", value: 10 },
  { name: "Finance", value: 15 },
  { name: "Marketing", value: 20 },
  { name: "Sales", value: 15 },
];

const roleData = [
  { name: "Junior", value: 35 },
  { name: "Mid-Level", value: 40 },
  { name: "Senior", value: 25 },
];

// Colors
const departmentColors = ["#8884d8", "#82ca9d", "#ffc658", "#d0ed57", "#a4de6c"];
const roleColors = ["#8dd1e1", "#83a6ed", "#8a75c9"];

export default function TwoLevelPieChart() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <div className="col-12">
          <h3 className="fw-bold text-secondary mb-3">
            Employee Distribution by Department and Role
          </h3>
          <p className="text-muted">
            A two-level pie chart showing the distribution of employees across departments and roles.
          </p>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-12 col-md-12 col-lg-8">
          <div className="chart-container border rounded shadow p-5 bg-white">
            <ResponsiveContainer width="100%" height={500}>
              <PieChart>
                {/* Outer Pie: Departments */}
                <Pie
                  data={departmentData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  fill="#8884d8"
                  label={({ name, percent }) =>
                    `${name}: ${(percent * 100).toFixed(0)}%`
                  }
                  labelLine={false}
                  labelStyle={{
                    fontSize: "14px",
                    fontWeight: "bold",
                  }}
                >
                  {departmentData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={departmentColors[index]} />
                  ))}
                </Pie>

                {/* Inner Pie: Roles */}
                <Pie
                  data={roleData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  innerRadius={110}
                  outerRadius={140}
                  fill="#82ca9d"
                  label={({ name, percent }) =>
                    `${name}: ${(percent * 100).toFixed(0)}%`
                  }
                  labelLine={false}
                  labelStyle={{
                    fontSize: "14px",
                    fontWeight: "bold",
                  }}
                >
                  {roleData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={roleColors[index]} />
                  ))}
                </Pie>

                {/* Tooltip and Legend */}
                <Tooltip />
                <Legend
                  layout="horizontal"
                  align="center"
                  verticalAlign="bottom"
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
