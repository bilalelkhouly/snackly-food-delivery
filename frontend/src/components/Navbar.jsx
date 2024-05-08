import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../context/StoreContext";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropDownOpen(!isDropDownOpen);
  };

  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
    setIsDropDownOpen(false);
  };

  return (
    <div className="py-5 flex justify-between items-center ">
      <Link to="/">
        <img
          src={assets.logo}
          alt=""
          className="w-[150px] max-lg:w-[140px] max-900:w-[120px]"
        />
      </Link>
      <ul className="flex gap-4 text-[#49557e] list-none text-lg font-lausanne max-lg:gap-5 max-lg:text-[17px] max-900:gap-4 max-900:text-base max-md:hidden">
        <Link
          to="/"
          onClick={() => setMenu("home")}
          className={`cursor-pointer hover:scale-[1.1] ${
            menu === "home" ? "active-nav" : ""
          }`}
        >
          Home
        </Link>
        <a
          href="#explore-menu"
          onClick={() => {
            navigate("/");
            setMenu("menu");
          }}
          className={`cursor-pointer hover:scale-[1.1] ${
            menu === "menu" ? "active-nav" : ""
          }`}
        >
          Menu
        </a>
        <a
          href="#app-download"
          onClick={() => {
            navigate("/");
            setMenu("mobile-app");
          }}
          className={`cursor-pointer hover:scale-[1.1] ${
            menu === "mobile-app" ? "active-nav" : ""
          }`}
        >
          Mobile App
        </a>
        <a
          href="#footer"
          onClick={() => {
            navigate("/");
            setMenu("contact-us");
          }}
          className={`cursor-pointer hover:scale-[1.1] ${
            menu === "contact-us" ? "active-nav" : ""
          }`}
        >
          Contact Us
        </a>
      </ul>
      <div className="flex items-center gap-10 max-lg:gap-[30px] max-900:gap-5">
        <img
          src={assets.search_icon}
          alt=""
          className="max-lg:w-[22px] max-900:w-5"
        />
        <div className="relative">
          <Link to="/cart">
            {" "}
            <img
              src={assets.basket_icon}
              alt=""
              className="max-lg:w-[22px] max-900:w-5"
            />{" "}
          </Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
        {!token ? (
          <button
            onClick={() => setShowLogin(true)}
            className="btn hover:bg-[#fff4f2] max-lg:py-2 max-lg:px-[25px] max-900:py-[7px] max-900:px-5"
          >
            Sign In
          </button>
        ) : (
          <div className="relative">
            <img
              onClick={toggleDropdown}
              src={assets.profile_icon}
              alt=""
              className="cursor-pointer max-lg:w-[22px] max-900:w-5"
            />
            <ul
              className={`${
                isDropDownOpen ? "profile-dropdown w-32" : "hidden"
              }`}
            >
              <li
                className="flex items-center gap-2.5 cursor-pointer hover:text-tomato"
                onClick={() => navigate("/myorders")}
              >
                <img className="w-[20px]" src={assets.bag_icon} alt="" />
                <p className="text-sm">Orders</p>
              </li>
              <hr />
              <li
                onClick={logout}
                className="flex items-center gap-2.5 cursor-pointer hover:text-tomato"
              >
                <img className="w-[20px]" src={assets.logout_icon} alt="" />
                <p className="text-sm">Logout</p>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
