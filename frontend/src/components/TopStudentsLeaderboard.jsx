function TopStudentsLeaderboard({ topStudents }) {

  const getMedal = (rank) => {
    if (rank === 1) return "🥇";
    if (rank === 2) return "🥈";
    if (rank === 3) return "🥉";
    return rank;
  };

  return (

    <div className="mt-10 bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl shadow-2xl p-8 border border-slate-700">

      <div className="mb-8">

        <h2 className="text-3xl font-bold text-white">
          🏆 Top Students Leaderboard
        </h2>

        <p className="text-slate-400 mt-2">
          Highest performing students based on placement analytics
        </p>

      </div>

      <div className="overflow-x-auto">

        <table className="w-full text-left">

          <thead>

            <tr className="border-b border-slate-700">

              <th className="py-4 text-cyan-400">Rank</th>
              <th className="py-4 text-cyan-400">Student</th>
              <th className="py-4 text-cyan-400">Department</th>
              <th className="py-4 text-cyan-400">Score</th>
              <th className="py-4 text-cyan-400">Hiring %</th>
              <th className="py-4 text-cyan-400">Status</th>

            </tr>

          </thead>

          <tbody>

            {topStudents.map((student) => (

              <tr
                key={student.rank}
                className="border-b border-slate-800 hover:bg-slate-800 transition-colors"
              >

                <td className="py-4 text-2xl">
                  {getMedal(student.rank)}
                </td>

                <td className="py-4 text-white font-semibold">
                  {student.name}
                </td>

                <td className="py-4 text-slate-300">
                  {student.department}
                </td>

                <td className="py-4 text-cyan-400 font-bold">
                  {student.placement_score}
                </td>

                <td className="py-4 text-green-400 font-bold">
                  {student.hiring_probability}%
                </td>

                <td className="py-4">

                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      student.status === "Ready"
                        ? "bg-green-600 text-white"
                        : "bg-yellow-500 text-black"
                    }`}
                  >
                    {student.status}
                  </span>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>

  );

}

export default TopStudentsLeaderboard;