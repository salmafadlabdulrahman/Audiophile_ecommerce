import Image from "next/image";

interface SidebarCategoryProps {
  category: string;
  image: string;
  imgWidth: number;
  imgHeight: number;
  cardWidth: string;
}

const SidebarCategory = ({ category, image, imgWidth, imgHeight, cardWidth }: SidebarCategoryProps) => {
  return (
    <>
      <div className="mt-[3em] h-full">
        <div className="relative">
          <Image
            src={image}
            height={imgHeight}
            width={imgWidth}
            alt="black headphones"
            className="relative z-10"
          />
          <div className={`bg-gray h-[160px] w-full absolute top-[50px] left-[50%] translate-x-[-50%] rounded-lg xs:w-[${cardWidth}]`}>
            <div className="mt-[5.5em]">
              <div className="text-center">
                <h1 className="uppercase tracking-wide font-semibold">
                  {category}
                </h1>
                <p className="flex items-center justify-center gap-2 mt-1 uppercase tracking-wider text-[15px] font-semibold text-[#aaaaaa] hover:text-orange cursor-pointer">
                  Shop{" "}
                  <Image
                    src={"/assets/shared/desktop/icon-arrow-right.svg"}
                    width={9}
                    height={9}
                    alt="right arrow"
                  />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SidebarCategory;


/*//<div className="bg-white h-full flex xs:flex-col sm:flex-row justify-center gap-3 absolute top-35 left-0 w-full z-25 "> {/*z-50 
/*{allCategories.map((category, i) => (
          <div key={i} className="">
            <SidebarCategory
              category={category.categorie}
              image={category.image}
              imgWidth={200}
              imgHeight={200}
              cardWidth="100%"
            />
          </div>
        ))} */