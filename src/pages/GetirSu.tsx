//Components
import Hero from "../components/Hero";
import PromotionCards from "../components/PromotionCards";
import Promotions from "../components/Promotions";
//Data
import { getirsuPromotionCards, getirsuSliderImage } from "../constants";
const GetirSu = () => {
  return (
    <div>
      <Hero
      id="getirsu"
        headerLogo="getirsu.svg"
        sliderImage={getirsuSliderImage}
        sliderLogo="getirsu.svg"
        sliderTitle="Gece gündüz kapınıza gelen su"
      />
      <Promotions desc="Damacana suyunuzu GetirSu ile dakikalar içinde kapınıza getirelim."/>
      <PromotionCards promotionCards={getirsuPromotionCards}/>
    </div>
  );
};

export default GetirSu;
