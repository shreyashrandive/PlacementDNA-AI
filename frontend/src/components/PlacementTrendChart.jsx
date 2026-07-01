import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";

function PlacementTrendChart({ trendData }) {

  return (

    <div className="mt-10 bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl shadow-2xl p-8 border border-slate-700">

      <div className="mb-8">

        <h2 className="text-3xl font-bold text-white">
          📈 Placement Trend Analysis
        </h2>

        <p className="text-slate-400 mt-2">
          Monthly placement performance trend
        </p>

      </div>

      <ResponsiveContainer
        width="100%"
        height={350}
      >

        <LineChart
          data={trendData}
        >

          <CartesianGrid
            strokeDasharray="4 4"
            stroke="#334155"
          />

          <XAxis
            dataKey="month"
            tick={{ fill: "#CBD5E1" }}
          />

          <YAxis
            tick={{ fill: "#CBD5E1" }}
          />

          <Tooltip
            contentStyle={{
              backgroundColor: "#0F172A",
              border: "1px solid #334155",
              borderRadius: "12px",
              color: "#FFFFFF"
            }}
          />

          <Line
            type="monotone"
            dataKey="score"
            stroke="#22D3EE"
            strokeWidth={4}
            dot={{ r: 6 }}
            activeDot={{ r: 9 }}
          />

        </LineChart>

      </ResponsiveContainer>

    </div>

  );

}

export default PlacementTrendChart;