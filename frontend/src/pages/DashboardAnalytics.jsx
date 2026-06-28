import { useEffect, useState } from "react";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";

function DashboardAnalytics() {
  const [stats, setStats] = useState({
  total_students: 0,
  avg_score: 0,
  avg_hiring: 0,
  placement_ready: 0
});
  const [chartData, setChartData] = useState([]);
  const [insights, setInsights] = useState({
  total_students: 0,
  placement_ready: 0,
  needs_attention: 0,
  avg_score: 0,
  top_student: "",
  top_score: 0
});
useEffect(() => {

  fetch("http://127.0.0.1:8000/dashboard/stats")
    .then((response) => response.json())
    .then((data) => {
      setStats(data);
    });

    fetch("http://127.0.0.1:8000/dashboard/chart")
  .then((response) => response.json())
  .then((data) => {
    setChartData(data);
  });

  fetch("http://127.0.0.1:8000/dashboard/director-insights")
  .then((response) => response.json())
  .then((data) => {
    setInsights(data);
  });

}, []);
console.log("Director Insights:", insights);
  return (
    <div className="min-h-screen bg-slate-950 p-8">

      <h1 className="text-4xl font-bold text-cyan-400 mb-8">
        PlacementDNA Analytics Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        <div className="bg-slate-900 p-6 rounded-2xl shadow-lg">
          <h2 className="text-slate-400 text-sm">
            Total Students
          </h2>

          <p className="text-4xl font-bold text-cyan-400 mt-2">
            {stats.total_students}
          </p>
        </div>

        <div className="bg-slate-900 p-6 rounded-2xl shadow-lg">
          <h2 className="text-slate-400 text-sm">
            Avg Placement Score
          </h2>

          <p className="text-4xl font-bold text-green-400 mt-2">
            {stats.avg_score}%
          </p>
        </div>

        <div className="bg-slate-900 p-6 rounded-2xl shadow-lg">
          <h2 className="text-slate-400 text-sm">
            Avg Hiring Probability
          </h2>

          <p className="text-4xl font-bold text-yellow-400 mt-2">
            {stats.avg_hiring}%
          </p>
        </div>

        <div className="bg-slate-900 p-6 rounded-2xl shadow-lg">
          <h2 className="text-slate-400 text-sm">
            Placement Ready
          </h2>

          <p className="text-4xl font-bold text-purple-400 mt-2">
            {stats.placement_ready}
          </p>
        </div>

            </div>

      {/* Placement Score Analytics */}

      <div className="mt-10 bg-slate-900 p-6 rounded-2xl shadow-lg">

        <h2 className="text-2xl font-bold text-cyan-400 mb-6">
          Placement Score Analytics
        </h2>

        <ResponsiveContainer
          width="100%"
          height={350}
        >

          <BarChart data={chartData}>

            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="name" />

            <YAxis />

            <Tooltip />

            <Bar
              dataKey="placement_score"
              radius={[8, 8, 0, 0]}
            />

          </BarChart>

        </ResponsiveContainer>

           </div>

      {/* Director Insights */}

      <div className="mt-10 bg-slate-900 rounded-2xl p-6 shadow-lg">

        <h2 className="text-2xl font-bold text-cyan-400 mb-6">
          🎯 Director Insights
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div className="bg-green-900 rounded-xl p-5">
            <h3 className="text-lg font-semibold text-green-300">
              ✅ Placement Ready
            </h3>

            <p className="text-3xl font-bold text-white mt-2">
              {insights.placement_ready}
            </p>
          </div>

          <div className="bg-red-900 rounded-xl p-5">
            <h3 className="text-lg font-semibold text-red-300">
              ⚠ Students Needing Attention
            </h3>

            <p className="text-3xl font-bold text-white mt-2">
              {insights.needs_attention}
            </p>
          </div>

          <div className="bg-cyan-900 rounded-xl p-5">
            <h3 className="text-lg font-semibold text-cyan-300">
              📊 Average Placement Score
            </h3>

            <p className="text-3xl font-bold text-white mt-2">
              {insights.avg_score}%
            </p>
          </div>

          <div className="bg-yellow-900 rounded-xl p-5">
            <h3 className="text-lg font-semibold text-yellow-300">
              🏆 Top Performer
            </h3>

            <p className="text-xl font-bold text-white mt-2">
              {insights.top_student}
            </p>

            <p className="text-yellow-300 mt-1">
              Score: {insights.top_score}%
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default DashboardAnalytics;