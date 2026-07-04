import { useEffect, useState } from "react";

import KPICards from "../components/KPICards";
import PlacementChart from "../components/PlacementChart";
import PlacementTrendChart from "../components/PlacementTrendChart";
import DepartmentAnalyticsChart from "../components/DepartmentAnalyticsChart";
import TopStudentsLeaderboard from "../components/TopStudentsLeaderboard";
import HiringPieChart from "../components/HiringPieChart";
import DirectorInsights from "../components/DirectorInsights";
import AIAssistant from "../components/AIAssistant";
import ExportPDFButton from "../components/ExportPDFButton";
import ExportExcelButton from "../components/ExportExcelButton";  
import FilterBar from "../components/FilterBar";
import LoadingSkeleton from "../components/LoadingSkeleton";
import { toast } from "react-toastify"; 

function DashboardAnalytics() {

  const [stats, setStats] = useState({
    total_students: 0,
    avg_score: 0,
    avg_hiring: 0,
    placement_ready: 0
  });

  const [chartData, setChartData] = useState([]);

  const [trendData, setTrendData] = useState([]);

  const [departmentData, setDepartmentData] = useState([]);

  const [topStudents, setTopStudents] = useState([]);

  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("All Departments");

  const [status, setStatus] = useState("All Status");

  const [loading, setLoading] = useState(true);

  const filteredStudents = topStudents.filter((student) => {

  

  const matchesSearch =
    student.name.toLowerCase().includes(search.toLowerCase());

  const matchesDepartment =
    department === "All Departments" ||
    student.department === department;

  const matchesStatus =
    status === "All Status" ||
    student.status === status;

  return (
    matchesSearch &&
    matchesDepartment &&
    matchesStatus
  );

});

const filteredChartData = filteredStudents.map((student) => ({

  name: student.name,

  score: student.placement_score

}));

const filteredDepartmentData =
  department === "All Departments"
    ? departmentData
    : departmentData.filter(
        (item) => item.department === department
      );

      const readyStudents = filteredStudents.filter(
  (student) => student.status === "Ready"
).length;

const improvingStudents = filteredStudents.filter(
  (student) => student.status === "Improving"
).length;

const filteredPieData = [
  {
    name: "Ready",
    value: readyStudents,
  },
  {
    name: "Improving",
    value: improvingStudents,
  },
];

const filteredStats = {

  total_students: filteredStudents.length,

  avg_score:
    filteredStudents.length > 0
      ? (
          filteredStudents.reduce(
            (sum, student) =>
              sum + student.placement_score,
            0
          ) / filteredStudents.length
        ).toFixed(1)
      : 0,

  avg_hiring:
    filteredStudents.length > 0
      ? (
          filteredStudents.reduce(
            (sum, student) =>
              sum + student.hiring_probability,
            0
          ) / filteredStudents.length
        ).toFixed(1)
      : 0,

  placement_ready:
    filteredStudents.filter(
      (student) => student.status === "Ready"
    ).length

};

const filteredInsights = {

  total_students: filteredStudents.length,

  placement_ready: filteredStudents.filter(
    (student) => student.status === "Ready"
  ).length,

  needs_attention: filteredStudents.filter(
    (student) => student.status !== "Ready"
  ).length,

  avg_score: filteredStats.avg_score,

  top_student:
    filteredStudents.length > 0
      ? filteredStudents.reduce((best, current) =>
          current.placement_score > best.placement_score
            ? current
            : best
        ).name
      : "-",

  top_score:
    filteredStudents.length > 0
      ? filteredStudents.reduce((best, current) =>
          current.placement_score > best.placement_score
            ? current
            : best
        ).placement_score
      : 0

};

const filteredAIRecommendation = {

  overall_status:
    filteredStats.avg_score >= 80
      ? "Excellent"
      : filteredStats.avg_score >= 60
      ? "Good"
      : "Needs Improvement",

  total_students: filteredInsights.total_students,

  placement_ready: filteredInsights.placement_ready,

  needs_attention: filteredInsights.needs_attention,

  avg_score: filteredInsights.avg_score,

  top_student: filteredInsights.top_student,

  top_score: filteredInsights.top_score

};

  const [pieData, setPieData] = useState([]);

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
  .then((res) => res.json())
  .then((data) => setStats(data))
  .catch(() => {
    toast.error("❌ Unable to load Dashboard Statistics");
  });

   fetch("http://127.0.0.1:8000/dashboard/chart")
  .then((res) => res.json())
  .then((data) => setChartData(data))
  .catch(() => {
    toast.error("❌ Failed to load Placement Chart");
  });


  fetch("http://127.0.0.1:8000/dashboard/placement-trend")
  .then((res) => res.json())
  .then((data) => setTrendData(data))
  .catch(() => {
    toast.error("❌ Failed to load Placement Trend");
  });


    fetch("http://127.0.0.1:8000/dashboard/department-analytics")
  .then((res) => res.json())
  .then((data) => setDepartmentData(data))
  .catch(() => {
    toast.error("❌ Failed to load Department Analytics");
  });



   fetch("http://127.0.0.1:8000/dashboard/top-students")
  .then((res) => res.json())
  .then((data) => setTopStudents(data))
  .catch(() => {
    toast.error("❌ Failed to load Top Students");
  });

      

  fetch("http://127.0.0.1:8000/dashboard/hiring-pie")
  .then((res) => res.json())
  .then((data) => setPieData(data))
  .catch(() => {
    toast.error("❌ Failed to load Hiring Probability");
  });


   fetch("http://127.0.0.1:8000/dashboard/director-insights")
  .then((res) => res.json())
  .then((data) => setInsights(data))
  .catch(() => {
    toast.error("❌ Failed to load Director Insights");
  });


    fetch("http://127.0.0.1:8000/dashboard/ai-recommendations")
  .then((res) => res.json())
  .then((data) => setAiRecommendation(data))
  .catch(() => {
    toast.error("❌ Failed to load AI Recommendations");
  });

       setTimeout(() => {
  setLoading(false);
}, 1000);

setTimeout(() => {
  toast.success("🎉 Welcome to PlacementDNA Analytics Dashboard!");
}, 1200);

  }, []);

  if (loading) {
  return (
    <div className="min-h-screen bg-slate-950 px-4 py-6 sm:px-6 lg:px-8">
      <LoadingSkeleton />
    </div>
  );
}

return (

  <div className="min-h-screen bg-slate-950 p-8">

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">

  <div>

    <h1 className="text-3xl sm:text-4xl font-bold text-cyan-400">
      PlacementDNA Analytics Dashboard
    </h1>

    <p className="text-slate-400 mt-2">
      AI Powered Placement Analytics & Decision Dashboard
    </p>

  </div>

  <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">

    <ExportPDFButton
      stats={filteredStats}
      topStudents={filteredStudents}
    />

    <ExportExcelButton
      stats={filteredStats}
      topStudents={filteredStudents}
    />

  </div>

</div>

<FilterBar
  search={search}
  setSearch={setSearch}
  department={department}
  setDepartment={setDepartment}
  status={status}
  setStatus={setStatus}
/>

      <KPICards stats={filteredStats} />

      <div className="space-y-8">

  <PlacementChart chartData={filteredChartData} />

  <DepartmentAnalyticsChart departmentData={filteredDepartmentData} />

  <HiringPieChart pieData={filteredPieData} />

  <DirectorInsights insights={filteredInsights} />

  <AIAssistant aiRecommendation={filteredAIRecommendation} />

  <TopStudentsLeaderboard
    topStudents={filteredStudents}
  />

</div>

    </div>

  );

}

export default DashboardAnalytics;