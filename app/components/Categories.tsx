import { allCategories } from "@/functions";
import Image from "next/image";
import React from "react";

const Categories = () => {
  return (
    <div className="mt-[6em]">
      <div className="flex xs:flex-col sm:flex-row justify-center items-center gap-2 border relative">
        {allCategories.map((category, i) => (
          <div className="relative" key={i}>
            <Image
              src={`${category.image}`}
              alt="tech item"
              width={150}
              height={150}
              className="z-20 absolute top-[0px] right-[50%] translate-x-[50%]"
            />
            <div className="bg-gray mt-[3.5em] h-[150px] w-[200px] rounded-lg flex flex-col items-center justify-center">
              <div className="text-center ">
                <p>{category.categorie}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Categories;
