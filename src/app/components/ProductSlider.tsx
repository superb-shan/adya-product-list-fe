import Image from "next/image";
import React, { FC } from "react";
import { BiLeftArrow, BiTrash } from "react-icons/bi";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const ProductSlider: FC<{ img: string }> = ({ img }) => {
  return (
    <div className="relative bg-white w-full p-8 rounded-md">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={img} alt="product" width={300} height={300} />
      <BiTrash
        title="delete product"
        className="absolute top-2 right-2 text-red-400/50 hover:text-red-400 cursor-pointer text-xl"
      />
      <FaAngleLeft
        title="previous"
        className="absolute top-1/2 left-2 text-[#211a66]/20 hover:text-[#211a66]/80 cursor-pointer text-xl"
      />
      <FaAngleRight
        title="next"
        className="absolute top-1/2 right-2 text-[#211a66]/20 hover:text-[#211a66]/80 cursor-pointer text-xl"
      />
    </div>
  );
};

export default ProductSlider;
