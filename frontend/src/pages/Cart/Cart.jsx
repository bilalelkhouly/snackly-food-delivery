import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount, url } =
    useContext(StoreContext);

  const navigate = useNavigate();

  return (
    <div className="mt-24">
      <div className="">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div>
                <div className="cart-items-title my-2.5 text-black">
                  <img
                    src={url + "/images/" + item.image}
                    alt=""
                    className="w-[50px]"
                  />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${item.price * cartItems[item._id]}</p>
                  <p
                    className="cursor-pointer"
                    onClick={() => removeFromCart(item._id)}
                  >
                    X
                  </p>
                </div>
                <hr className="h-[1px] bg-[#e2e2e2] border-none" />
              </div>
            );
          }
        })}
      </div>
      <div className="mt-20 flex justify-between gap-cart-bottom max-md:flex-col-reverse">
        <div className="flex-1 flex flex-col gap-5">
          <h2 className="text-[1.5em] font-bold">Cart Total</h2>
          <div className="">
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr className="my-2.5" />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr className="my-2.5" />
            <div className="cart-total-details">
              <b>Total</b>
              <b>
                ${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}
              </b>
            </div>
          </div>
          <button
            className="border-none text-white bg-tomato py-3 px-5 self-center rounded-xl cursor-pointer text-sm"
            onClick={() => navigate("/order")}
          >
            PROCEED TO CHECKOUT
          </button>
        </div>

        <div className="flex-1 max-md:justify-start">
          <div className="">
            <p className="text-[#555]">
              If you have a promo code, enter it here
            </p>
            <div className="mt-2.5 flex justify-between items-center bg-[#eaeaea] rounded-md">
              <input
                type="text"
                placeholder="Enter promo code"
                className="bg-transparent border-none outline-none pl-2.5 w-[75%]"
              />
              <button className="py-3 px-1 bg-black border-none text-white w-[25%] rounded-md text-sm">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
