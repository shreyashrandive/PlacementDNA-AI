import { motion } from "framer-motion";
import { toast } from "react-toastify";
import jsPDF from "jspdf";

function ExportPDFButton({ stats, topStudents }) {

  const exportPDF = () => {

    const doc = new jsPDF();

    doc.setFontSize(20);
    doc.text("PlacementDNA AI Report", 20, 20);

    doc.setFontSize(12);

    doc.text(`Total Students : ${stats.total_students}`,20,40);
    doc.text(`Average Score : ${stats.avg_score}%`,20,50);
    doc.text(`Hiring Probability : ${stats.avg_hiring}%`,20,60);
    doc.text(`Placement Ready : ${stats.placement_ready}`,20,70);

    doc.text("Top Students",20,90);

    let y = 105;

    topStudents.forEach((student,index)=>{

      doc.text(
        `${index+1}. ${student.name} | ${student.department} | ${student.placement_score}`,
        20,
        y
      );

      y+=10;

    });

    doc.save("PlacementDNA_Report.pdf");

    toast.success("📄 PDF exported successfully!");

  };

  return (

    <motion.button

      whileHover={{scale:1.05}}

      whileTap={{scale:0.95}}

      onClick={exportPDF}

      className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-2xl shadow-xl font-semibold transition"

    >

      📄 Export PDF

    </motion.button>

  );

}

export default ExportPDFButton;