//Bu componenti "getiryemek.tsx" ve "getircarsi.tsx" sayfalarında kullandım.
import { BusinessPartnerProps } from "../types";

const BusinessPartner = ({ title, desc, img }: BusinessPartnerProps) => {
  return (
    <div className="flex items-start md:items-center flex-col md:flex-row justify-between m-5 md:m-10 gap-3 bg-white px-5 py-10 rounded bg-[url('businesspartnerarkaplan.jpg')]">
      {img && <img src={img} alt="businesspartner" className="w-36 hidden md:block" />}
      
      <div className="flex flex-col gap-5">
        <span className="text-3xl font-semibold text-primary">{title}</span>
        <span className="text-xl text-[#697488]">{desc}</span>
      </div>
      <button className="text-primary bg-brandYellow h-12 px-7 font-semibold rounded whitespace-nowrap">
        Hemen Başvur
      </button>
    </div>
  );
};

export default BusinessPartner;
