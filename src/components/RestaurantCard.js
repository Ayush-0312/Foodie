import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo } =
    resData?.info;

  return (
    <div className="m-4 p-2 w-52 rounded-lg shadow-md bg-gray-200 hover:bg-gray-300 hover:scale-105 transform transition duration-2">
      <img
        className="rounded-lg "
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="mx-1 py-2 font-bold text-lg ">{name}</h3>
      <h4 className="mx-1 py-1 font-semibold text-sm ">{avgRating} stars</h4>
      <h4 className="mx-1 py-1">{cuisines.join(", ")}</h4>
      <h4 className="mx-1 py-1">{costForTwo}</h4>
    </div>
  );
};

export default RestaurantCard;
