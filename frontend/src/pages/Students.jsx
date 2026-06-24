import { useEffect, useState } from "react";

function Students() {

  const [students, setStudents] = useState([]);
  const [formData, setFormData] = useState({
  name: "",
  email: "",
  placement_score: "",
  career_match: "",
  skill_readiness: "",
  hiring_probability: ""
});

const handleSaveStudent = async () => {

  const response = await fetch(
    "http://127.0.0.1:8000/students",
    {
      method: "POST",
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
  useEffect(() => {

    fetch("http://127.0.0.1:8000/students")
      .then((response) => response.json())
      .then((data) => {
        setStudents(data);
      });

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
  placeholder="Student Name"
  value={formData.name}
  onChange={(e) =>
    setFormData({
      ...formData,
      name: e.target.value
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
    Save Student
  </button>

</div>
      <div className="overflow-x-auto">

        <table className="w-full bg-slate-900 rounded-xl overflow-hidden">

          <thead>

            <tr className="bg-cyan-500 text-slate-950">

              <th className="p-4 text-left">ID</th>
              <th className="p-4 text-left">Name</th>
              <th className="p-4 text-left">Email</th>
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
                <td className="p-4">{student.id}</td>
                <td className="p-4">{student.name}</td>
                <td className="p-4">{student.email}</td>
                <td className="p-4">{student.placement_score}</td>
                <td className="p-4">{student.hiring_probability}%</td>
              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default Students;