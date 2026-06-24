function DashboardAnalytics() {
  return (
    <div className="min-h-screen bg-slate-950 p-8">

      <h1 className="text-4xl font-bold text-cyan-400 mb-8">
        PlacementDNA Analytics Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        <div className="bg-slate-900 p-6 rounded-2xl shadow-lg">
          <h2 className="text-slate-400 text-sm">
            Total Students
          </h2>

          <p className="text-4xl font-bold text-cyan-400 mt-2">
            250
          </p>
        </div>

        <div className="bg-slate-900 p-6 rounded-2xl shadow-lg">
          <h2 className="text-slate-400 text-sm">
            Avg Placement Score
          </h2>

          <p className="text-4xl font-bold text-green-400 mt-2">
            84%
          </p>
        </div>

        <div className="bg-slate-900 p-6 rounded-2xl shadow-lg">
          <h2 className="text-slate-400 text-sm">
            Avg Hiring Probability
          </h2>

          <p className="text-4xl font-bold text-yellow-400 mt-2">
            76%
          </p>
        </div>

        <div className="bg-slate-900 p-6 rounded-2xl shadow-lg">
          <h2 className="text-slate-400 text-sm">
            Placement Ready
          </h2>

          <p className="text-4xl font-bold text-purple-400 mt-2">
            187
          </p>
        </div>

      </div>

    </div>
  );
}

export default DashboardAnalytics;