import { useEffect, useState } from "react";

function Resume() {

  const [resumes, setResumes] = useState([]);

  const [selectedFile, setSelectedFile] = useState(null);

  const [formData, setFormData] = useState({
    student_name: "",
    email: ""
  });


  const handleUploadResume = async () => {

  if (!selectedFile) {

    alert("Please select a PDF resume.");

    return;

  }

  const uploadData = new FormData();

  uploadData.append(
    "student_name",
    formData.student_name
  );

  uploadData.append(
    "email",
    formData.email
  );

  uploadData.append(
    "file",
    selectedFile
  );

  const response = await fetch(

    "http://127.0.0.1:8000/resumes/upload",

    {
      method: "POST",
      body: uploadData
    }

  );

  const data = await response.json();

  alert(data.message);

  window.location.reload();

};


const handleDeleteResume = async (id) => {

  const confirmDelete = window.confirm(
    "Are you sure you want to delete this resume?"
  );

  if (!confirmDelete) {
    return;
  }

  const response = await fetch(
    `http://127.0.0.1:8000/resumes/${id}`,
    {
      method: "DELETE"
    }
  );

  const data = await response.json();

  alert(data.message);

  window.location.reload();

};


useEffect(() => {

  fetch("http://127.0.0.1:8000/resumes/")
    .then((response) => response.json())
    .then((data) => {

      setResumes(data);

    });

}, []);

  return (

    <div className="min-h-screen bg-slate-950 p-8">

      <h1 className="text-4xl font-bold text-cyan-400 mb-8">

        Resume Management

      </h1>

      <div className="bg-slate-900 p-6 rounded-xl mb-8">

  <h2 className="text-2xl font-bold text-cyan-400 mb-6">

    Upload Resume

  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

    <input
      type="text"
      placeholder="Student Name"
      value={formData.student_name}
      onChange={(e) =>
        setFormData({
          ...formData,
          student_name: e.target.value
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
      type="file"
      accept=".pdf"
      onChange={(e) =>
        setSelectedFile(e.target.files[0])
      }
      className="p-3 rounded-lg bg-slate-800 text-white"
    />

  </div>

  <button
  onClick={handleUploadResume}
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
  Upload Resume
</button>

</div>

<div className="bg-slate-900 p-6 rounded-xl">

  <h2 className="text-2xl font-bold text-cyan-400 mb-6">
    Uploaded Resumes
  </h2>

  <table className="w-full text-white">

    <thead>

      <tr className="border-b border-slate-700">

        <th className="text-left py-3">Student</th>
        <th className="text-left py-3">Email</th>
        <th className="text-left py-3">Resume</th>
        <th className="text-left py-3">Actions</th>

      </tr>

    </thead>

    <tbody>

      {resumes.map((resume) => (

        <tr
          key={resume.id}
          className="border-b border-slate-800"
        >

          <td className="py-3">
            {resume.student_name}
          </td>

          <td className="py-3">
            {resume.email}
          </td>

          <td className="py-3">
            {resume.resume_filename}
          </td>

     <td className="py-3">

  <div className="flex gap-2">

    <button
      onClick={() =>
        window.open(
          `http://127.0.0.1:8000/${resume.resume_path}`,
          "_blank"
        )
      }
      className="bg-cyan-500 px-4 py-2 rounded-lg hover:bg-cyan-400"
    >
      View
    </button>

    <a
      href={`http://127.0.0.1:8000/${resume.resume_path}`}
      download
      className="bg-green-500 px-4 py-2 rounded-lg hover:bg-green-400 text-white"
    >
      Download
    </a>

    <button
  onClick={() => handleDeleteResume(resume.id)}
  className="bg-red-500 px-4 py-2 rounded-lg hover:bg-red-400 text-white"
>
  Delete
</button>

  </div>

</td>

        </tr>

      ))}

    </tbody>

  </table>

</div>

    </div>

  );

}

export default Resume;