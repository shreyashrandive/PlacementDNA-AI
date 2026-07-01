function KPICards({ stats }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

      {/* Total Students */}
      <div className="bg-gradient-to-br from-cyan-600 to-blue-700 rounded-3xl shadow-2xl p-6 hover:scale-105 transition-all duration-300">

        <div className="flex justify-between items-center">

          <div>

            <p className="text-white text-sm uppercase tracking-widest">
              Total Students
            </p>

            <h2 className="text-5xl font-bold text-white mt-3">
              {stats.total_students}
            </h2>

          </div>

          <div className="text-6xl">
            🎓
          </div>

        </div>

      </div>

      {/* Average Score */}
      <div className="bg-gradient-to-br from-green-600 to-emerald-700 rounded-3xl shadow-2xl p-6 hover:scale-105 transition-all duration-300">

        <div className="flex justify-between items-center">

          <div>

            <p className="text-white text-sm uppercase tracking-widest">
              Average Score
            </p>

            <h2 className="text-5xl font-bold text-white mt-3">
              {stats.avg_score}%
            </h2>

          </div>

          <div className="text-6xl">
            📊
          </div>

        </div>

      </div>

      {/* Hiring Probability */}
      <div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-3xl shadow-2xl p-6 hover:scale-105 transition-all duration-300">

        <div className="flex justify-between items-center">

          <div>

            <p className="text-white text-sm uppercase tracking-widest">
              Hiring Probability
            </p>

            <h2 className="text-5xl font-bold text-white mt-3">
              {stats.avg_hiring}%
            </h2>

          </div>

          <div className="text-6xl">
            🎯
          </div>

        </div>

      </div>

      {/* Placement Ready */}
      <div className="bg-gradient-to-br from-purple-600 to-fuchsia-700 rounded-3xl shadow-2xl p-6 hover:scale-105 transition-all duration-300">

        <div className="flex justify-between items-center">

          <div>

            <p className="text-white text-sm uppercase tracking-widest">
              Placement Ready
            </p>

            <h2 className="text-5xl font-bold text-white mt-3">
              {stats.placement_ready}
            </h2>

          </div>

          <div className="text-6xl">
            🚀
          </div>

        </div>

      </div>

    </div>
  );
}

export default KPICards;