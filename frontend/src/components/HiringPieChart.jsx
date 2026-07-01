import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend
} from "recharts";

function HiringPieChart({ pieData }) {

  return (

    <div
      className="
        mt-10
        bg-gradient-to-br
        from-slate-900
        to-slate-800
        rounded-3xl
        shadow-2xl
        p-8
        border
        border-slate-700
      "
    >

      <div className="mb-8">

        <h2 className="text-3xl font-bold text-white">
          🥧 Hiring Probability Overview
        </h2>

        <p className="text-slate-400 mt-2">
          Placement readiness distribution of all students
        </p>

      </div>

      <ResponsiveContainer
        width="100%"
        height={350}
      >

        <PieChart>

          <Pie
            data={pieData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={120}
            label
          >

            <Cell fill="#22C55E" />
            <Cell fill="#EF4444" />

          </Pie>

          <Tooltip
            contentStyle={{
              backgroundColor: "#0F172A",
              border: "1px solid #334155",
              borderRadius: "12px",
              color: "#FFFFFF"
            }}
          />

          <Legend />

        </PieChart>

      </ResponsiveContainer>

    </div>

  );

}

export default HiringPieChart;