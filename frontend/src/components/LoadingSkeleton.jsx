function LoadingSkeleton() {
  return (
    <div className="animate-pulse">

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        {[1, 2, 3, 4].map((item) => (
          <div
            key={item}
            className="bg-slate-800 rounded-3xl h-40"
          />
        ))}

      </div>

      <div className="bg-slate-800 rounded-3xl h-96 mt-8" />

      <div className="bg-slate-800 rounded-3xl h-96 mt-8" />

    </div>
  );
}

export default LoadingSkeleton;