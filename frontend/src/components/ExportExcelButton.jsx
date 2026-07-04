import * as XLSX from "xlsx";
import { toast } from "react-toastify";

function ExportExcelButton({ stats, topStudents }) {

  const exportExcel = () => {

const workbook = XLSX.utils.book_new();

const summaryData = [

  ["Metric", "Value"],

  ["Total Students", stats.total_students],

  ["Average Score", `${stats.avg_score}%`],

  ["Hiring Probability", `${stats.avg_hiring}%`],

  ["Placement Ready", stats.placement_ready]

];

const summarySheet = XLSX.utils.aoa_to_sheet(summaryData);
XLSX.utils.book_append_sheet(
  workbook,
  summarySheet,
  "Dashboard Summary"
);

const studentData = [

  [
    "Rank",
    "Name",
    "Department",
    "Placement Score",
    "Hiring Probability",
    "Status"
  ],

  ...topStudents.map((student) => [

    student.rank,

    student.name,

    student.department,

    student.placement_score,

    `${student.hiring_probability}%`,

    student.status

  ])

];

const studentSheet = XLSX.utils.aoa_to_sheet(studentData);
XLSX.utils.book_append_sheet(
  workbook,
  studentSheet,
  "Top Students"
);

XLSX.writeFile(
  workbook,
  "PlacementDNA_Report.xlsx"
);

toast.success("📊 Excel exported successfully!");

  };

    return (

    <button
      onClick={exportExcel}
      className="
        bg-green-600
        hover:bg-green-700
        text-white
        font-semibold
        px-6
        py-3
        rounded-xl
        shadow-lg
        transition-all
        duration-300
      "
    >
      📊 Export Excel
    </button>

  );

}

export default ExportExcelButton;