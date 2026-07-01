function DirectorInsights({ insights }) {

  return (

    <div className="mt-10 bg-slate-900 rounded-3xl shadow-2xl p-8 border border-slate-700">

      <h2 className="text-3xl font-bold text-cyan-400 mb-8">
        🎯 Director Insights
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Placement Ready */}

        <div className="bg-green-900 rounded-2xl p-6">

          <h3 className="text-lg font-semibold text-green-300">
            ✅ Placement Ready
          </h3>

          <p className="text-4xl font-bold text-white mt-4">
            {insights.placement_ready}
          </p>

        </div>

        {/* Students Needing Attention */}

        <div className="bg-red-900 rounded-2xl p-6">

          <h3 className="text-lg font-semibold text-red-300">
            ⚠ Students Needing Attention
          </h3>

          <p className="text-4xl font-bold text-white mt-4">
            {insights.needs_attention}
          </p>

        </div>

        {/* Average Placement Score */}

        <div className="bg-cyan-900 rounded-2xl p-6">

          <h3 className="text-lg font-semibold text-cyan-300">
            📊 Average Placement Score
          </h3>

          <p className="text-4xl font-bold text-white mt-4">
            {insights.avg_score}%
          </p>

        </div>

        {/* Top Performer */}

        <div className="bg-yellow-900 rounded-2xl p-6">

          <h3 className="text-lg font-semibold text-yellow-300">
            🏆 Top Performer
          </h3>

          <p className="text-2xl font-bold text-white mt-4">
            {insights.top_student}
          </p>

          <p className="text-yellow-300 mt-2 text-lg">
            Score: {insights.top_score}%
          </p>

        </div>

      </div>

    </div>

  );

}

export default DirectorInsights;