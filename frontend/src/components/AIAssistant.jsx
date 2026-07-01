function AIAssistant({ aiRecommendation }) {

  return (

    <div
      className="
        mt-10
        bg-gradient-to-br
        from-indigo-900
        to-slate-900
        rounded-3xl
        shadow-2xl
        p-8
        border
        border-indigo-700
      "
    >

      <h2 className="text-3xl font-bold text-white mb-8">
        🤖 AI Placement Assistant
      </h2>

      <div className="space-y-5">

        <div className="flex justify-between items-center">

          <span className="text-slate-300">
            Overall Status
          </span>

          <span className="font-bold text-green-400">
            {aiRecommendation.overall_status}
          </span>

        </div>

        <div className="flex justify-between items-center">

          <span className="text-slate-300">
            Total Students
          </span>

          <span className="font-bold text-white">
            {aiRecommendation.total_students}
          </span>

        </div>

        <div className="flex justify-between items-center">

          <span className="text-slate-300">
            Placement Ready
          </span>

          <span className="font-bold text-cyan-400">
            {aiRecommendation.placement_ready}
          </span>

        </div>

        <div className="flex justify-between items-center">

          <span className="text-slate-300">
            Average Score
          </span>

          <span className="font-bold text-yellow-400">
            {aiRecommendation.avg_score}%
          </span>

        </div>

        <div className="flex justify-between items-center">

          <span className="text-slate-300">
            Top Performer
          </span>

          <span className="font-bold text-purple-300">
            {aiRecommendation.top_student}
          </span>

        </div>

        <div className="flex justify-between items-center">

          <span className="text-slate-300">
            Top Score
          </span>

          <span className="font-bold text-green-400">
            {aiRecommendation.top_score}%
          </span>

        </div>

      </div>

      <div className="mt-8 bg-slate-800 rounded-2xl p-6 border border-slate-700">

        <h3 className="text-xl font-semibold text-cyan-400 mb-4">
          💡 AI Recommendation
        </h3>

        <p className="text-slate-300 leading-8">

          Based on the current analytics,

          <span className="font-bold text-green-400">
            {" "}
            {aiRecommendation.overall_status}
          </span>

          {" "}placement performance has been observed.

          Continue improving aptitude, technical skills,
          communication, mock interviews, and industry
          certifications to further enhance placement success.

        </p>

      </div>

    </div>

  );

}

export default AIAssistant;