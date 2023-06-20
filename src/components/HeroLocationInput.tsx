//Bu componenti "Hero.tsx" componentinde kullandım

import { FiCrosshair } from "react-icons/fi";
import { BiSearch } from "react-icons/bi";

const HeroLocationInput = () => {
  return (
    <div className="w-full relative pb-5 border-b-2 mb-5">
      <input
        required
        className="w-full rounded border-2 border-[#dfdee2] h-14 py-1 ps-10 pe-3 focus:outline-none focus:border-[#5d3ebc]"
        placeholder="Örn. Etiler mh."
      />
      <BiSearch className="w-5 h-5 absolute top-4 left-3" color="#5d3ebc" />
      <button className="flex items-center text-primary gap-2 text-base p-2 md:px-2 md:py-1 bg-[#f3f0fe] rounded-xl absolute top-3 right-2">
        <FiCrosshair />
        <span className="hidden md:block">Konumumu Bul</span>
      </button>
    </div>
  );
};

export default HeroLocationInput;
