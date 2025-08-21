import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo } =
    resData?.info;

  return (
    <div className="m-4 p-3 w-64 rounded-xl shadow-lg bg-neutral-100 hover:shadow-2xl hover:scale-105 transform transition duration-300">
      <img
        className="rounded-lg w-full h-40 object-cover"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="mt-3 font-bold text-lg truncate">{name}</h3>

      <div className="flex items-center space-x-2 mt-2">
        <span className="px-2 py-1 text-sm font-medium bg-green-100 text-green-700 rounded-lg">
          ⭐ {avgRating}
        </span>
        <span className="text-sm text-gray-600">{costForTwo}</span>
      </div>

      {/* Cuisines with horizontal scroll on hover */}
      <div
        className="mt-2 text-sm text-gray-700 scroll-container"
        style={{
          "--scroll-distance": "-100%", // scroll to left by full width
        }}
      >
        <span className="scroll-text">{cuisines.join(", ")}</span>
      </div>
    </div>
  );
};

export default RestaurantCard;
