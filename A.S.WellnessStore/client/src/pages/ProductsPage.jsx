import React from "react";
import Navbar from "../Components/Navbar";
import { Search } from "lucide-react";

const ProductsPage = () => {
  return (
    <div>
      <div className="border w-fit flex rounded-2xl px-[2ch]">
        <input type="text" name="search" className="border-none outline-none" />
        <Search />
      </div>
      <div className="reccmmendaions"></div>
    </div>
  );
};

export default ProductsPage;
