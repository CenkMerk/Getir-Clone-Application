import { FC } from "react";
//Slayt için kullandığım paket
import Slider from "react-slick";
//Components
import Hero from "../components/Hero";
import PromotionCards from "../components/PromotionCards";
import BusinessPartner from "../components/BusinessPartner";
//Data
import { getiryemekSliderVideo } from "../constants";
import { getirYemekCategories } from "../constants";
import { getiryemekPromotionCards } from "../constants";
//Types
import {SampleArrowProps} from "../types/index"


const SampleNextArrow: FC<SampleArrowProps> = (props) => {
  const { onClick } = props;
  return (
    <div onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6 cursor-pointer"
        color="#5D38C0"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 4.5l7.5 7.5-7.5 7.5"
        />
      </svg>
    </div>
  );
};

const SamplePrevArrow: FC<SampleArrowProps> = (props) => {
  const { onClick } = props;
  return (
    <div onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6 cursor-pointer"
        color="#5D38C0"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 19.5L8.25 12l7.5-7.5"
        />
      </svg>
    </div>
  );
};
const GetirYemek = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <div>
      <Hero
        id="getiryemek"
        headerLogo="getiryemek.svg"
        sliderImage={getiryemekSliderVideo}
      />
      <div className="mx-10 my-10">
        <Slider {...settings} className="flex items-center gap-3">
          {getirYemekCategories.map((category, index) => (
            <div key={index} className="p-2">
              <div className="flex flex-col group justify-center items-center gap-y-2 text-center transition  text-primary cursor-pointer rounded-lg bg-white">
                <img
                  src={category.image}
                  alt={category.title}
                  className="px-4"
                />
                <span className="text-base font-semibold  whitespace-nowrap  tracking-tight border-t-2 w-full py-2">
                  {category.title}
                </span>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <PromotionCards promotionCards={getiryemekPromotionCards} />
      <BusinessPartner
        desc="GetirYemek restoran iş ortaklarından biri olun, işinizi daha az
          maliyetle büyütün, müşteri memnuniyetini artırın."
        title="Restoran sahibi misiniz?"
        img="businesspartner.jpg"
      />
    </div>
  );
};

export default GetirYemek;
