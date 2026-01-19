import React from "react";
import Navbar from "../Components/Navbar";
import HeroImg from "../assets/Heroimg.jpg";
import DeliveryImg from "../assets/delivery.png";
import Services from "../Components/Services";
import Offers from "../Components/Offers";
import Footer from "../Components/Footer";

const HomePage = () => {
  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <section id="Hero" className="h-96 w-full relative my-2 rounded-2xl overflow-hidden">
        <img
          src={HeroImg}
          alt="Hero"
          className="absolute bottom-0 right-0 w-full h-full object-cover z-0"
        />
        <div className="h-full flex items-start justify-center flex-col z-10">
          <h1 className="text-3xl sm:text-5xl text-white font-bold opacity-100 z-10 bg-blue-900 px-6 py-4 rounded-r-full">
            A.S. Wellness Store
          </h1>
          <p className="text-white text-lg z-10 font-semibold px-4 text-pretty sm:text-2xl max-w-150 ">
            “Providing quality medicines and wellness products with compassion
            and convenience.”
          </p>
        </div>
      </section>
      <Offers />
      <Services />
      <section className="my-8  grid  sm:grid-cols-2 items-center justify-items-center-safe bg-linear-to-r from-white via-blue-50 to-white">
        <div className="flex flex-col gap-4 ">
          <h3 className="py-2 font-bold text-3xl sm:text-5xl bg-clip-text text-transparent bg-linear-to-r from-blue-500 to-purple-500">
            Fast Home Delivery
          </h3>
          <p className="text-lg text-center sm:text-left sm:text-xl">
            Get your essentials at <br />
            your doorstep
          </p>
        </div>
        <img
          src={DeliveryImg}
          alt="Delivery"
          className="h-60 sm:h-100 lg:h-124"
        />
      </section>
      <Footer />
    </div>
  );
};

export default HomePage;
