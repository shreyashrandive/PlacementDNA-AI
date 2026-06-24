import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

function Dashboard() {
    const chartData = [
  { month: "Jan", score: 55 },
  { month: "Feb", score: 62 },
  { month: "Mar", score: 68 },
  { month: "Apr", score: 74 },
  { month: "May", score: 81 },
  { month: "Jun", score: 92 },
];
const [student, setStudent] = useState(null);

useEffect(() => {
  fetch("http://127.0.0.1:8000/student")
    .then((response) => response.json())
    .then((data) => {
      setStudent(data);
    })
    .catch((error) => {
      console.error(error);
    });
}, []);
    
return ( <div className="min-h-screen bg-slate-950 flex">

```
  {/* Sidebar */}

  <div className="w-72 bg-slate-900 border-r border-slate-800 p-6">

    <div className="flex items-center gap-3 mb-10">

      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center">
        <span className="text-white text-xl">
          🧬
        </span>
      </div>

      <div>
        <h1 className="text-cyan-400 font-bold text-lg">
          PlacementDNA AI
        </h1>

        <p className="text-slate-500 text-sm">
          Student Portal
        </p>
      </div>

    </div>

    <nav className="space-y-3">

      <button className="w-full text-left bg-cyan-500/10 text-cyan-400 p-3 rounded-xl">
        Dashboard
      </button>

      <button className="w-full text-left text-slate-300 p-3 rounded-xl hover:bg-slate-800">
        Predictions
      </button>

      <button className="w-full text-left text-slate-300 p-3 rounded-xl hover:bg-slate-800">
        Skills
      </button>

      <button className="w-full text-left text-slate-300 p-3 rounded-xl hover:bg-slate-800">
        Resume
      </button>

      <button className="w-full text-left text-slate-300 p-3 rounded-xl hover:bg-slate-800">
        Settings
      </button>

    </nav>

  </div>

  {/* Main Content */}

  <div className="flex-1 p-8">

  {/* Top Navbar */}

  <div className="flex items-center justify-between mb-8">

    <div>

      <h1 className="text-4xl font-bold text-white">
        Dashboard
      </h1>

      <p className="text-slate-400 mt-2">
        Welcome back, Shreyash 👋
      </p>
     {student && (
  <p className="text-cyan-400 mt-2">
    Backend Connected: {student.name}
  </p>
)}

    </div>

    <div className="flex items-center gap-4">

      <button className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-xl">
        🔔
      </button>

      <div className="flex items-center gap-3 bg-slate-900 border border-slate-800 px-4 py-2 rounded-xl">

        <div className="w-10 h-10 rounded-full bg-cyan-500 flex items-center justify-center font-bold text-slate-950">
          S
        </div>

        <div>
          <p className="text-white text-sm font-medium">
            Shreyash
          </p>

          <p className="text-slate-400 text-xs">
            Student
          </p>
        </div>

      </div>

    </div>

  </div>

   
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-8">

  <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">

  <p className="text-slate-400 text-sm">
    Placement Score
  </p>

  <div className="mt-4 flex items-center justify-center">

    <div className="w-24 h-24 rounded-full border-8 border-cyan-400 flex items-center justify-center">

      <span className="text-2xl font-bold text-cyan-400">
  {student ? student.placement_score : "--"}
</span>

    </div>

  </div>

  <p className="text-center text-green-400 mt-4 font-medium">
    Excellent
  </p>

</div>

  <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
    <p className="text-slate-400 text-sm">
      Career Match %
    </p>

    <h2 className="text-4xl font-bold text-green-400 mt-2">
      {student ? `${student.career_match}%` : "--"}
    </h2>
  </div>

  <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
    <p className="text-slate-400 text-sm">
      Skill Readiness
    </p>

    <h2 className="text-4xl font-bold text-yellow-400 mt-2">
      {student ? `${student.skill_readiness}%` : "--"}
    </h2>
  </div>

  <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
    <p className="text-slate-400 text-sm">
      Hiring Probability
    </p>

    <h2 className="text-4xl font-bold text-purple-400 mt-2">
      {student ? `${student.hiring_probability}%` : "--"}
    </h2>
  </div>

</div>
<div className="mt-8 bg-slate-900 border border-slate-800 rounded-2xl p-8">

  <h2 className="text-2xl font-bold text-white mb-4">
    AI Placement Prediction
  </h2>

  <p className="text-slate-400 mb-6">
    Based on academic performance, technical skills, projects,
    certifications, communication ability, and interview readiness.
  </p>

  <div className="flex items-center justify-between">

    <div>
      <p className="text-slate-400 text-sm">
        Predicted Placement Chance
      </p>

      <h3 className="text-6xl font-bold text-cyan-400 mt-2">
        76%
      </h3>
    </div>

    <div className="text-right">

      <p className="text-green-400 font-semibold">
        High Probability
      </p>

      <p className="text-slate-400 text-sm mt-2">
        Continue improving aptitude and DSA skills
      </p>

    </div>

  </div>

</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">

  {/* Missing Skills */}

  <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">

    <h3 className="text-xl font-bold text-red-400 mb-4">
      Missing Skills
    </h3>

    <div className="space-y-3">

      <div className="bg-red-500/10 text-red-300 px-4 py-2 rounded-lg">
        Data Structures & Algorithms
      </div>

      <div className="bg-red-500/10 text-red-300 px-4 py-2 rounded-lg">
        System Design
      </div>

      <div className="bg-red-500/10 text-red-300 px-4 py-2 rounded-lg">
        Aptitude Practice
      </div>

    </div>

  </div>

  {/* Strong Skills */}

  <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">

    <h3 className="text-xl font-bold text-green-400 mb-4">
      Strong Skills
    </h3>

    <div className="space-y-3">

      <div className="bg-green-500/10 text-green-300 px-4 py-2 rounded-lg">
        HTML & CSS
      </div>

      <div className="bg-green-500/10 text-green-300 px-4 py-2 rounded-lg">
        JavaScript
      </div>

      <div className="bg-green-500/10 text-green-300 px-4 py-2 rounded-lg">
        Python
      </div>

    </div>

  </div>

  {/* Recommendations */}

  <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">

    <h3 className="text-xl font-bold text-cyan-400 mb-4">
      AI Recommendations
    </h3>

    <div className="space-y-3">

      <div className="bg-cyan-500/10 text-cyan-300 px-4 py-2 rounded-lg">
        Complete DSA Roadmap
      </div>

      <div className="bg-cyan-500/10 text-cyan-300 px-4 py-2 rounded-lg">
        Build 2 Full Stack Projects
      </div>

      <div className="bg-cyan-500/10 text-cyan-300 px-4 py-2 rounded-lg">
        Practice Mock Interviews
      </div>

    </div>

  </div>

</div>
{/* AI Career Growth Roadmap */}

<div className="mt-8 bg-slate-900 border border-slate-800 rounded-2xl p-8">

  <h2 className="text-2xl font-bold text-white mb-6">
    AI Career Growth Roadmap
  </h2>

  <div className="space-y-6">

    <div className="flex items-start gap-4">
      <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white font-bold">
        ✓
      </div>

      <div>
        <h3 className="text-white font-semibold">
          Complete HTML, CSS & JavaScript
        </h3>

        <p className="text-slate-400 text-sm">
          Foundation skills already achieved.
        </p>
      </div>
    </div>

    <div className="flex items-start gap-4">
      <div className="w-10 h-10 rounded-full bg-cyan-500 flex items-center justify-center text-white font-bold">
        2
      </div>

      <div>
        <h3 className="text-white font-semibold">
          Master Data Structures & Algorithms
        </h3>

        <p className="text-slate-400 text-sm">
          Improve coding round performance.
        </p>
      </div>
    </div>

    <div className="flex items-start gap-4">
      <div className="w-10 h-10 rounded-full bg-cyan-500 flex items-center justify-center text-white font-bold">
        3
      </div>

      <div>
        <h3 className="text-white font-semibold">
          Build 2 Full Stack Projects
        </h3>

        <p className="text-slate-400 text-sm">
          Strengthen portfolio and practical experience.
        </p>
      </div>
    </div>

    <div className="flex items-start gap-4">
      <div className="w-10 h-10 rounded-full bg-cyan-500 flex items-center justify-center text-white font-bold">
        4
      </div>

      <div>
        <h3 className="text-white font-semibold">
          Practice Mock Interviews
        </h3>

        <p className="text-slate-400 text-sm">
          Improve confidence and communication skills.
        </p>
      </div>
    </div>

  </div>

</div>
{/* AI Insights */}

<div className="mt-8 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl p-8">

  <h2 className="text-2xl font-bold text-cyan-400 mb-4">
    AI Insights
  </h2>

  <div className="space-y-4">

    <div className="bg-slate-900/50 rounded-xl p-4">
      <p className="text-white">
        📈 Your placement probability has increased by
        <span className="text-green-400 font-bold"> 12% </span>
        in the last 30 days.
      </p>
    </div>

    <div className="bg-slate-900/50 rounded-xl p-4">
      <p className="text-white">
        🚀 Completing Data Structures & Algorithms could increase your placement score by approximately
        <span className="text-cyan-400 font-bold"> 15 points</span>.
      </p>
    </div>

    <div className="bg-slate-900/50 rounded-xl p-4">
      <p className="text-white">
        🎯 Based on your profile, Full Stack Developer and Software Engineer roles show the highest success probability.
      </p>
    </div>

  </div>

</div>
{/* Analytics Section */}

<div className="mt-8 bg-slate-900 border border-slate-800 rounded-2xl p-8">

  <h2 className="text-2xl font-bold text-white mb-6">
    Placement Analytics
  </h2>

  <div className="h-80">

  <LineChart
    width={800}
    height={300}
    data={chartData}
  >
    <CartesianGrid
      strokeDasharray="3 3"
      stroke="#334155"
    />

    <XAxis
      dataKey="month"
      stroke="#94A3B8"
    />

    <YAxis
      stroke="#94A3B8"
    />

    <Tooltip />

    <Line
      type="monotone"
      dataKey="score"
      stroke="#22D3EE"
      strokeWidth={3}
    />

  </LineChart>

</div>
</div>

  </div>

</div>


);
}

export default Dashboard;
