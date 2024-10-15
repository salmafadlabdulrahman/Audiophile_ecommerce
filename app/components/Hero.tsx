import Image from "next/image"
import heroImg from "/public/assets/home/mobile/image-hero.png"

//"/public/assets/home/mobile/image-hero.png"

const Hero = () => {
  return (
    <div>
        <Image src={heroImg} alt="black headphones" height={'150'} width={'150'} />
    </div>
  )
}

export default Hero
//#191919