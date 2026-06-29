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
const [aiRecommendation, setAiRecommendation] = useState({
  overall_status: "",
  total_students: 0,
  placement_ready: 0,
  needs_attention: 0,
  top_student: "",
  top_score: 0,
  avg_score: 0
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

  fetch("http://127.0.0.1:8000/dashboard/ai-recommendations")
  .then((response) => response.json())
  .then((data) => {
    setAiRecommendation(data);
  });

}, []);
console.log("Director Insights:", insights);
console.log("AI Recommendation:", aiRecommendation);

  return (
    <div className="min-h-screen bg-slate-950 p-8">

      <h1 className="text-4xl font-bold text-cyan-400 mb-8">
        PlacementDNA Analytics Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        <div className="
bg-gradient-to-br
from-cyan-600
to-blue-700
p-6
rounded-3xl
shadow-2xl
hover:scale-105
transition-all
duration-300
cursor-pointer
">

<div className="flex justify-between items-center">

<div>

<p className="text-white text-sm uppercase tracking-widest">
Total Students
</p>

<h2 className="text-5xl font-bold text-white mt-3">
{stats.total_students}
</h2>

</div>

<div className="text-6xl">
🎓
</div>

</div>

</div>

        <div className="
bg-gradient-to-br
from-green-600
to-emerald-700
p-6
rounded-3xl
shadow-2xl
hover:scale-105
transition-all
duration-300
cursor-pointer
">

<div className="flex justify-between items-center">

<div>

<p className="text-white text-sm uppercase tracking-widest">
Average Score
</p>

<h2 className="text-5xl font-bold text-white mt-3">
{stats.avg_score}%
</h2>

</div>

<div className="text-6xl">
📊
</div>

</div>

</div>

        <div className="
bg-gradient-to-br
from-amber-500
to-orange-600
p-6
rounded-3xl
shadow-2xl
hover:scale-105
transition-all
duration-300
cursor-pointer
">

<div className="flex justify-between items-center">

<div>

<p className="text-white text-sm uppercase tracking-widest">
Hiring Probability
</p>

<h2 className="text-5xl font-bold text-white mt-3">
{stats.avg_hiring}%
</h2>

</div>

<div className="text-6xl">
🎯
</div>

</div>

</div>

       <div className="
bg-gradient-to-br
from-purple-600
to-fuchsia-700
p-6
rounded-3xl
shadow-2xl
hover:scale-105
transition-all
duration-300
cursor-pointer
">

<div className="flex justify-between items-center">

<div>

<p className="text-white text-sm uppercase tracking-widest">
Placement Ready
</p>

<h2 className="text-5xl font-bold text-white mt-3">
{stats.placement_ready}
</h2>

</div>

<div className="text-6xl">
🚀
</div>

</div>

</div>

            </div>
            

      {/* Placement Score Analytics */}

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

        <ResponsiveContainer
          width="100%"
          height={350}
        >

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
    color: "#fff"
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
      {/* AI Placement Assistant */}

<div className="mt-10 bg-gradient-to-br from-indigo-900 to-slate-900 rounded-3xl p-8 shadow-2xl border border-indigo-700">

  <h2 className="text-3xl font-bold text-white mb-6">
    🤖 AI Placement Assistant
  </h2>

  <div className="space-y-4 text-white">

    <div className="flex justify-between">
      <span className="text-slate-300">Overall Status</span>
      <span className="font-bold text-green-400">
        {aiRecommendation.overall_status}
      </span>
    </div>

    <div className="flex justify-between">
      <span className="text-slate-300">Total Students</span>
      <span className="font-bold">
        {aiRecommendation.total_students}
      </span>
    </div>

    <div className="flex justify-between">
      <span className="text-slate-300">Placement Ready</span>
      <span className="font-bold text-cyan-400">
        {aiRecommendation.placement_ready}
      </span>
    </div>

    <div className="flex justify-between">
      <span className="text-slate-300">Average Score</span>
      <span className="font-bold text-yellow-400">
        {aiRecommendation.avg_score}%
      </span>
    </div>

    <div className="flex justify-between">
      <span className="text-slate-300">Top Performer</span>
      <span className="font-bold text-purple-300">
        {aiRecommendation.top_student}
      </span>
    </div>

    <div className="flex justify-between">
      <span className="text-slate-300">Top Score</span>
      <span className="font-bold text-green-400">
        {aiRecommendation.top_score}%
      </span>
    </div>

  </div>

  <div className="mt-8 bg-slate-800 rounded-xl p-5 border border-slate-700">

    <h3 className="text-xl font-semibold text-cyan-400 mb-3">
      💡 AI Recommendation
    </h3>

    <p className="text-slate-300 leading-7">
      Overall placement performance is
      <span className="font-bold text-green-400">
        {" "}{aiRecommendation.overall_status}
      </span>.
      Continue focusing on skill development and interview preparation to maintain strong placement outcomes.
    </p>

  </div>

</div>

    </div>
  );
}

export default DashboardAnalytics;