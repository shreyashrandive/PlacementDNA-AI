import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";

function PlacementChart({ chartData }) {
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
          📈 Placement Performance Analytics
        </h2>

        <p className="text-slate-400 mt-2">
          Real-time student placement score analysis powered by PlacementDNA AI
        </p>

      </div>

      <ResponsiveContainer width="100%" height={350}>

        <BarChart
          data={chartData}
          margin={{
            top: 20,
            right: 30,
            left: 10,
            bottom: 5
          }}
        >

          <CartesianGrid
            strokeDasharray="4 4"
            stroke="#334155"
          />

          <XAxis
            dataKey="name"
            tick={{ fill: "#CBD5E1", fontSize: 12 }}
            axisLine={false}
            tickLine={false}
          />

          <YAxis
            tick={{ fill: "#CBD5E1", fontSize: 12 }}
            axisLine={false}
            tickLine={false}
          />

          <Tooltip
            contentStyle={{
              backgroundColor: "#0F172A",
              border: "1px solid #334155",
              borderRadius: "12px",
              color: "#FFFFFF"
            }}
          />

          <Bar
            dataKey="placement_score"
            fill="#22D3EE"
            radius={[12, 12, 0, 0]}
          />

        </BarChart>

      </ResponsiveContainer>

    </div>

  );
}

export default PlacementChart;