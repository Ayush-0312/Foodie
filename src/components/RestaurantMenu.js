import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import Shrimmer from "./Shrimmer";
import { useState } from "react";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(null);

  if (resInfo === null) return <Shrimmer />;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card.card;

  const { name, cuisines, costForTwoMessage, avgRating } =
    resInfo?.cards[2]?.card?.card?.info;

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="text-center bg-rose-50">
      <h1 className="mt-6 mb-3 font-bold text-2xl">{name}</h1>
      <p className="text-gray-700 font-semibold text-lg">
        {cuisines.join(", ")}
      </p>

      <div className="flex justify-center items-center gap-2 m-2 text-base">
        <span className="px-3 py-1 bg-green-100 text-green-700 font-semibold rounded-lg shadow-sm">
          ⭐ {avgRating}
        </span>
        <span className="px-3 py-1 bg-yellow-100 text-yellow-700 font-semibold rounded-lg shadow-sm">
          {costForTwoMessage}
        </span>
      </div>

      {/* category */}
      {categories.map((category, index) => (
        <RestaurantCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
          showList={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
