import { useDispatch } from "react-redux";
import { useState } from "react";
import { addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const [addedItems, setAddedItems] = useState([]);

  const handleAddItem = (item) => {
    const itemId = item?.card?.info?.id;
    // dispatch an action
    dispatch(addItem(item));

    // avoid duplicates
    setAddedItems((prev) => (prev.includes(itemId) ? prev : [...prev, itemId]));
  };

  if (!items || !Array.isArray(items) || items.length === 0) {
    return (
      <div className="text-center text-gray-700 py-4">
        🍽️ No items available
      </div>
    );
  }

  return (
    <div>
      {items.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="m-2 p-2 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span className="font-bold text-base">
                {item?.card?.info?.name}
              </span>
              <span className="font-medium text-base">
                {" "}
                - ₹{" "}
                {item?.card?.info?.price
                  ? item?.card?.info?.price / 100
                  : item?.card?.info?.defaultPrice / 100}
              </span>
            </div>
            <p className="text-sm">{item?.card?.info?.description}</p>
          </div>
          <div className="w-3/12 flex flex-col items-center">
            <img
              src={CDN_URL + item?.card?.info?.imageId}
              alt={item?.card?.info?.name}
              className="rounded-lg w-28 h-24 object-cover mb-2 shadow-sm"
            />
            <button
              className="px-2 py-1 -mt-6 mx-10 my-auto bg-neutral-700 text-white rounded-lg font-semibold"
              onClick={() => handleAddItem(item)}
              disabled={addedItems.includes(item?.card?.info?.id)}
            >
              {addedItems.includes(item?.card?.info?.id) ? "Added" : "Add +"}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
