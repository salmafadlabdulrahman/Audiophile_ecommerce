import Image from "next/image";

interface SidebarCategoryProps {
  category: string;
  image: string;
}

const SidebarCategory = ({ category, image }: SidebarCategoryProps) => {
  return (
    <>
      <div className="mt-[3em]">
        <div className="relative ">
          <Image
            src={image}
            height={200}
            width={200}
            alt="black headphones"
            className="relative m-auto z-10"
          />
          <div className="bg-gray h-[160px] absolute top-[65px] left-[50%] translate-x-[-50%] rounded-lg xs:w-[80%] ">
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
