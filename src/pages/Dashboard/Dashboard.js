import React from "react";
import useChart from "../../hooks/useChart";
import "./Dashboard.css";
import {
  Area,
  AreaChart,
  Bar,
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Dashboard = () => {
  const [charts, setCharts] = useChart();
  console.log(charts);

  return (
    <div className="chart_container">
      <div className="linechart_container">
        <LineChart
          width={730}
          height={250}
          data={charts}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <Tooltip></Tooltip>
          {/* <Legend /> */}
          <Line type={"monotone"} dataKey={"investment"}></Line>
          <Line type={"monotone"} dataKey={"month"} stroke="#8884d8"></Line>
          <Line type={"monotone"} dataKey={"revenue"} stroke="#82ca9d"></Line>
          <Line type={"monotone"} dataKey={"sell"}></Line>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={"month"}></XAxis>
          <YAxis></YAxis>
        </LineChart>
      </div>
      <div className="composedchart_container">
        <ComposedChart width={730} height={250} data={charts}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid stroke="#f5f5f5" />
          <Area
            type="monotone"
            dataKey="investment"
            fill="#8884d8"
            stroke="#8884d8"
          />
          <Bar dataKey="revenue" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="sell" stroke="#ff7300" />
        </ComposedChart>
      </div>
      <div className="area_chart">
        <AreaChart
          width={730}
          height={250}
          data={charts}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="month" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="revenue"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#colorUv)"
          />
          <Area
            type="monotone"
            dataKey="sell"
            stroke="#82ca9d"
            fillOpacity={1}
            fill="url(#colorPv)"
          />
          <Area
            type="monotone"
            dataKey="investment"
            stroke="#82ca9d"
            fillOpacity={1}
            fill="url(#colorPv)"
          />
        </AreaChart>
      </div>
    </div>
  );
};

export default Dashboard;
