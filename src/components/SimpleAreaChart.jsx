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

// Simulated static weather forecast data
const staticWeatherData = [
  { time: "06:00", temperature: 18, humidity: 80 },
  { time: "09:00", temperature: 22, humidity: 70 },
  { time: "12:00", temperature: 26, humidity: 60 },
  { time: "15:00", temperature: 28, humidity: 55 },
  { time: "18:00", temperature: 25, humidity: 65 },
  { time: "21:00", temperature: 21, humidity: 75 },
  { time: "00:00", temperature: 19, humidity: 85 },
  { time: "03:00", temperature: 17, humidity: 90 },
  { time: "06:00 (Next Day)", temperature: 18, humidity: 82 },
  { time: "09:00 (Next Day)", temperature: 23, humidity: 68 },
];

// Custom Tooltip for better info display
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div
        className="custom-tooltip"
        style={{
          backgroundColor: "#fff",
          border: "1px solid #ccc",
          padding: "10px",
        }}
      >
        <p className="label">{`Time: ${label}`}</p>
        <p style={{ color: "#8884d8" }}>{`Temperature: ${payload[0].value}°C`}</p>
        <p style={{ color: "#82ca9d" }}>{`Humidity: ${payload[1].value}%`}</p>
      </div>
    );
  }
  return null;
};

export default function SimpleAreaChart() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12 text-center">
          <h3 className="mb-4 fw-bold text-secondary">
            24-Hour Weather Forecast for Pune
          </h3>
          <p className="text-muted">Static data representing temperature and humidity trends</p>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-12 col-md-12 col-lg-10">
          <div className="chart-container border rounded shadow p-5 bg-white">
            <ResponsiveContainer width="100%" height={450}>
              <AreaChart
                data={staticWeatherData}
                margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#d0d0d0" />
                <XAxis dataKey="time" tick={{ fontSize: 14 }} />
                <YAxis
                  tick={{ fontSize: 14 }}
                  label={{
                    value: "°C / %",
                    angle: -90,
                    position: "insideLeft",
                    offset: -5,
                    style: { textAnchor: "middle", fontSize: 12 },
                  }}
                />
                <Tooltip content={<CustomTooltip />} />
                <Legend verticalAlign="top" height={36} />
                <Area
                  type="monotone"
                  dataKey="temperature"
                  stroke="#8884d8"
                  fill="rgba(136, 132, 216, 0.3)"
                  name="Temperature (°C)"
                />
                <Area
                  type="monotone"
                  dataKey="humidity"
                  stroke="#82ca9d"
                  fill="rgba(130, 202, 157, 0.3)"
                  name="Humidity (%)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
