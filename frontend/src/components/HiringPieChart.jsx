import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from "recharts";

const COLORS = ["#06B6D4", "#A855F7"];

function HiringPieChart({ pieData }) {
  return (
    <div className="bg-slate-900 rounded-3xl shadow-xl p-5 sm:p-6 mt-8">

      <h2 className="text-xl sm:text-2xl font-bold text-cyan-400 mb-6">
        Hiring Probability Overview
      </h2>

      <div className="w-full h-[320px] sm:h-[420px]">

        <ResponsiveContainer width="100%" height="100%">

          <PieChart>

            <Pie
              data={pieData}
              dataKey="value"
              nameKey="name"
              outerRadius={120}
              label
            >
              {pieData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>

            <Tooltip />

            <Legend />

          </PieChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}

export default HiringPieChart;