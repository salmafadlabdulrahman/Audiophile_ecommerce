import Image from "next/image";

const Hero = () => {
  return (
    <div className="bg-black relative md:flex justify-around items-center">
      <div className="order-2">
        <Image
          src={"/assets/home/mobile/image-hero.png"}
          alt="black headphones"
          height={"400"}
          width={"400"}
          className="m-auto"
        />
      </div>

      <div className="sm:w-[90%] md:w-[60%] lg:w-[40%] text-center absolute  top-20 right-[50%] translate-x-[50%] md:translate-x-[0] m-auto md:static md:m-0 md:text-left md:pl-4">
        {" "}
        <h5 className="uppercase text-darkgray text-[15px] tracking-[10px]">
          New Product
        </h5>
        <h2 className="uppercase text-white text-[55px] tracking-wider leading-[1.1em] font-semibold mt-5">
          XX99 Mark II
          <br /> headphones
        </h2>
        <p className="text-darkgray m-auto mt-3 font-light tracking-tight text-[17px] max-w-[350px] md:w-[350px] md:m-0 md:mt-3">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <button className="mt-7 bg-orange text-white w-[160px] h-[45px] font-semibold text-[14px] uppercase tracking-widest">
          See Product
        </button>
      </div>
    </div>
  );
};

export default Hero;
