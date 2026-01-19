import { Bandage, Pill, Tablets } from "lucide-react";
import React from "react";

const Offers = () => {
  return (
    <section>
      <h3 className="font-bold text-4xl my-8">Opening Special Discounts</h3>
      <div className="grid h-120 w-full lg:grid-cols-2  gap-4 my-2">
        <div className="rounded-xl text-white font-bold text-2xl bg-blue-300 relative overflow-hidden flex items-center px-4">
          Up to 20% OFF on All Medicine{" "}
          <Pill
            size={200}
            color={"#fff"}
            className="absolute rotate-80 md:-bottom-10 md:-right-4 invisible md:visible"
          />
        </div>
        <div className="sm:row-span-2 rounded-xl text-white font-bold text-4xl bg-purple-300  flex items-center px-4 relative overflow-hidden">
          Up to 30% OFF on Generic Medicines
          <Tablets
            size={200}
            color="#fff"
            className="absolute invisible md:visible md:rotate-45 md:bottom-2 md:right-0"
          />
          <Tablets
            size={150}
            color="#fff"
            className="absolute invisible md:visible rotate-95 bottom-15 -right-19"
          />
        </div>
        <div className="rounded-xl text-white font-bold px-4  text-2xl bg-violet-300  flex items-center relative overflow-hidden">
          10–20% OFF on Wellness & <br />
          Healthcare Products
          <Bandage
            size={150}
            color="#fff"
            className="absolute invisible sm:visible rotate-60  -right-20 md:top-4 md:right-4"
          />
        </div>
      </div>
    </section>
  );
};

export default Offers;
