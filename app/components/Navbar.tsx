import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-black px-8">
      <div className="flex items-center justify-between border-b-2 border-[#c9c9c9] py-8">
        <Image
          src="/assets/shared/mobile/icon-hamburger.svg"
          alt="hamburger icon"
          width={"15"}
          height={"15"}
          className="cursor-pointer md:hidden"
        />
        <Link href={"/"}>
          <Image
            src={"/assets/shared/logo.svg"}
            alt="website logo"
            width={"130"}
            height={"130"}
          />
        </Link>

        <ul className="hidden md:flex items-center gap-3 text-white">
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
  );
};

export default Navbar;
