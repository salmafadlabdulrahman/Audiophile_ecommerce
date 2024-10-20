import React from "react";
import SidebarCategory from "./SidebarCategory";
import { allCategories } from "@/functions";

const Categories = () => {
  return (
    <div className="mt-5">
      <div className="bg-white h-full flex xs:flex-col sm:flex-row justify-center gap-3 absolute top-35 left-0 w-full z-50">
        {allCategories.map((category, i) => (
          <div key={i} className="">
            <SidebarCategory
              category={category.categorie}
              image={category.image}
              imgWidth={200}
              imgHeight={200}
              cardWidth="100%"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
