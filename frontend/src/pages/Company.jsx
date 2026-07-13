import { useEffect, useState } from "react";

function Company() {

  const [companies, setCompanies] = useState([]);

  const [editCompanyId, setEditCompanyId] = useState(null);

  const [formData, setFormData] = useState({

    company_name: "",

    company_type: "",

    package: "",

    location: "",

    eligibility: "",

    job_role: "",

    status: "Active"

  });

  useEffect(() => {

  fetch("http://127.0.0.1:8000/companies/")
    .then((response) => response.json())
    .then((data) => {

      setCompanies(data);

    });

}, []);

const handleSaveCompany = async () => {

  const response = await fetch(

    editCompanyId
      ? `http://127.0.0.1:8000/companies/${editCompanyId}`
      : "http://127.0.0.1:8000/companies/",

    {

      method: editCompanyId ? "PUT" : "POST",

      headers: {

        "Content-Type": "application/json"

      },

      body: JSON.stringify(formData)

    }

  );

  const data = await response.json();

  alert(

    editCompanyId
      ? "Company Updated Successfully"
      : "Company Added Successfully"

  );

  window.location.reload();

};

const handleEditCompany = (company) => {

  setEditCompanyId(company.id);

  setFormData({

    company_name: company.company_name,

    company_type: company.company_type,

    package: company.package,

    location: company.location,

    eligibility: company.eligibility,

    job_role: company.job_role,

    status: company.status

  });

};

const handleDeleteCompany = async (id) => {

  const confirmDelete = window.confirm(
    "Are you sure you want to delete this company?"
  );

  if (!confirmDelete) {
    return;
  }

  const response = await fetch(

    `http://127.0.0.1:8000/companies/${id}`,

    {

      method: "DELETE"

    }

  );

  const data = await response.json();

  alert(data.message);

  window.location.reload();

};

  return (

    <div className="min-h-screen bg-slate-950 p-8">

      <h1 className="text-4xl font-bold text-cyan-400 mb-8">

        Company Management

      </h1>

      <div className="bg-slate-900 p-6 rounded-xl mb-8">

  <h2 className="text-2xl font-bold text-cyan-400 mb-6">
    Add Company
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

    <input
      type="text"
      placeholder="Company Name"
      value={formData.company_name}
      onChange={(e) =>
        setFormData({
          ...formData,
          company_name: e.target.value
        })
      }
      className="p-3 rounded-lg bg-slate-800 text-white"
    />

    <input
      type="text"
      placeholder="Company Type"
      value={formData.company_type}
      onChange={(e) =>
        setFormData({
          ...formData,
          company_type: e.target.value
        })
      }
      className="p-3 rounded-lg bg-slate-800 text-white"
    />

    <input
      type="number"
      step="0.1"
      placeholder="Package (LPA)"
      value={formData.package}
      onChange={(e) =>
        setFormData({
          ...formData,
          package: e.target.value
        })
      }
      className="p-3 rounded-lg bg-slate-800 text-white"
    />

    <input
      type="text"
      placeholder="Location"
      value={formData.location}
      onChange={(e) =>
        setFormData({
          ...formData,
          location: e.target.value
        })
      }
      className="p-3 rounded-lg bg-slate-800 text-white"
    />

    <input
      type="number"
      step="0.1"
      placeholder="Eligibility (CGPA)"
      value={formData.eligibility}
      onChange={(e) =>
        setFormData({
          ...formData,
          eligibility: e.target.value
        })
      }
      className="p-3 rounded-lg bg-slate-800 text-white"
    />

    <input
      type="text"
      placeholder="Job Role"
      value={formData.job_role}
      onChange={(e) =>
        setFormData({
          ...formData,
          job_role: e.target.value
        })
      }
      className="p-3 rounded-lg bg-slate-800 text-white"
    />

    <select
      value={formData.status}
      onChange={(e) =>
        setFormData({
          ...formData,
          status: e.target.value
        })
      }
      className="p-3 rounded-lg bg-slate-800 text-white"
    >
      <option value="Active">Active</option>
      <option value="Closed">Closed</option>
    </select>

  </div>

  <button

    onClick={handleSaveCompany}

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
        {editCompanyId ? "Update Company" : "Save Company"}
  </button>

</div>

<div className="overflow-x-auto">

  <table className="w-full bg-slate-900 rounded-xl overflow-hidden">

    <thead>

      <tr className="bg-cyan-500 text-slate-950">

        <th className="p-4 text-left">ID</th>
        <th className="p-4 text-left">Company</th>
        <th className="p-4 text-left">Type</th>
        <th className="p-4 text-left">Package</th>
        <th className="p-4 text-left">Location</th>
        <th className="p-4 text-left">Eligibility</th>
        <th className="p-4 text-left">Role</th>
        <th className="p-4 text-left">Status</th>
        <th className="p-4 text-left">Action</th>

      </tr>

    </thead>

    <tbody>

      {companies.map((company) => (

        <tr
          key={company.id}
          className="border-b border-slate-800 text-white"
        >

          <td className="p-4">{company.id}</td>
          <td className="p-4">{company.company_name}</td>
          <td className="p-4">{company.company_type}</td>
          <td className="p-4">{company.package} LPA</td>
          <td className="p-4">{company.location}</td>
          <td className="p-4">{company.eligibility}</td>
          <td className="p-4">{company.job_role}</td>
          <td className="p-4">{company.status}</td>

          <td className="p-4 flex gap-2">

            <button
                onClick={() => handleEditCompany(company)}
                className="bg-yellow-500 px-3 py-2 rounded-lg text-black hover:bg-yellow-400"
            >
                Edit
            </button>

           <button
            onClick={() => handleDeleteCompany(company.id)}
            className="bg-red-500 px-3 py-2 rounded-lg text-white hover:bg-red-600"
            >
            Delete
            </button>

          </td>

        </tr>

      ))}

    </tbody>

  </table>

</div>

    </div>

  );

}

export default Company;