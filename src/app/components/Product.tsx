import React, { FC } from "react";
import ProductSlider from "./ProductSlider";
import { TProduct } from "../page";

const Product: FC<{ info: TProduct }> = ({ info }) => {
  return (
    <div className="flex flex-col gap-5">
      <ProductSlider img={info.image} />
      <div className="flex flex-col bg-white rounded-md p-2 w-full gap-2">
        <div className="text-[#171d7e] font-semibold">{info.name}</div>
        <button className="w-full bg-[#211a66] hover:bg-[#211a66]/90 text-sm text-white py-2 flex justify-center items-center rounded-md">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default Product;
