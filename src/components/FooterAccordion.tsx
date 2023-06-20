//Bu componenti "Footer.tsx" componentinde kullandım. 768px altında görünür.
import { Disclosure, Transition } from "@headlessui/react";
import { BsChevronDown } from "react-icons/bs";
import { footerBtnGroups } from "../constants";

const FooterAccordion = () => {
  return (
    <div className="rounded-2xl bg-white">
      {footerBtnGroups.map((item, index) => (
      
          <Disclosure key={index}>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-sm font-medium">
                  <span className="text-primary text-2xl">{item.title}</span>
                  <BsChevronDown
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-purple-500`}
                  />
                </Disclosure.Button>
                <Transition
                  enter="transition duration-100 ease-out"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-100 opacity-100"
                  leave="transition duration-75 ease-out"
                  leaveFrom="transform scale-100 opacity-100"
                  leaveTo="transform scale-95 opacity-0"
                >
                  <Disclosure.Panel
                    as="div"
                    className="flex flex-col items-start px-4"
                  >
                    {item.btns.map((btn, index) => (
                      <button
                        key={index}
                        className="text-[#697488] py-1 text-start"
                      >
                        {btn}
                      </button>
                    ))}
                  </Disclosure.Panel>
                </Transition>
              </>
            )}
          </Disclosure>
        
      ))}
    </div>
  );
};

export default FooterAccordion;
