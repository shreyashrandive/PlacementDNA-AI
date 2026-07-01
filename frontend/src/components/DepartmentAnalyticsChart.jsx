import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";

function DepartmentAnalyticsChart({ departmentData }) {

    

  return (

    <div className="mt-10 bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl shadow-2xl p-8 border border-slate-700">

      <div className="mb-8">

        <h2 className="text-3xl font-bold text-white">
          🏢 Department-wise Placement Analytics
        </h2>

        <p className="text-slate-400 mt-2">
          Placement rate comparison across departments
        </p>

      </div>

      <ResponsiveContainer
        width="100%"
        height={350}
      >

        <BarChart
          data={departmentData}
          layout="vertical"
          margin={{
            top: 20,
            right: 30,
            left: 40,
            bottom: 5
          }}
        >

          <CartesianGrid
            strokeDasharray="4 4"
            stroke="#334155"
          />

          <XAxis
            type="number"
            domain={[0, 100]}
            tick={{ fill: "#CBD5E1" }}
          />

          <YAxis
            type="category"
            dataKey="department"
            tick={{ fill: "#CBD5E1" }}
            width={80}
          />

          <Tooltip
            formatter={(value) => [`${value}%`, "Placement Rate"]}
            contentStyle={{
              backgroundColor: "#0F172A",
              border: "1px solid #334155",
              borderRadius: "12px",
              color: "#FFFFFF"
            }}
          />

          <Bar
            dataKey="placement_rate"
            fill="#8B5CF6"
            radius={[0, 10, 10, 0]}
          />

        </BarChart>

      </ResponsiveContainer>

    </div>

  );

}

export default DepartmentAnalyticsChart;