import { useEffect, useState } from "react";
import { test } from "../services/studentService";

function Students() {
test();

  const [students, setStudents] = useState([]);
  const [editStudentId, setEditStudentId] = useState(null);
  const [formData, setFormData] = useState({
  full_name: "",
  email: "",
  phone: "",
  branch: "",
  year: "",
  cgpa: "",
  placement_score: "",
  career_match: "",
  skill_readiness: "",
  hiring_probability: "",
  resume_url: ""
});

const handleSaveStudent = async () => {

  const response = await fetch(
  editStudentId
    ? `http://127.0.0.1:8000/students/${editStudentId}`
    : "http://127.0.0.1:8000/students",
  {
    method: editStudentId ? "PUT" : "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(formData)
  }
);

  const data = await response.json();

  alert(data.message);

  window.location.reload();
};

const handleDeleteStudent = async (id) => {

  const confirmDelete = window.confirm(
    "Are you sure you want to delete this student?"
  );

  if (!confirmDelete) {
    return;
  }

  const response = await fetch(
    `http://127.0.0.1:8000/students/${id}`,
    {
      method: "DELETE"
    }
  );

  const data = await response.json();

  alert(data.message);

  window.location.reload();
};

const handleEditStudent = (student) => {

  setEditStudentId(student.id);

  setFormData({
    full_name: student.full_name,
    email: student.email,
    phone: student.phone,
    branch: student.branch,
    year: student.year,
    cgpa: student.cgpa,
    placement_score: student.placement_score,
    career_match: student.career_match,
    skill_readiness: student.skill_readiness,
    hiring_probability: student.hiring_probability,
    resume_url: student.resume_url || ""
  });

};
useEffect(() => {

  const fetchStudents = async () => {

    try {

      const data = await getStudents();

      setStudents(data);

    } catch (error) {

      console.error(error);

    }

  };

  fetchStudents();

}, []);

  return (
    <div className="min-h-screen bg-slate-950 p-8">

      <h1 className="text-4xl font-bold text-cyan-400 mb-8">
        Students
      </h1>
<div className="bg-slate-900 p-6 rounded-xl mb-8">

  <h2 className="text-2xl font-bold text-cyan-400 mb-6">
    Add Student
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

    <input
  type="text"
  placeholder="Full Name"
  value={formData.full_name}
  onChange={(e) =>
    setFormData({
      ...formData,
      full_name: e.target.value
    })
  }
  className="p-3 rounded-lg bg-slate-800 text-white"
/>

   <input
  type="email"
  placeholder="Email"
  value={formData.email}
  onChange={(e) =>
    setFormData({
      ...formData,
      email: e.target.value
    })
  }
  className="p-3 rounded-lg bg-slate-800 text-white"
/>

<input
  type="text"
  placeholder="Phone Number"
  value={formData.phone}
  onChange={(e) =>
    setFormData({
      ...formData,
      phone: e.target.value
    })
  }
  className="p-3 rounded-lg bg-slate-800 text-white"
/>

<input
  type="text"
  placeholder="Branch (MCA, BCA, B.Tech...)"
  value={formData.branch}
  onChange={(e) =>
    setFormData({
      ...formData,
      branch: e.target.value
    })
  }
  className="p-3 rounded-lg bg-slate-800 text-white"
/>

<input
  type="number"
  placeholder="Year"
  value={formData.year}
  onChange={(e) =>
    setFormData({
      ...formData,
      year: e.target.value
    })
  }
  className="p-3 rounded-lg bg-slate-800 text-white"
/>

<input
  type="number"
  step="0.01"
  placeholder="CGPA"
  value={formData.cgpa}
  onChange={(e) =>
    setFormData({
      ...formData,
      cgpa: e.target.value
    })
  }
  className="p-3 rounded-lg bg-slate-800 text-white"
/>

   <input
  type="number"
  placeholder="Placement Score"
  value={formData.placement_score}
  onChange={(e) =>
    setFormData({
      ...formData,
      placement_score: e.target.value
    })
  }
  className="p-3 rounded-lg bg-slate-800 text-white"
/>

    <input
  type="number"
  placeholder="Career Match"
  value={formData.career_match}
  onChange={(e) =>
    setFormData({
      ...formData,
      career_match: e.target.value
    })
  }
  className="p-3 rounded-lg bg-slate-800 text-white"
/>

   <input
  type="number"
  placeholder="Skill Readiness"
  value={formData.skill_readiness}
  onChange={(e) =>
    setFormData({
      ...formData,
      skill_readiness: e.target.value
    })
  }
  className="p-3 rounded-lg bg-slate-800 text-white"
/>

   <input
  type="number"
  placeholder="Hiring Probability"
  value={formData.hiring_probability}
  onChange={(e) =>
    setFormData({
      ...formData,
      hiring_probability: e.target.value
    })
  }
  className="p-3 rounded-lg bg-slate-800 text-white"
/>

<input
  type="text"
  placeholder="Resume URL"
  value={formData.resume_url}
  onChange={(e) =>
    setFormData({
      ...formData,
      resume_url: e.target.value
    })
  }
  className="p-3 rounded-lg bg-slate-800 text-white"
/>

  </div>

  <button
  onClick={handleSaveStudent}   
    className="
    mt-6
    bg-cyan-400
    text-slate-950
    px-6
    py-3
    rounded-xl
    font-bold
    hover:bg-cyan-300
    "
  >
    {editStudentId ? "Update Student" : "Save Student"}
  </button>

</div>
      <div className="overflow-x-auto">

        <table className="w-full bg-slate-900 rounded-xl overflow-hidden">

          <thead>

            <tr className="bg-cyan-500 text-slate-950">

              <th className="p-4 text-left">Full Name</th>
              <th className="p-4 text-left">Email</th>
              <th className="p-4 text-left">Branch</th>
              <th className="p-4 text-left">CGPA</th>
              <th className="p-4 text-left">Score</th>
              <th className="p-4 text-left">Hiring %</th>

            </tr>

          </thead>

          <tbody>

            {students.map((student) => (

              <tr
                key={student.id}
                className="border-b border-slate-800 text-white"
              >
                <td className="p-4">{student.full_name}</td>
<td className="p-4">{student.email}</td>
<td className="p-4">{student.branch}</td>
<td className="p-4">{student.cgpa}</td>
<td className="p-4">{student.placement_score}</td>
<td className="p-4">{student.hiring_probability}%</td>
<td className="p-4 flex gap-2">

 <button
  onClick={() => handleEditStudent(student)}
  className="bg-yellow-500 px-3 py-2 rounded-lg text-black"
>
  Edit
</button>

  <button
    onClick={() => handleDeleteStudent(student.id)}
    className="bg-red-500 px-3 py-2 rounded-lg text-white hover:bg-red-600"
  >
    Delete
  </button>

</td>              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default Students;