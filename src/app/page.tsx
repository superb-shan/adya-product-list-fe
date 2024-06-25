"use client";

import Image from "next/image";
import ProductComparision from "./components/ProductComparision";
import data from "./data/product-details.json";
import { useState } from "react";
import { PiStarFourFill } from "react-icons/pi";

export interface TProduct {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  features: string[];
}

export default function Home() {
  const [products, setProducts] = useState<TProduct[]>(data);
  return (
    <main className="flex min-h-screen flex-col sm:p-5 lg:p-20 gap-5">
      <header></header>
      <div className="w-full bg-[#362d86] h-[150px] rounded-md" />
      <section className="flex mt-5 w-full sm:flex-col lg:flex-row">
        <div className="sm:w-full lg:w-3/12 flex flex-col sm:mb-10 lg:mb-0">
          <div className="sm:h-full lg:h-[80%] flex sm:flex-row lg:flex-col justify-between items-center">
            <div className="flex flex-col sm:mt-0 lg:mt-10">
              <h1 className="text-4xl italic text-[#362d86]">Compare</h1>
              <h1 className="text-4xl font-extrabold text-[#362d86]">
                Products
              </h1>
            </div>
            <div className="relative flex sm:flex-col lg:flex-row gap-4 sm:mb-0 lg:mb-12">
              <button
                className={`py-2 px-8 font-medium text-white bg-[#362d86] text-center text-xl rounded-md`}
              >
                Full
              </button>
              <button
                className={`py-2 px-8 font-semibold text-[#362d86] bg-[#a4bce0] text-center text-xl rounded-md`}
              >
                Difference
              </button>
              <div className="absolute sm:mt-9 lg:mt-1 sm:left-16 lg:left-[85px] bg-white rounded-full px-2 py-2 text-sm font-semibold">
                OR
              </div>
            </div>
          </div>
          <div className="sm:hidden lg:flex h-[20%] items-center sm:pl-5 lg:pl-20 text-[#362d86] font-bold text-2xl">
            Pricing
          </div>
        </div>
        <div className="sm:w-full lg:w-9/12">
          <ProductComparision products={products} />
          <div className="bg-[#f0f6fe] w-full p-10 mt-0.5 flex gap-10">
            {products.map((product, ind) => (
              <p
                key={ind}
                className="text-4xl sm:text-xl font-extrabold text-center text-[#362d86] w-1/4"
              >
                {new Intl.NumberFormat("en-IN", {
                  style: "currency",
                  currency: "INR",
                  maximumSignificantDigits: 2,
                }).format(product.price) + "/-"}
              </p>
            ))}
          </div>
        </div>
      </section>
      <section className="flex flex-col">
        <h1 className="text-[#362d86] font-bold text-2xl sm:pl-0 lg:pl-16 sm:my-5 lg:my-0 flex items-center">
          Features
        </h1>
        <div className="flex flex-col gap-0.5">
          {products.map((product, ind) => (
            <div key={ind} className="w-full flex sm:flex-col lg:flex-row">
              <div className="w-3/12 text-gray-400 text-lg font-medium sm:py-5 lg:py-7 flex items-center sm:pl-0 lg:pl-20">
                Feature {ind + 1}
              </div>
              <div className="sm:w-full lg:w-9/12 sm:px-5 lg:px-10 bg-[#f0f6fe] py-7 flex justify-between sm:gap-2 lg:gap-0">
                {/* get the 1st feature from every product */}
                {products.map((product, ind) => (
                  <p key={ind} className="1/4">
                    {product.features[ind]}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="flex flex-col">
        <h1 className="text-[#362d86] font-bold text-2xl sm:pl-0 lg:pl-16 sm:my-5 lg:my-0 flex items-center">
          Description
        </h1>
        <div className="flex flex-col gap-1">
          <div className="w-full flex sm:flex-col lg:flex-row">
            <div className="w-3/12 text-gray-400 text-lg font-medium py-7 sm:pl-0 lg:pl-20">
              Relative features
            </div>
            <div className="sm:w-full lg:w-9/12 sm:px-5 lg:px-10 bg-[#f0f6fe] py-7 flex justify-between sm:gap-5 lg:gap-16 rounded-b-lg">
              {/* get the 1st feature from every product */}
              {products.map((product, ind) => (
                <p key={ind} className="1/4">
                  {product.description}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col">
        <h1 className="bg-gradient-to-b from-[#00139e] to-[#0d1ac7] text-white sm:ml-0 lg:ml-14 font-bold text-lg px-5 py-2 flex items-center rounded-xl">
          AI Summary
        </h1>
        <div className="flex w-full gap-1 sm:flex-col lg:flex-row">
          <div className="w-3/12 text-gray-400 font-medium sm:py-5 lg:py-7 sm:pl-0 lg:pl-20">
            Pros
          </div>
          <div className="sm:w-full lg:w-9/12 px-5 sm:py-0 lg:py-7 flex justify-between sm:gap-5 lg:gap-20">
            {
              /* get the 1st feature from every product */
              products.map((product, ind) => (
                <div
                  key={ind}
                  className={`w-1/4 ${ind == 0 && "sm:pl-0 lg:pl-5"}`}
                >
                  <ul className="list-disc pl-5">
                    <li>Pro 1</li>
                    <li>Pro 2</li>
                    <li>Pro 3</li>
                  </ul>
                </div>
              ))
            }
          </div>
        </div>
        <div className="flex gap-1 w-full sm:flex-col lg:flex-row sm:mt-5 lg:mt-0">
          <div className="w-3/12 text-gray-400 font-medium sm:py-5 lg:py-7 sm:pl-0 lg:pl-20">
            Cons
          </div>
          <div className="sm:w-full lg:w-9/12 px-5 sm:py-0 lg:py-7 flex justify-between sm:gap-5 lg:gap-20">
            {
              /* get the 1st feature from every product */
              products.map((product, ind) => (
                <div
                  key={ind}
                  className={`w-1/4 ${ind == 0 && "sm:pl-0 lg:pl-5"}`}
                >
                  <ul className="list-disc pl-5">
                    <li>Con 1</li>
                    <li>Con 2</li>
                    <li>Con 3</li>
                  </ul>
                </div>
              ))
            }
          </div>
        </div>
        <div className="flex gap-1 w-full sm:flex-col lg:flex-row">
          <div className="w-3/12" />
          <div className="sm:w-full lg:w-9/12 sm:px-0 lg:px-5 py-7 flex justify-between sm:gap-10 lg:gap-20">
            {
              /* get the 1st feature from every product */
              products.map((product, ind) => (
                <div key={ind} className={`w-1/4`}>
                  <button className="w-full rounded-md text-center sm:text-xs lg:text-lg bg-[#211a66] hover:bg-[#211a66]/90 py-3 text-white">
                    Add to cart
                  </button>
                </div>
              ))
            }
          </div>
        </div>
      </section>
      <section className="w-full sm:pl-5 lg:pl-14">
        <div className="relative w-full rounded-xl bg-gradient-to-br text-gray-700 from-[#dcfbf1] to-[#e7d8f6] p-6 font-bold sm:pl-24 lg:pl-40">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
          perferendis, numquam repudiandae commodi ad vero dignissimos officia
          nesciunt inventore quas, maiores ducimus nobis quis ratione aliquid,
          molestiae consectetur ab dolorum.
          <div className="absolute flex justify-center items-center -top-8 bg-gradient-to-br from-[#12d0bd] to-[#66dd7b] -left-10 sm:w-28 lg:w-40 sm:h-28 lg:h-40 rounded-full border-[5px] border-white shadow-2xl">
            <PiStarFourFill className="text-[#0d1ac7] sm:text-6xl lg:text-8xl" />
          </div>
        </div>
      </section>
    </main>
  );
}
