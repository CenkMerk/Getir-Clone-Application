//Bu componenti "getir.tsx", "getirbuyuk.tsx", "getircarsi.tsx" ve
//"getirsu.tsx" sayfalarında kullandım.
import { PromotionsProps } from "../types";

const Promotions = ({ desc }: PromotionsProps) => {
  return (
    <div className="md:m-10">
      <h3 className="text-base font-semibold  mb-3 text-[#3e3e3e] hidden md:block">
        Kampanyalar
      </h3>
      <div className="bg-[url('kampanyalarArkaplan.png')] flex items-center justify-between bg-primary px-8 py-7 text-white md:rounded-lg">
        <div className="grid gap-3">
          <div>
            <h1 className="text-5xl pb-3 font-semibold">Getir'i indirin!</h1>
            <h2 className="text-xl">{desc}</h2>
          </div>
          <div className="flex gap-2 z-10 flex-col md:flex-row items-start">
            <img className="h-12 w-auto" src="appstore.svg" alt="appstore" />
            <img
              className="h-12 w-auto"
              src="googleplay.svg"
              alt="googleplay"
            />
            <img className="h-12 w-auto" src="appgalery.svg" alt="appgalery" />
          </div>
        </div>
        <div className="hidden md:block">
          <img src="kampanyalarTelefon.png" alt="kampanyalarTelefon" />
        </div>
      </div>
    </div>
  );
};

export default Promotions;
