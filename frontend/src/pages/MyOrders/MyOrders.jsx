import React, { useContext, useEffect, useState } from "react";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";
import { assets } from "../../assets/assets.js";

const MyOrders = () => {
  const [data, setData] = useState([]);
  const { url, token } = useContext(StoreContext);

  const fetchOrders = async () => {
    const response = await axios.post(
      url + "/api/order/userorders",
      {},
      { headers: { token } }
    );
    setData(response.data.data);
  };

  useEffect(() => {
    if (token) {
      fetchOrders();
    }
  }, [token]);

  return (
    <div className="my-12">
      <h2 className="text-[1.5em] font-bold">My Orders</h2>
      <div className="flex flex-col gap-5 mt-7">
        {data.map((order, index) => {
          return (
            <div
              key={index}
              className="grid grid-cols-orders-grid items-center gap-7 text-sm py-2.5 px-5 text-[#454545] border-solid border-tomato border-[1px] max-900:grid-cols-orders-responsive max-900:gap-y-1 max-900:text-xs"
            >
              <img src={assets.parcel_icon} alt="" className="w-12" />
              <p>
                {order.items.map((item, index) => {
                  if (index === order.items.length - 1) {
                    return item.name + " x " + item.quantity;
                  } else {
                    return item.name + " x " + item.quantity + ", ";
                  }
                })}
              </p>
              <p>${order.amount}.00</p>
              <p>Items: {order.items.length}</p>
              <p>
                <span className="text-tomato">&#x25cf;</span>{" "}
                <b className="font-medium">{order.status}</b>
              </p>
              <button
                className="border-none py-3 rounded-[4px] bg-[#ffe1e1] cursor-pointer max-sm:text-[10px]"
                onClick={fetchOrders}
              >
                Track Order
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyOrders;
