const Shrimmer = () => {
  return (
    <div className="flex flex-wrap gap-8 p-8 bg-rose-50">
      {Array.from({ length: 15 }).map((_, index) => (
        <div
          key={index}
          className="w-48 h-72 bg-rose-100 rounded-lg shadow-xl animate-pulse"
        ></div>
      ))}
    </div>
  );
};

export default Shrimmer;
