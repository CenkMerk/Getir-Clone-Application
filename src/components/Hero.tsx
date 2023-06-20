//Bu componenti "getir.tsx", "getiryemek.tsx", "getirbuyuk.tsx", "getircarsi.tsx" ve
//"getirsu.tsx" sayfalarında kullandım.

import { HeroProps } from "../types";


import HeroResponsiveHeader from "./HeroResponsiveHeader";
import HeroSlider from "./HeroSlider";
import HeroInfo from "./HeroInfo";
import HeroLocationInput from "./HeroLocationInput";
import LoginOrSignup from "./LoginOrSignup";

const Hero = ({
  id,
  headerLogo,
  sliderImage,
  sliderLogo,
  sliderTitle,
}: HeroProps) => {
  

  return (
    <div
      className={`relative h-auto md:h-[500px] ${
        id === "getiryemek" || id === "getircarsi"
          ? ""
          : "md:before:bg-gradient-to-r md:before:from-[#5d3ebc] md:before:to-transparent md:before:absolute md:before:inset-0 md:before:w-full md:before:h-full md:before:z-10"
      }`}
    >
      <HeroResponsiveHeader headerLogo={headerLogo} />
      <HeroSlider id={id} sliderImage={sliderImage} />
      <div className="md:container flex justify-between items-center relative md:absolute top-0 left-0 md:left-1/2 translate-x-0 md:-translate-x-1/2 h-full z-20">
        <HeroInfo sliderLogo={sliderLogo} sliderTitle={sliderTitle} />
        <div className="w-full md:w-[400px] md:rounded-lg bg-gray-50 md:p-6 p-3">
          {(id === "getiryemek" || id === "getircarsi") && (
            <HeroLocationInput/>
          )}
          <LoginOrSignup/>
        </div>
      </div>
    </div>
  );
};

export default Hero;
