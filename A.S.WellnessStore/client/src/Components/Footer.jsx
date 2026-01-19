import { Clock2, MapPin, Phone, Plus } from "lucide-react";
import React from "react";

const Footer = () => {
  const HandleCopy = async (phoneNo) => {
    try {
      await navigator.clipboard.writeText(phoneNo);
      alert("Phone number copied to clipboard!");
    } catch (err) {
      alert("Failed to copy phone number.");
    }
  };

  return (
    <section id="contact" className=" text-white bg-neutral-700 px-4 py-6 ">
      <h3 className="font-bold text-md sm:text-2xl">Reach Us</h3>
      <p className="font-bold text-xl sm:text-4xl pt-4">A. S. Wellness Store</p>
      <p className="text-sm sm:text-md font-medium">
        Led by DRx Bhushan Rathod
      </p>
      <div className="flex flex-col gap-2 text-md sm:text-lg mt-4">
        <p className="flex text-sm sm:text-md gap-2 underline items-center cursor-pointer text-blue-400">
          <MapPin size={24} color="#fff" />
          <a href="https://maps.app.goo.gl/1pk1Rg6MizB5E7KP8" target="_blank">
            Santoshi Mata Nagar, Bidipeth
          </a>
        </p>
        <p
          className="flex text-sm sm:text-md gap-2 text-blue-400 underline items-center cursor-pointer"
          onClick={() => HandleCopy("+918208627010")}
        >
          <Phone size={24} color="#fff" />
          +91 82086 27010
        </p>
        <p className="flex text-sm sm:text-md gap-2 items-center">
          <Clock2 size={24} />
          Open Daily: 09:00 AM – 11:00 PM
        </p>
      </div>

      <p className="text-sm sm:text-md  text-center pt-6">
        © 2026 A. S. Wellness Store. All rights reserved.
      </p>
    </section>
  );
};

export default Footer;
