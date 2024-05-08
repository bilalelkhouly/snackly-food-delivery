import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { assets } from "../assets/assets";

const Orders = ({ url }) => {
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    const response = await axios.get(url + "/api/order/list");
    if (response.data.success) {
      setOrders(response.data.data);
    } else {
      toast.error("Error");
    }
  };

  const statusHandler = async (event, orderId) => {
    const response = await axios.post(url + "/api/order/status", {
      orderId: orderId,
      status: event.target.value,
    });
    if (response.data.success) {
      await fetchAllOrders();
    }
  };

  useEffect(() => {
    fetchAllOrders();
  }, []);

  return (
    <div className="add-col w-[70%] ml-add mt-12">
      <h3 className="font-medium text-[1.2em]">Order Page</h3>
      <div className="">
        {orders.map((order, index) => (
          <div
            key={index}
            className="grid grid-cols-orders-grid items-start gap-7 border-solid border-tomato border-[1px] p-5 my-7 text-sm text-[#505050] max-lg:text-xs max-lg:grid-cols-orders-grid-responsive max-lg:py-4 max-lg:px-2"
          >
            <img src={assets.parcel_icon} alt="" className="max-lg:w-10" />
            <div>
              <p className="font-semibold">
                {order.items.map((item, index) => {
                  if (index === order.items.length - 1) {
                    return item.name + " x " + item.quantity;
                  } else {
                    return item.name + " x " + item.quantity + ", ";
                  }
                })}
              </p>
              <p className="font-semibold mt-7 mb-1">
                {order.address.firstName + " " + order.address.lastName}
              </p>
              <div className="mb-2.5">
                <p>{order.address.street + ","}</p>
                <p>
                  {order.address.city +
                    ", " +
                    order.address.state +
                    ", " +
                    order.address.country +
                    ", " +
                    order.address.zipCode}{" "}
                </p>
              </div>
              <p>{order.address.phone}</p>
            </div>
            <p>Items: {order.items.length}</p>
            <p>${order.amount}.00</p>
            <select
              className="bg-[#ffe8e4] border-[1px] border-solid border-tomato max-w-select p-2.5 outline-none max-lg:p-1 max-lg:text-xs"
              onChange={(event) => statusHandler(event, order._id)}
              value={order.status}
            >
              <option value="Food Processing">Food Processing</option>
              <option value="Out for Delivery">Out for Delivery</option>
              <option value="Delivered">Delivered</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
