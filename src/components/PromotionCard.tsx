//Bu componenti "PromotionCards.tsx" componentinde kullandım.
import { PromotionCardProps } from "../types";

const PromotionCard = ({ img, title, desc }: PromotionCardProps) => {
  return (
    <div className="flex flex-col items-center text-center bg-white py-5 px-4 gap-4">
      <div>
        <img src={img} alt={title} className="w-36"/>
      </div>
      <span className="text-2xl font-semibold text-primary">{title}</span>
      <span className="text-xl text-[#697488]">{desc}</span>
    </div>
  );
};

export default PromotionCard;
