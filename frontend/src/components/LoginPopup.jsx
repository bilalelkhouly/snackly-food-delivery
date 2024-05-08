import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { StoreContext } from "../context/StoreContext";
import axios from "axios";

const LoginPopup = ({ setShowLogin }) => {
  const [currentState, setCurrentState] = useState("Log In");
  const { url, setToken } = useContext(StoreContext);

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onLogin = async (event) => {
    event.preventDefault();
    let newURL = url;
    if (currentState === "Log In") {
      newURL += "/api/user/login";
    } else {
      newURL += "/api/user/register";
    }

    const response = await axios.post(newURL, data);
    if (response.data.success) {
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token);
      setShowLogin(false);
    } else {
      alert(response.data.message);
    }
  };

  return (
    <div className="absolute z-10 w-full h-full bg-[#00000090] grid">
      <form
        onSubmit={onLogin}
        className="place-self-center w-login-popup text-[#808080] bg-white flex flex-col gap-6 py-[25px] px-[30px] rounded-lg text-sm fadeIn"
      >
        <div className="flex justify-between items-center text-black">
          <h2 className="text-[1.5em] font-bold">{currentState}</h2>
          <img
            src={assets.cross_icon}
            onClick={() => setShowLogin(false)}
            alt=""
            className="w-4 cursor-pointer hover:scale-[1.1]"
          />
        </div>
        <div className="flex flex-col gap-5">
          {currentState === "Log In" ? (
            <></>
          ) : (
            <input
              name="name"
              onChange={onChangeHandler}
              value={data.name}
              type="text"
              placeholder="Enter name"
              required
              className="login-popup-inputs"
            />
          )}
          <input
            name="email"
            onChange={onChangeHandler}
            value={data.email}
            type="email"
            placeholder="Enter email"
            required
            className="login-popup-inputs"
          />
          <input
            name="password"
            onChange={onChangeHandler}
            value={data.password}
            type="password"
            placeholder="Enter password"
            required
            className="login-popup-inputs"
          />
        </div>
        <button
          type="submit"
          className="border-none p-2.5 rounded-lg text-white bg-tomato text-base hover:scale-[1.02] hover:bg-[#FFA08F]"
        >
          {currentState === "Sign Up" ? "Create Account" : "Log In"}
        </button>
        <div className="flex items-start gap-2 mt-[-15px]">
          <input type="checkbox" required className="mt-[5px]" />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
        {currentState === "Log In" ? (
          <p>
            Create a new account?{" "}
            <span
              className="login-popup-span"
              onClick={() => setCurrentState("Sign Up")}
            >
              Click here
            </span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span
              className="login-popup-span"
              onClick={() => setCurrentState("Log In")}
            >
              Log In here
            </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
