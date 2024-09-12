"use client";

import Image from "next/image";
import ProductComparision from "./components/ProductComparision";
import data from "./data/product-details.json";
import { useState } from "react";
import { PiStarFourFill } from "react-icons/pi";
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";

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
    <main className="flex min-h-screen flex-col xs:p-5 lg:p-20 gap-5">
      <header></header>
      <div className="w-full bg-[#362d86] h-[150px] rounded-md" />
      <section className="flex mt-5 w-full xs:flex-col lg:flex-row">
        <div className="xs:w-full lg:w-3/12 flex flex-col xs:mb-10 lg:mb-0">
          <div className="xs:h-full lg:h-[80%] flex xs:flex-row lg:flex-col justify-between items-center">
            <div className="flex flex-col xs:mt-0 lg:mt-10">
              <h1 className="text-4xl italic text-[#362d86]">Compare</h1>
              <h1 className="text-4xl font-extrabold text-[#362d86]">
                Products
              </h1>
            </div>
            <div className="relative flex xs:flex-col lg:flex-row gap-4 xs:mb-0 lg:mb-12">
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
              <div className="absolute xs:mt-9 lg:mt-1 xs:left-16 lg:left-[85px] bg-white rounded-full px-2 py-2 text-sm font-semibold">
                OR
              </div>
            </div>
          </div>
          <div className="xs:hidden lg:flex h-[20%] items-center xs:pl-5 lg:pl-20 text-[#362d86] font-bold text-2xl">
            Pricing
          </div>
        </div>
        <div className="xs:w-full lg:w-9/12">
          <ProductComparision products={products} />
          <div className="bg-[#f0f6fe] w-full xs:p-5 lg:p-10 mt-0.5 flex gap-10">
            {products.map((product, ind) => (
              <p
                key={ind}
                className="text-4xl xs:text-lg font-extrabold text-center text-[#362d86] w-1/4"
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
        <h1 className="text-[#362d86] font-bold text-2xl xs:pl-0 lg:pl-16 xs:my-5 lg:my-0 flex items-center">
          Features
        </h1>
        <div className="flex flex-col gap-0.5">
          {products.map((product, ind) => (
            <div key={ind} className="w-full flex xs:flex-col lg:flex-row">
              <div className="xs:w-full lg:w-3/12 text-gray-400 text-lg font-medium xs:py-5 lg:py-7 flex items-center xs:pl-0 lg:pl-20">
                Feature {ind + 1}
              </div>
              <div className="xs:w-full lg:w-9/12 xs:px-5 lg:px-10 bg-[#f0f6fe] py-7 flex justify-between xs:gap-2 lg:gap-0">
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
        <h1 className="text-[#362d86] font-bold text-2xl xs:pl-0 lg:pl-16 xs:my-5 lg:my-0 flex items-center">
          Description
        </h1>
        <div className="flex flex-col gap-1">
          <div className="w-full flex xs:flex-col lg:flex-row">
            <div className="xs:w-full lg:w-3/12 text-gray-400 text-lg font-medium py-7 xs:pl-0 lg:pl-20">
              Relative features
            </div>
            <div className="xs:w-full lg:w-9/12 xs:px-5 lg:px-10 bg-[#f0f6fe] py-7 flex justify-between xs:gap-5 lg:gap-16 rounded-b-lg">
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
        <h1 className="bg-gradient-to-b from-[#00139e] to-[#0d1ac7] text-white xs:ml-0 lg:ml-14 font-bold text-lg px-5 py-2 flex items-center rounded-xl">
          AI Summary
        </h1>
        <div className="flex w-full gap-1 xs:flex-col lg:flex-row">
          <div className="xs:w-full lg:w-3/12 text-gray-400 font-medium xs:py-5 lg:py-7 xs:pl-0 lg:pl-20">
            Pros
          </div>
          <div className="xs:w-full lg:w-9/12 px-5 xs:py-0 lg:py-7 flex justify-between xs:gap-5 lg:gap-20">
            {
              /* get the 1st feature from every product */
              products.map((product, ind) => (
                <div
                  key={ind}
                  className={`w-1/4 ${ind == 0 && "xs:pl-0 lg:pl-5"}`}
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
        <div className="flex gap-1 w-full xs:flex-col lg:flex-row xs:mt-5 lg:mt-0">
          <div className="w-3/12 text-gray-400 font-medium xs:py-5 lg:py-7 xs:pl-0 lg:pl-20">
            Cons
          </div>
          <div className="xs:w-full lg:w-9/12 px-5 xs:py-0 lg:py-7 flex justify-between xs:gap-5 lg:gap-20">
            {
              /* get the 1st feature from every product */
              products.map((product, ind) => (
                <div
                  key={ind}
                  className={`w-1/4 ${ind == 0 && "xs:pl-0 lg:pl-5"}`}
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
        <div className="flex gap-1 w-full xs:flex-col lg:flex-row">
          <div className="w-3/12" />
          <div className="xs:w-full lg:w-9/12 xs:px-0 lg:px-5 py-7 flex justify-between xs:gap-10 lg:gap-20">
            {
              /* get the 1st feature from every product */
              products.map((product, ind) => (
                <div key={ind} className={`w-1/4`}>
                  <button className="w-full rounded-md text-center xs:text-xs lg:text-lg bg-[#211a66] hover:bg-[#211a66]/90 py-3 text-white">
                    Add to cart
                  </button>
                </div>
              ))
            }
          </div>
        </div>
      </section>
      <section className="w-full xs:pl-5 lg:pl-14">
        <div className="relative w-full rounded-xl bg-gradient-to-br text-gray-700 from-[#dcfbf1] to-[#e7d8f6] p-6 font-bold xs:pl-24 lg:pl-40">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
          perferendis, numquam repudiandae commodi ad vero dignissimos officia
          nesciunt inventore quas, maiores ducimus nobis quis ratione aliquid,
          molestiae consectetur ab dolorum.
          <div className="absolute flex justify-center items-center -top-8 bg-gradient-to-br from-[#12d0bd] to-[#66dd7b] -left-10 xs:w-28 lg:w-40 xs:h-28 lg:h-40 rounded-full border-[5px] border-white shadow-2xl">
            <PiStarFourFill className="text-[#0d1ac7] xs:text-6xl lg:text-8xl" />
          </div>
        </div>
      </section>
      <DocViewer
            documents={[
                {
                    uri: "https://storage.googleapis.com/adya_upload_pdf/company/2/spaces/sample-test/cbd79471-e44c-4197-a289-8d0970231319.pdf"
                },
            ]}
            pluginRenderers={DocViewerRenderers}
        />
    </main>
  );
}
