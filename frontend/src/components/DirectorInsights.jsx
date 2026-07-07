import { motion } from "framer-motion";

function DirectorInsights({ insights }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-slate-900 rounded-3xl shadow-2xl p-6 mt-8"
    >
      <h2 className="text-2xl font-bold text-cyan-400 mb-6">
        🎯 Director Insights
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

        <div className="bg-slate-800 rounded-2xl p-5">
          <p className="text-slate-400 text-sm">
            Total Students
          </p>

          <h3 className="text-4xl font-bold text-white mt-2">
            {insights.total_students}
          </h3>
        </div>

        <div className="bg-slate-800 rounded-2xl p-5">
          <p className="text-slate-400 text-sm">
            Placement Ready
          </p>

          <h3 className="text-4xl font-bold text-green-400 mt-2">
            {insights.placement_ready}
          </h3>
        </div>

        <div className="bg-slate-800 rounded-2xl p-5">
          <p className="text-slate-400 text-sm">
            Needs Attention
          </p>

          <h3 className="text-4xl font-bold text-red-400 mt-2">
            {insights.needs_attention}
          </h3>
        </div>

        <div className="bg-slate-800 rounded-2xl p-5">
          <p className="text-slate-400 text-sm">
            Average Score
          </p>

          <h3 className="text-4xl font-bold text-cyan-300 mt-2">
            {insights.avg_score}%
          </h3>
        </div>

        <div className="bg-slate-800 rounded-2xl p-5">
          <p className="text-slate-400 text-sm">
            Top Performer
          </p>

          <h3 className="text-2xl font-bold text-yellow-400 mt-2">
            🏆 {insights.top_student}
          </h3>
        </div>

        <div className="bg-slate-800 rounded-2xl p-5">
          <p className="text-slate-400 text-sm">
            Highest Score
          </p>

          <h3 className="text-4xl font-bold text-purple-400 mt-2">
            {insights.top_score}%
          </h3>
        </div>

      </div>
    </motion.div>
  );
}

export default DirectorInsights;