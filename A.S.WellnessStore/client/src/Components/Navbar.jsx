import React from "react";
import logo from "../assets/A_S_WellnessStore.png";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="navbar top-0 flex items-center justify-between px-4 border-b z-30 bg-white overflow-y-visible overflow-x-hidden">
      <div className="">
        <img src={logo} alt="" width="100" height="100" />
      </div>
      <RegularNav />
      <Hamburger />
    </nav>
  );
};
export default Navbar;

const RegularNav = () => {
  return (
    <ul className="nav-links md:flex gap-2 sm:gap-6 text-lg font-medium ml-4 md:visible hidden ">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/">Products</Link>
      </li>
      <li>
        <Link to="/">About</Link>
      </li>
      <li>
        <Link to="/">Contact</Link>
      </li>
    </ul>
  );
};

const Hamburger = () => {
  const HandleMenuBtn = () => {
    document.getElementById("Hamburger").classList.remove("w-0", "opacity-0");
    document.getElementById("Hamburger").classList.add("w-80", "opacity-100");

    document.getElementById("menuBtn").classList.remove("right-0");
    document.getElementById("menuBtn").classList.add("-right-full");
  };

  const HandleClose = () => {
    document
      .getElementById("Hamburger")
      .classList.remove("w-80", "opacity-100");
    document.getElementById("Hamburger").classList.add("w-0", "opacity-0");

    document.getElementById("menuBtn").classList.remove("-right-full");
    document.getElementById("menuBtn").classList.add("right-0");
  };
  return (
    <>
      <button
        id="menuBtn"
        className=" relative md:hidden transition-all duration-300"
        onClick={HandleMenuBtn}
      >
        <Menu color="black" size={36} />
      </button>
      <div
        id="Hamburger"
        className="absolute z-30 right-0  w-2 top-0 md:hidden overflow-hidden opacity-1 transition-all duration-300"
      >
        <ul className="nav-links  flex flex-col gap-5 sm:gap-6 text-lg font-medium ml-4 p-6 bg-white/80 h-screen  ">
          <li>
            <button onClick={HandleClose}>
              <X color="black" size={36} />
            </button>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Products</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
        </ul>
      </div>
    </>
  );
};
