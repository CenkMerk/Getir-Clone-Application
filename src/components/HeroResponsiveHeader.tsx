//Bu componenti "Hero.tsx" componentinde kullandım

import { HiLocationMarker } from "react-icons/hi";
import { BsChevronRight } from "react-icons/bs";
import { HeroResponsiveHeaderProps } from "../types";

const HeroResponsiveHeader = ({headerLogo}:HeroResponsiveHeaderProps) => {
  return (
    <>
      <div className="block md:hidden h-16 bg-primary">
        <figure className="flex items-center justify-center w-full h-full overflow-hidden m-0">
          <img
            src={headerLogo}
            alt="logo"
            className="w-auto h-6"
            loading="lazy"
          />
        </figure>
      </div>
      <div className="flex md:hidden items-center h-10 px-2 justify-between bg-white">
        <div className="flex items-center gap-x-2 text-base font-semibold text-[#525252]">
          <HiLocationMarker color="#5D38C0" className="w-6 h-6" />
          Teslimat Adresi Belirle
        </div>
        <BsChevronRight className="w-5 h-5" color="#5D38C0" />
      </div>
    </>
  );
};

export default HeroResponsiveHeader;
