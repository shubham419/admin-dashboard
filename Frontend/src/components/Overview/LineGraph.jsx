import {
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
  Legend,
  // Stop,
  // LinearGradient
} from "recharts";

function LineGraph() {
  // Sample data
  const data = [
    { name: "Jan", captains: 100, users: 50 },
    { name: "Feb", captains: 120, users: 45 },
    { name: "Mar", captains: 150, users: 155 },
    { name: "Apr", captains: 200, users: 60 },
    { name: "May", captains: 180, users: 110 },
    { name: "Jun", captains: 120, users: 180 },
    { name: "Jul", captains: 200, users: 90 },
    { name: "Aug", captains: 270, users: 195 },
    { name: "Sep", captains: 120, users: 100 },
    { name: "Oct", captains: 320, users: 110 },
    { name: "Nov", captains: 150, users: 120 },
    { name: "Dec", captains: 180, users: 130 },
  ];

  return (
    <div>
      {/* <ResponsiveContainer  width={700} height="80%"> */}
      <AreaChart
        width={1300}
        height={250}
        data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
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
        <XAxis dataKey="name" />
        <YAxis />
        {/* <CartesianGrid strokeDasharray="3 3" /> */}
        <Tooltip />
        <Legend verticalAlign="top" height={36}/>

        <Area
          type="monotone"
          dataKey="captains"
          stroke="#8884d8"
          fillOpacity={1}
          fill="url(#colorUv)"
        />
        <Area
          type="monotone"
          dataKey="users"
          stroke="#82ca9d"
          fillOpacity={1}
          fill="url(#colorPv)"
        />
      </AreaChart>
      {/* </ResponsiveContainer> */}
    </div>
  );
}

export default LineGraph;
