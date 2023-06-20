//Bu componenti "getir.tsx", "getiryemek.tsx", "getirbuyuk.tsx", "getircarsi.tsx" ve
//"getirsu.tsx" sayfalarında kullandım.
import { PromotionCardsProps } from "../types";
import PromotionCard from "./PromotionCard";

const PromotionCards = ({promotionCards}:PromotionCardsProps) => {
  return (
    <div className="m-5 md:m-10 grid grid-cols-1 md:grid-cols-3 gap-4">
      {promotionCards.map((item, index) => (
        <PromotionCard
          key={index}
          img={item.img}
          title={item.title}
          desc={item.desc}
        />
      ))}
    </div>
  );
};

export default PromotionCards;
