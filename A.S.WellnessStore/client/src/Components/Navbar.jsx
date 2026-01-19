import React from "react";
import logo from "../assets/A_S_WellnessStore.png";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="navbar sticky top-0 w-full hrefp-0 flex items-center justify-between px-4 border-b z-30 bg-white">
      <div className="">
        <img src={logo} alt="" width="100" height="100" />
      </div>
      <RegularNav />
      <div className="overflow-hidden md:hidden">
        <Hamburger />
      </div>
    </nav>
  );
};
export default Navbar;

const RegularNav = () => {
  return (
    <ul className="nav-as md:flex gap-2 sm:gap-6 text-lg font-medium ml-4 md:visible hidden ">
      <li>
        <a href="#Hero">Home</a>
      </li>
      <li>
        <a href="#Services">Products</a>
      </li>
      <li>
        <a href="#contact">About</a>
      </li>
      <li>
        <a href="#contact">Contact</a>
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
      <buthrefn
        id="menuBtn"
        className=" relative md:hidden transition-all duration-300"
        onClick={HandleMenuBtn}
      >
        <Menu color="black" size={36} />
      </buthrefn>
      <div
        id="Hamburger"
        className="absolute z-30 right-0 top-0  w-2 md:hidden overflow-hidden opacity-1 transition-all duration-300"
      >
        <ul className="nav-as  flex flex-col gap-5 sm:gap-6 text-lg font-medium ml-4 p-6 bg-white/30 h-screen backdrop-blur-sm shadow-lg">
          <li>
            <buthrefn onClick={HandleClose}>
              <X color="black" size={36} />
            </buthrefn>
          </li>
          <li>
            <a href="#Hero" onClick={HandleClose}>
              Home
            </a>
          </li>
          <li>
            <a href="#Services" onClick={HandleClose}>
              Products
            </a>
          </li>
          <li>
            <a href="#contact" onClick={HandleClose}>
              About
            </a>
          </li>
          <li>
            <a href="#contact" onClick={HandleClose}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};
