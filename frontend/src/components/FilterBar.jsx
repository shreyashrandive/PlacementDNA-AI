function FilterBar({
  search,
  setSearch,
  department,
  setDepartment,
  status,
  setStatus,
}) {
  return (
    <div className="bg-slate-900 rounded-3xl shadow-xl p-5 sm:p-6 mt-8 mb-8">

      <h2 className="text-xl font-bold text-cyan-400 mb-5">
        Dashboard Filters
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

        <input
          type="text"
          placeholder="🔍 Search Student..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-slate-800 text-white rounded-xl px-4 py-3 outline-none border border-slate-700 focus:border-cyan-400 transition"
        />

        <select
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          className="bg-slate-800 text-white rounded-xl px-4 py-3 outline-none border border-slate-700 focus:border-cyan-400 transition"
        >
          <option>All Departments</option>
          <option>BCA</option>
          <option>BBA</option>
          <option>B.Tech</option>
          <option>MBA</option>
        </select>

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="bg-slate-800 text-white rounded-xl px-4 py-3 outline-none border border-slate-700 focus:border-cyan-400 transition"
        >
          <option>All Status</option>
          <option>Ready</option>
          <option>Improving</option>
        </select>

      </div>

    </div>
  );
}

export default FilterBar;