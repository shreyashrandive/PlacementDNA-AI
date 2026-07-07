import { motion } from "framer-motion";

function TopStudentsLeaderboard({ topStudents }) {

  return (

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-slate-900 rounded-3xl shadow-2xl p-6 mt-8"
    >

      <h2 className="text-2xl font-bold text-cyan-400 mb-6">
        🏆 Top Students Leaderboard
      </h2>

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead>

            <tr className="border-b border-slate-700">

              <th className="text-left py-4 text-slate-300">Rank</th>
              <th className="text-left py-4 text-slate-300">Student</th>
              <th className="text-left py-4 text-slate-300">Department</th>
              <th className="text-left py-4 text-slate-300">Score</th>
              <th className="text-left py-4 text-slate-300">Hiring %</th>

            </tr>

          </thead>

          <tbody>

            {topStudents.length === 0 ? (

              <tr>

               <td
  colSpan="5"
  className="py-16 text-center"
>

  <div className="flex flex-col items-center">

    <div className="text-6xl mb-4">
      🔍
    </div>

    <h3 className="text-2xl font-bold text-white">
      No Students Found
    </h3>

    <p className="text-slate-400 mt-2">
      Try changing the search, department, or status filters.
    </p>

  </div>

</td>
              </tr>

            ) : (

              topStudents.map((student, index) => (

                <tr
                  key={student.id}
                  className="border-b border-slate-800 hover:bg-slate-800 transition"
                >

                  <td className="py-5">

                    {index === 0
                      ? "🥇"
                      : index === 1
                      ? "🥈"
                      : index === 2
                      ? "🥉"
                      : `#${index + 1}`}

                  </td>

                  <td>

                    <div>

                      <p className="font-semibold text-white">
                        {student.name}
                      </p>

                      <p className="text-sm text-slate-400">
                        {student.status}
                      </p>

                    </div>

                  </td>

                  <td className="text-slate-300">
                    {student.department}
                  </td>

                  <td>

                    <span className="bg-cyan-600 px-3 py-1 rounded-full text-sm font-semibold">
                      {student.placement_score}
                    </span>

                  </td>

                  <td>

                    <span className="bg-green-600 px-3 py-1 rounded-full text-sm font-semibold">
                      {student.hiring_probability}%
                    </span>

                  </td>

                </tr>

              ))

            )}

          </tbody>

        </table>

      </div>

    </motion.div>

  );

}

export default TopStudentsLeaderboard;