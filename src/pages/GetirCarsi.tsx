//Components
import BusinessPartner from "../components/BusinessPartner";
import Categories from "../components/Categories";
import Hero from "../components/Hero";
import PromotionCards from "../components/PromotionCards";
import Promotions from "../components/Promotions";
//Data
import { getircarsiPromotionCards, getircarsiSliderImage } from "../constants";
import { getirCarsiCategories } from "../constants";

const GetirCarsi = () => {
  return (
    <div>
      <Hero
        id="getircarsi"
        headerLogo="getircarsi.svg"
        sliderImage={getircarsiSliderImage}
      />
      <Categories
        categories={getirCarsiCategories}
        categoriesTitle="İşletme Kategorileri"
      />
      <Promotions desc="İstediğiniz ürünleri dakikalar içinde kapınıza getirelim." />
      <PromotionCards promotionCards={getircarsiPromotionCards} />
      <BusinessPartner
        desc="GetirÇarşı işletme iş ortaklarından biri olun, işinizi daha az maliyetle büyütün, müşteri memnuniyetini artırın."
        title="İşletme sahibi misiniz?"
      />
    </div>
  );
};

export default GetirCarsi;
