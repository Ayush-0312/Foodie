const Shrimmer = () => {
  return (
    <div className="flex flex-wrap gap-8 p-8 bg-rose-50 justify-center">
      {Array.from({ length: 12 }).map((_, index) => (
        <div
          key={index}
          className="w-60 h-72 bg-white rounded-xl shadow-md p-4 animate-pulse"
        >
          {/* Image placeholder */}
          <div className="w-full h-36 bg-rose-100 rounded-lg mb-4"></div>

          {/* Text placeholders */}
          <div className="h-4 bg-rose-100 rounded w-3/4 mb-2"></div>
          <div className="h-4 bg-rose-100 rounded w-1/2 mb-2"></div>
          <div className="h-4 bg-rose-100 rounded w-2/3"></div>
        </div>
      ))}
    </div>
  );
};

export default Shrimmer;
