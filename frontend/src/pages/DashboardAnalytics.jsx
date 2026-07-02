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
      .then((data) => setStats(data));

    fetch("http://127.0.0.1:8000/dashboard/chart")
      .then((res) => res.json())
      .then((data) => setChartData(data));

    fetch("http://127.0.0.1:8000/dashboard/placement-trend")
      .then((res) => res.json())
      .then((data) => setTrendData(data));  

    fetch("http://127.0.0.1:8000/dashboard/department-analytics")
      .then((res) => res.json())
      .then((data) => setDepartmentData(data));

    fetch("http://127.0.0.1:8000/dashboard/top-students")
      .then((res) => res.json())
      .then((data) => setTopStudents(data));
      

    fetch("http://127.0.0.1:8000/dashboard/hiring-pie")
      .then((res) => res.json())
      .then((data) => setPieData(data));

    fetch("http://127.0.0.1:8000/dashboard/director-insights")
      .then((res) => res.json())
      .then((data) => setInsights(data));

    fetch("http://127.0.0.1:8000/dashboard/ai-recommendations")
      .then((res) => res.json())
      .then((data) => setAiRecommendation(data));

  }, []);

  return (

    <div className="min-h-screen bg-slate-950 p-8">

      <div className="flex flex-col md:flex-row justify-between items-center mb-8">

  <h1 className="text-4xl font-bold text-cyan-400">
    PlacementDNA Analytics Dashboard
  </h1>

 <div className="mt-4 md:mt-0 flex gap-3">

  <ExportPDFButton
    stats={stats}
    topStudents={topStudents}
  />

  <ExportExcelButton
    stats={stats}
    topStudents={topStudents}
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

      <KPICards stats={stats} />

      <PlacementChart chartData={chartData} />

      <PlacementTrendChart trendData={trendData} />

      <DepartmentAnalyticsChart departmentData={departmentData} />

      <HiringPieChart pieData={pieData} />

      <DirectorInsights insights={insights} />

      <AIAssistant aiRecommendation={aiRecommendation} />

     <TopStudentsLeaderboard
        topStudents={filteredStudents}
     />

    </div>

  );

}

export default DashboardAnalytics;