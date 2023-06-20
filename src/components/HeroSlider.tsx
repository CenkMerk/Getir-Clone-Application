//Bu componenti "Hero.tsx" componentinde kullandım

import { HeroSliderProps } from "../types";
import Slider from "react-slick";

const HeroSlider = ({id,sliderImage}:HeroSliderProps) => {
    const settings = {
        dots: false,
        infinite: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 2500,
        cssEase: "linear",
      };
  return (
    <div className="hidden md:block">
    <Slider {...settings}>
      {id !== "getiryemek" &&
        sliderImage.map((item, index) => (
          <img
            key={index}
            className="w-full h-[500px] object-cover"
            src={item}
            alt="heroslider"
            loading="lazy"
          />
        ))}
      {id === "getiryemek" &&
        sliderImage.map((item, index) => (
          <video
            key={index}
            className="w-full h-[500px] object-cover"
            src={item}
            autoPlay
          />
        ))}
    </Slider>
  </div>
  )
}

export default HeroSlider