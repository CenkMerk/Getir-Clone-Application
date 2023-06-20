//Components
import Categories from "../components/Categories";
import Hero from "../components/Hero";
import PromotionCards from "../components/PromotionCards";
import Promotions from "../components/Promotions";
//Data
import { getirSliderImage } from "../constants";
import { getirCategories } from "../constants";
import { getirPromotionCards } from "../constants";

const Getir = () => {
  return (
    <div>
      <Hero
        id="getir"
        headerLogo="getir.svg"
        sliderImage={getirSliderImage}
        sliderLogo="getirSliderLogo.svg"
        sliderTitle="Dakikalar içinde kapınızda "
      />
      <Categories categoriesTitle="Kategoriler" categories={getirCategories} />
      <Promotions desc="İstediğiniz ürünleri dakikalar içinde kapınıza getirelim." />
      <PromotionCards promotionCards={getirPromotionCards}/>
    </div>
  );
};

export default Getir;
