import { motion } from "framer-motion";

function KPICards({ stats }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

      {/* Total Students */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        whileHover={{ scale: 1.05, y: -5 }}
        className="bg-gradient-to-br from-cyan-600 to-blue-700 rounded-3xl shadow-2xl p-6"
      >
        <div className="flex justify-between items-center">
          <div>
            <p className="text-white text-sm uppercase tracking-widest">
              Total Students
            </p>

            <h2 className="text-5xl font-bold text-white mt-3">
              {stats.total_students}
            </h2>
          </div>

          <div className="text-6xl">🎓</div>
        </div>
      </motion.div>

      {/* Average Score */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        whileHover={{ scale: 1.05, y: -5 }}
        className="bg-gradient-to-br from-green-600 to-emerald-700 rounded-3xl shadow-2xl p-6"
      >
        <div className="flex justify-between items-center">
          <div>
            <p className="text-white text-sm uppercase tracking-widest">
              Average Score
            </p>

            <h2 className="text-5xl font-bold text-white mt-3">
              {stats.avg_score}%
            </h2>
          </div>

          <div className="text-6xl">📊</div>
        </div>
      </motion.div>

      {/* Hiring Probability */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        whileHover={{ scale: 1.05, y: -5 }}
        className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-3xl shadow-2xl p-6"
      >
        <div className="flex justify-between items-center">
          <div>
            <p className="text-white text-sm uppercase tracking-widest">
              Hiring Probability
            </p>

            <h2 className="text-5xl font-bold text-white mt-3">
              {stats.avg_hiring}%
            </h2>
          </div>

          <div className="text-6xl">🎯</div>
        </div>
      </motion.div>

      {/* Placement Ready */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0 }}
        whileHover={{ scale: 1.05, y: -5 }}
        className="bg-gradient-to-br from-purple-600 to-fuchsia-700 rounded-3xl shadow-2xl p-6"
      >
        <div className="flex justify-between items-center">
          <div>
            <p className="text-white text-sm uppercase tracking-widest">
              Placement Ready
            </p>

            <h2 className="text-5xl font-bold text-white mt-3">
              {stats.placement_ready}
            </h2>
          </div>

          <div className="text-6xl">🚀</div>
        </div>
      </motion.div>

    </div>
  );
}

export default KPICards;