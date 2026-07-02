function FilterBar({
  search,
  setSearch,
  department,
  setDepartment,
  status,
  setStatus
}) {

  return (

    <div className="bg-slate-900 border border-slate-700 rounded-3xl shadow-2xl p-6 mb-8">

      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">

        {/* Search */}

        <input
          type="text"
          placeholder="🔍 Search Student..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="
            bg-slate-800
            border
            border-slate-700
            rounded-xl
            px-4
            py-3
            text-white
            focus:outline-none
            focus:ring-2
            focus:ring-cyan-500
          "
        />

        {/* Department */}

        <select
  value={department}
  onChange={(e) => setDepartment(e.target.value)}
  className="
    bg-slate-800
    border
    border-slate-700
    rounded-xl
    px-4
    py-3
    text-white
    focus:outline-none
    focus:ring-2
    focus:ring-cyan-500
  "
>

          <option>All Departments</option>

          <option>BCA</option>

          <option>BBA</option>

          <option>MCA</option>

          <option>MBA</option>

          <option>B.Tech</option>

        </select>

        {/* Status */}

        <select
  value={status}
  onChange={(e) => setStatus(e.target.value)}
  className="
    bg-slate-800
    border
    border-slate-700
    rounded-xl
    px-4
    py-3
    text-white
    focus:outline-none
    focus:ring-2
    focus:ring-cyan-500
  "
>

          <option>All Status</option>

          <option>Ready</option>

          <option>Improving</option>

        </select>

        {/* Reset */}

        <button
          className="
            bg-cyan-600
            hover:bg-cyan-700
            rounded-xl
            text-white
            font-semibold
            transition-all
            duration-300
          "
        >
          🔄 Reset Filters
        </button>

      </div>

    </div>

  );

}

export default FilterBar;