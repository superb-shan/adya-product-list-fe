import React, { FC } from "react";
import { TProduct } from "../page";
import Product from "./Product";

interface ProductComparisionProps {
  products: TProduct[];
}

const ProductComparision: FC<ProductComparisionProps> = ({ products }) => {
  return (
    <div className="bg-[#f0f6fe] w-full rounded-t-xl gap-5 p-5 flex pb-14">
      {products.map((product, ind) => (
        <Product key={`prod${ind}`} info={product} />
      ))}
    </div>
  );
};

export default ProductComparision;
