const Hero = () => {
  return (
    <div className="bg-black w-full h-screen bg-[url(/assets/home/mobile/image-hero.png)] md:bg-[url(/assets/home/tablet/image-hero.png)] lg:bg-[url(/assets/home/desktop/image-hero.jpg)] bg-no-repeat bg-center bg-contain ">
      <div className="text-center pb-5 lg:text-left lg:pl-5 lg:w-[80%] lg:m-auto">
        <h5 className="uppercase text-darkgray tracking-[7px] font-semibold text-[1em] pt-[9em]">
          New Product
        </h5>
        <p className="uppercase text-white mt-5 text-[2.7em] sm:text-[3.5em] font-semibold leading-[1.1em] ">
          XX99 Mark II <br />
          headphones
        </p>
        <p className="text-darkgray font-light max-w-[70%] m-auto lg:m-0  pt-5 md:w-[50%] lg:w-[40%]">
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