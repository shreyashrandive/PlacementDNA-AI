import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

function DepartmentAnalyticsChart({ departmentData }) {
  return (
    <div className="bg-slate-900 rounded-3xl shadow-xl p-5 sm:p-6 mt-8">

      <h2 className="text-xl sm:text-2xl font-bold text-cyan-400 mb-6">
        Department Analytics
      </h2>

      <div className="w-full h-[320px] sm:h-[420px]">

        <ResponsiveContainer width="100%" height="100%">

          <BarChart data={departmentData}>

            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#334155"
            />

            <XAxis
              dataKey="department"
              tick={{
                fill: "#CBD5E1",
                fontSize: 12,
              }}
            />

            <YAxis
              tick={{
                fill: "#CBD5E1",
                fontSize: 12,
              }}
            />

            <Tooltip />

            <Bar
              dataKey="avg_score"
              radius={[8, 8, 0, 0]}
            />

          </BarChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}

export default DepartmentAnalyticsChart;