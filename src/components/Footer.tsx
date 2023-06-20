//Bu componenti "App.tsx" de kullandım.
import { footerBtnGroups } from "../constants";
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";
import FooterAccordion from "./FooterAccordion";

const Footer = () => {
  return (
    <div className="p-1 md:p-10 bg-white">
      <div className="flex pb-5 gap-4 flex-col md:flex-row">
        <div className="grid gap-5">
          <span className="text-primary text-2xl">Getir'i indirin!</span>
          <div className="grid gap-4">
            <img className="h-12 w-auto" src="appstore.svg" alt="appstore" />
            <img
              className="h-12 w-auto"
              src="googleplay.svg"
              alt="googleplay"
            />
            <img className="h-12 w-auto" src="appgalery.svg" alt="appgalery" />
          </div>
        </div>
        <div className="w-full hidden flex-row justify-evenly gap-4 md:flex">
          {footerBtnGroups.map((item, index) => (
            <div key={index} className="flex flex-col gap-5">
              <span className="text-primary text-2xl">{item.title}</span>
              <div className="flex flex-col items-start">
                {item.btns.map((btn, index) => (
                  <button
                    key={index}
                    className="text-[#697488] py-1 text-start"
                  >
                    {btn}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="block md:hidden ">
          <FooterAccordion />
        </div>
      </div>
      <div className="flex items-center justify-between border-t-2 px-3 py-5 flex-col md:flex-row">
        <div className="flex gap-3 text-sm  flex-col md:flex-row items-center">
          <span className="text-[#697488]">© 2023 Getir</span>
          <button className="text-primary">Bilgi Toplumu Hizmetleri</button>
        </div>
        <div className=" text-[#697488] flex gap-4">
          <button className="hover:text-primary hover:bg-[#f3f0fe] p-2 rounded-lg">
            <BsFacebook size={22} />
          </button>
          <button className="hover:text-primary hover:bg-[#f3f0fe] p-2 rounded-lg">
            <BsTwitter size={22} />
          </button>
          <button className="hover:text-primary hover:bg-[#f3f0fe] p-2 rounded-lg">
            <BsInstagram size={22} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
