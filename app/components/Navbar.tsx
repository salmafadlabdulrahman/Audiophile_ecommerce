"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import SidebarCategory from "./SidebarCategory";
import { allCategories } from "@/functions";

const Navbar = () => {
  const [openSidebar, setOpenSidebar] = useState(true);

  const displaySidebar = () => {
    setOpenSidebar((val) => !val);
  };

  return (
    <>
      <nav className="bg-black px-8">
        <div className="flex items-center justify-between border-b-2 border-[#c9c9c9] py-8 md:max-w-[90%] lg:max-w-[80%] md:m-auto">
          {!openSidebar ? (
            <Image
              src="/assets/shared/mobile/icon-hamburger.svg"
              alt="hamburger icon"
              width={"15"}
              height={"15"}
              className="cursor-pointer md:hidden"
              onClick={displaySidebar}
            />
          ) : (
            <Image
              src="/assets/shared/mobile/icon-close-menu.svg"
              alt="close icon"
              width={"15"}
              height={"15"}
              onClick={displaySidebar}
              className="md:hidden"
            />
          )}
          <Link href={"/"}>
            <Image
              src={"/assets/shared/logo.svg"}
              alt="website logo"
              width={"150"}
              height={"150"}
            />
          </Link>

          <ul className="nav-items hidden md:flex items-center gap-3 text-white uppercase text-[14px] font-semibold md:gap-8">
            <Link href={"/"}>Home</Link>
            <Link href={"/headphones"}>Headphones</Link>
            <Link href={"/speakers"}>Speakers</Link>
            <Link href={"/earphones"}>Earphones</Link>
          </ul>
          <Image
            src={"/assets/shared/mobile/icon-cart.svg"}
            height={"20"}
            width={"20"}
            alt="cart icon"
            className="cursor-pointer"
          />
        </div>
      </nav>
      {openSidebar && (
        <div className="bg-white pb-[4em] h-full md:hidden flex xs:flex-col sm:flex-row justify-center gap-5 ">
          {allCategories.map((category, i) => (
            <div key={i}>
              <SidebarCategory
                category={category.categorie}
                image={category.image}
              />
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Navbar;