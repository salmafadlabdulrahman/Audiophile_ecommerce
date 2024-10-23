import { allCategories } from "@/functions";
import Image from "next/image";
import React from "react";

const Categories = () => {
  return (
    <div className="mt-[6em]">
      <div className="flex xs:flex-col sm:flex-row justify-center items-center gap-2 relative">
        {allCategories.map((category, i) => (
          <div className="relative" key={i}>
            <Image
              src={`${category.image}`}
              alt="tech item"
              width={150}
              height={150}
              className="z-20 absolute top-[0px] right-[50%] translate-x-[50%]"
            />
            <div className="bg-gray mt-[3.5em] mb-5 h-[150px] w-[200px] rounded-lg flex flex-col items-center justify-center">
              <div className="text-center mt-[2em] ">
                <p className="uppercase tracking-wide font-semibold">
                  {category.categorie}
                </p>
                <p className="flex items-center justify-center mt-2 gap-2 text-[#aaaaaa] hover:text-orange cursor-pointer uppercase tracking-wider text-[15px] font-semibold">
                  Shop{" "}
                  <Image
                    src={"/assets/shared/desktop/icon-arrow-right.svg"}
                    width={9}
                    height={9}
                    alt="right arrow"
                    className=""
                  />
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Categories;

