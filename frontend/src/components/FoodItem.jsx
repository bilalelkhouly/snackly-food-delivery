import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { StoreContext } from "../context/StoreContext";

const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart, url } =
    useContext(StoreContext);

  return (
    <div className="w-full m-auto rounded-[15px] shadow-soft-black transition duration-[0.3s] fadeIn">
      <div className="relative">
        <img
          src={url + "/images/" + image}
          alt=""
          className="w-full rounded-top-15"
        />
        {!cartItems[id] ? (
          <img
            className="w-9 absolute bottom-4 right-4 cursor-pointer rounded-[50%]"
            onClick={() => addToCart(id)}
            src={assets.add_icon_white}
            alt=""
          />
        ) : (
          <div className="absolute bottom-4 right-4 flex items-center gap-2.5 p-1.5 rounded-[50px] bg-white">
            <img
              className="w-[30px] cursor-pointer"
              onClick={() => removeFromCart(id)}
              src={assets.remove_icon_red}
              alt=""
            />
            <p>{cartItems[id]}</p>
            <img
              className="w-[30px] cursor-pointer"
              onClick={() => addToCart(id)}
              src={assets.add_icon_green}
              alt=""
            />
          </div>
        )}
      </div>
      <div className="p-5">
        <div className="flex justify-between items-center mb-2.5">
          <p className="text-xl font-medium">{name}</p>
          <img src={assets.rating_starts} alt="" className="w-[70px]" />
        </div>
        <p className="text-[#676767] text-xs">{description}</p>
        <p className="text-tomato text-[22px] font-medium my-2.5">${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
