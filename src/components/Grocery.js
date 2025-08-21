import { GROCERY } from "../utils/constants";

const Grocery = () => {
  return (
    <div className="bg-green-100 h-[545px] flex items-center justify-center">
      <div className="w-6/12 mx-auto text-center">
        <h1 className="text-green-700 font-bold text-4xl pt-4">
          Grocery Store
        </h1>
        <h2 className="text-green-500 font-bold text-2xl pt-4">Coming Soon</h2>
        <div className="mt-6 flex justify-center">
          <img
            className="w-8/12 sm:w-6/12 lg:w-5/12 rounded-xl drop-shadow-md"
            src={GROCERY}
            alt="Grocery Coming Soon"
          />
        </div>
      </div>
    </div>
  );
};

export default Grocery;
