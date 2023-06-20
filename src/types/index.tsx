export interface HeroProps {
  id: string;
  headerLogo: string;
  sliderImage: string[];
  sliderLogo?: string;
  sliderTitle?: string;
}

export interface CategoriesProps {
  categoriesTitle: string;
  categories: Category[];
}

export interface Category {
  id: number;
  title: string;
  image: string;
}

export interface PromotionsProps {
  desc: string;
}

export interface PromotionCardsProps {
  promotionCards: promotionCards[];
}

export interface promotionCards {
  img: string;
  title: string;
  desc: string;
}

export interface PromotionCardProps {
  img: string;
  title: string;
  desc: string;
}

export interface BusinessPartnerProps {
  title: string;
  desc: string;
  img?: string;
}

export interface SampleArrowProps {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export interface HeroResponsiveHeaderProps {
  headerLogo: string;
}

export interface HeroSliderProps {
  id: string;
  sliderImage: string[];
}

export interface HeroInfoProps{
  sliderLogo?: string;
  sliderTitle?: string;
}