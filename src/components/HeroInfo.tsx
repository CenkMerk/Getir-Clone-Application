//Bu componenti "Hero.tsx" componentinde kullandım
import { HeroInfoProps } from "../types";

const HeroInfo = ({sliderLogo,sliderTitle}:HeroInfoProps) => {
  return (
    <div className="hidden md:block">
      {sliderLogo && <img src={sliderLogo} loading="lazy" width="250px" />}
      {sliderTitle && (
        <h3 className="text-4xl mt-8 font-semibold text-white">
          {sliderTitle}
        </h3>
      )}
    </div>
  );
};

export default HeroInfo;
