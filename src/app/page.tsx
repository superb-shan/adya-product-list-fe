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
    <main className="flex min-h-screen flex-col p-20 gap-5">
      <header></header>
      <div className="w-full bg-[#362d86] h-[150px] rounded-md" />
      <section className="flex mt-5">
        <div className="w-3/12 flex flex-col">
          <div className="h-[80%] flex flex-col justify-between">
            <div className="flex flex-col mt-10">
              <h1 className="text-4xl italic text-[#362d86]">Compare</h1>
              <h1 className="text-4xl font-extrabold text-[#362d86]">
                Products
              </h1>
            </div>
            <div className="relative flex gap-4 mb-12">
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
              <div className="absolute mt-1 left-1/4 bg-white rounded-full px-2 py-2 text-sm font-semibold">
                OR
              </div>
            </div>
          </div>
          <div className="h-[20%] flex items-center pl-20 text-[#362d86] font-bold text-2xl">
            Pricing
          </div>
        </div>
        <div className="w-9/12">
          <ProductComparision products={products} />
          <div className="bg-[#f0f6fe] w-full p-10 mt-0.5 flex gap-10">
            {products.map((product, ind) => (
              <p
                key={ind}
                className="text-4xl font-extrabold text-center text-[#362d86] w-1/4"
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
        <h1 className="text-[#362d86] font-bold text-2xl pl-16 flex items-center">
          Features
        </h1>
        <div className="flex flex-col gap-0.5">
          {products.map((product, ind) => (
            <div key={ind} className="w-full flex">
              <div className="w-3/12 text-gray-400 text-lg font-medium py-7 flex items-center pl-20">
                Feature {ind + 1}
              </div>
              <div className="w-9/12 px-10 bg-[#f0f6fe] py-7 flex justify-between">
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
        <h1 className="text-[#362d86] font-bold text-2xl pl-16 flex items-center">
          Description
        </h1>
        <div className="flex flex-col gap-1">
          <div className="w-full flex">
            <div className="w-3/12 text-gray-400 text-lg font-medium py-7 pl-20">
              Relative features
            </div>
            <div className="w-9/12 px-10 bg-[#f0f6fe] py-7 flex justify-between gap-16 rounded-b-lg">
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
        <h1 className="bg-gradient-to-b from-[#00139e] to-[#0d1ac7] text-white ml-14 font-bold text-lg px-5 py-2 flex items-center rounded-xl">
          AI Summary
        </h1>
        <div className="flex w-full gap-1">
          <div className="w-3/12 text-gray-400 font-medium py-7 pl-20">
            Pros
          </div>
          <div className="w-9/12 px-5 py-7 flex justify-between gap-20">
            {
              /* get the 1st feature from every product */
              products.map((product, ind) => (
                <div key={ind} className={`w-1/4 ${ind == 0 && "pl-5"}`}>
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
        <div className="flex gap-1 w-full">
          <div className="w-3/12 text-gray-400 font-medium py-7 pl-20">
            Cons
          </div>
          <div className="w-9/12 px-5 py-7 flex justify-between gap-20">
            {
              /* get the 1st feature from every product */
              products.map((product, ind) => (
                <div key={ind} className={`w-1/4 ${ind == 0 && "pl-5"}`}>
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
        <div className="flex gap-1 w-full">
          <div className="w-3/12" />
          <div className="w-9/12 px-5 py-7 flex justify-between gap-20">
            {
              /* get the 1st feature from every product */
              products.map((product, ind) => (
                <div key={ind} className={`w-1/4`}>
                  <button className="w-full rounded-md text-center bg-[#211a66] hover:bg-[#211a66]/90 py-3 text-white">
                    Add to cart
                  </button>
                </div>
              ))
            }
          </div>
        </div>
      </section>
      <section className="w-full pl-14">
        <div className="relative w-full rounded-xl bg-gradient-to-br text-gray-700 from-[#dcfbf1] to-[#e7d8f6] p-6 font-bold pl-40">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
          perferendis, numquam repudiandae commodi ad vero dignissimos officia
          nesciunt inventore quas, maiores ducimus nobis quis ratione aliquid,
          molestiae consectetur ab dolorum.
          <div className="absolute flex justify-center items-center -top-8 bg-gradient-to-br from-[#12d0bd] to-[#66dd7b] -left-10 w-40 h-40 rounded-full border-[5px] border-white shadow-2xl">
            <PiStarFourFill className="text-[#0d1ac7] text-8xl" />
          </div>
        </div>
      </section>
    </main>
  );
}
