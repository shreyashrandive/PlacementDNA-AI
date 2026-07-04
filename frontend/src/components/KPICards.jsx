import { motion } from "framer-motion";

function KPICards({ stats }) {
  const cards = [
    {
      title: "Total Students",
      value: stats.total_students,
      icon: "🎓",
      gradient: "from-cyan-600 to-blue-700",
    },
    {
      title: "Average Score",
      value: `${stats.avg_score}%`,
      icon: "📊",
      gradient: "from-green-600 to-emerald-700",
    },
    {
      title: "Hiring Probability",
      value: `${stats.avg_hiring}%`,
      icon: "🎯",
      gradient: "from-amber-500 to-orange-600",
    },
    {
      title: "Placement Ready",
      value: stats.placement_ready,
      icon: "🚀",
      gradient: "from-purple-600 to-fuchsia-700",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

      {cards.map((card, index) => (

        <motion.div
          key={card.title}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: index * 0.15,
          }}
          whileHover={{
            scale: 1.04,
            y: -6,
          }}
          className={`bg-gradient-to-br ${card.gradient} rounded-3xl shadow-2xl p-5 sm:p-6`}
        >

          <div className="flex justify-between items-center">

            <div>

              <p className="text-white text-xs sm:text-sm uppercase tracking-widest">
                {card.title}
              </p>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-3">
                {card.value}
              </h2>

            </div>

            <div className="text-4xl sm:text-5xl lg:text-6xl">
              {card.icon}
            </div>

          </div>

        </motion.div>

      ))}

    </div>
  );
}

export default KPICards;