import { useEffect, useState } from "react";

function PlacementDrive() {

  const [placementDrives, setPlacementDrives] = useState([]);

  const [editDriveId, setEditDriveId] = useState(null);

  const [formData, setFormData] = useState({

    company_name: "",

    job_role: "",

    package: "",

    location: "",

    eligible_branch: "",

    minimum_cgpa: "",

    drive_date: "",

    last_date_to_apply: "",

    status: "Upcoming"

  });

  useEffect(() => {

  fetch("http://127.0.0.1:8000/placement-drives/")
    .then((response) => response.json())
    .then((data) => {

      setPlacementDrives(data);

    });

}, []);

const handleSavePlacementDrive = async () => {

  const response = await fetch(

    editDriveId
      ? `http://127.0.0.1:8000/placement-drives/${editDriveId}`
      : "http://127.0.0.1:8000/placement-drives/",

    {

      method: editDriveId ? "PUT" : "POST",

      headers: {

        "Content-Type": "application/json"

      },

      body: JSON.stringify(formData)

    }

  );

  await response.json();

  alert(

    editDriveId
      ? "Placement Drive Updated Successfully"
      : "Placement Drive Added Successfully"

  );

  window.location.reload();

};


const handleEditPlacementDrive = (drive) => {

  setEditDriveId(drive.id);

  setFormData({

    company_name: drive.company_name,

    job_role: drive.job_role,

    package: drive.package,

    location: drive.location,

    eligible_branch: drive.eligible_branch,

    minimum_cgpa: drive.minimum_cgpa,

    drive_date: drive.drive_date,

    last_date_to_apply: drive.last_date_to_apply,

    status: drive.status

  });

};

const handleDeletePlacementDrive = async (id) => {

  const confirmDelete = window.confirm(
    "Are you sure you want to delete this Placement Drive?"
  );

  if (!confirmDelete) {
    return;
  }

  const response = await fetch(

    `http://127.0.0.1:8000/placement-drives/${id}`,

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

        Placement Drive Management

      </h1>

<div className="bg-slate-900 p-6 rounded-xl mb-8">

  <h2 className="text-2xl font-bold text-cyan-400 mb-6">
    Add Placement Drive
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
      type="text"
      placeholder="Eligible Branch"
      value={formData.eligible_branch}
      onChange={(e) =>
        setFormData({
          ...formData,
          eligible_branch: e.target.value
        })
      }
      className="p-3 rounded-lg bg-slate-800 text-white"
    />

    <input
      type="number"
      step="0.1"
      placeholder="Minimum CGPA"
      value={formData.minimum_cgpa}
      onChange={(e) =>
        setFormData({
          ...formData,
          minimum_cgpa: e.target.value
        })
      }
      className="p-3 rounded-lg bg-slate-800 text-white"
    />

    <div>
      <label className="block text-white mb-2">
        Drive Date
      </label>

      <input
        type="date"
        value={formData.drive_date}
        onChange={(e) =>
          setFormData({
            ...formData,
            drive_date: e.target.value
          })
        }
        className="w-full p-3 rounded-lg bg-slate-800 text-white"
      />
    </div>

    <div>
      <label className="block text-white mb-2">
        Last Date to Apply
      </label>

      <input
        type="date"
        value={formData.last_date_to_apply}
        onChange={(e) =>
          setFormData({
            ...formData,
            last_date_to_apply: e.target.value
          })
        }
        className="w-full p-3 rounded-lg bg-slate-800 text-white"
      />
    </div>

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
      <option value="Upcoming">Upcoming</option>
      <option value="Open">Open</option>
      <option value="Closed">Closed</option>
    </select>

  </div>

  <button

  onClick={handleSavePlacementDrive}

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
    {editDriveId ? "Update Placement Drive" : "Save Placement Drive"}
  </button>

</div>


<div className="overflow-x-auto">

  <table className="w-full bg-slate-900 rounded-xl overflow-hidden">

    <thead>

      <tr className="bg-cyan-500 text-slate-950">

        <th className="p-4 text-left">ID</th>

        <th className="p-4 text-left">Company</th>

        <th className="p-4 text-left">Role</th>

        <th className="p-4 text-left">Package</th>

        <th className="p-4 text-left">Location</th>

        <th className="p-4 text-left">Branch</th>

        <th className="p-4 text-left">CGPA</th>

        <th className="p-4 text-left">Drive Date</th>

        <th className="p-4 text-left">Status</th>

        <th className="p-4 text-left">Action</th>

      </tr>

    </thead>

    <tbody>

      {placementDrives.map((drive) => (

        <tr
          key={drive.id}
          className="border-b border-slate-800 text-white"
        >

          <td className="p-4">{drive.id}</td>

          <td className="p-4">{drive.company_name}</td>

          <td className="p-4">{drive.job_role}</td>

          <td className="p-4">{drive.package} LPA</td>

          <td className="p-4">{drive.location}</td>

          <td className="p-4">{drive.eligible_branch}</td>

          <td className="p-4">{drive.minimum_cgpa}</td>

          <td className="p-4">{drive.drive_date}</td>

          <td className="p-4">

            <span
              className="
                bg-cyan-500
                text-slate-950
                px-3
                py-1
                rounded-full
                text-sm
                font-bold
              "
            >
              {drive.status}
            </span>

          </td>

          <td className="p-4 flex gap-2">

           <button
                onClick={() => handleEditPlacementDrive(drive)}
                className="bg-yellow-500 px-3 py-2 rounded-lg text-black hover:bg-yellow-400"
                >
                Edit
                </button>

            <button
               onClick={() => handleDeletePlacementDrive(drive.id)}
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

export default PlacementDrive;