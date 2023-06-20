//Components
import Categories from "../components/Categories";
import Hero from "../components/Hero";
import PromotionCards from "../components/PromotionCards";
import Promotions from "../components/Promotions";
//Data
import { getirbuyukPromotionCards, getirbuyukSliderImage } from "../constants";
import { getirCategories } from "../constants";

const GetirBuyuk = () => {
  return (
    <div>
      <Hero
        id="getirbuyuk"
        headerLogo="getirbuyuk.svg"
        sliderImage={getirbuyukSliderImage}
        sliderLogo="getirbuyuk.svg"
        sliderTitle="Uygun fiyatlarla kapınızda "
      />
      <Categories categoriesTitle="Kategoriler" categories={getirCategories} />
      <Promotions desc="Market ihtiyaçlarınızı kapınıza kadar getirelim."/>
      <PromotionCards promotionCards={getirbuyukPromotionCards}/>
    </div>
  );
};

export default GetirBuyuk;
