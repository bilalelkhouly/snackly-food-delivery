import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-2 px-[4%]">
      <Link to="/">
        <img className="w-36" src={assets.logo} alt="" />
      </Link>
      <img className="w-10" src={assets.profile_image} alt="" />
    </div>
  );
};

export default Navbar;
