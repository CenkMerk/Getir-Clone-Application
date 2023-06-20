//Bu componenti "Navbar.tsx" componentinde kullandım.
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import { phones } from "../constants";
import { FaUserPlus } from "react-icons/fa";

const SignUp = () => {
  let [isOpen, setIsOpen] = useState(false); //State that determines whether the modal is open or closed.
  const [selected, setSelected] = useState("TR");
  function closeModal() {
    setIsOpen(false); //Function to close the modal.
  }
  function openModal() {
    setIsOpen(true); //Function to open the modal.
  }
  return (
    <>
      <div className="h-full inline-flex">
        <button
          type="button"
          onClick={openModal}
          className="text-[#dbdbff] p-1.5 lg:p-6 whitespace-nowrap leading-5 w-full h-full
          inline-flex items-center justify-center font-semibold cursor-pointer"
        >
          <div className="mr-1 inline-flex items-center justify-center">
            <FaUserPlus className="w-5 h-5" />
          </div>
          <span className="text-base items-center leading-5 text-[#dbdbff] hidden lg:flex">
            Kayıt Ol
          </span>
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="flex flex-col items-center w-full max-w-md transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all">
                  <div className="w-full p-6">
                    <div className="flex justify-center text-[#5d3ebc] font-semibold mb-6">
                      Kayıt Ol
                    </div>
                    <div className="grid gap-y-3">
                      <div className="flex gap-x-2">
                        <ReactFlagsSelect
                          countries={Object.keys(phones)}
                          customLabels={phones}
                          onSelect={(code) => setSelected(code)}
                          selected={selected}
                          selectButtonClassName="h-14 border-2 border-[#dfdee2] focus:border-[#5d3ebc]"
                        />

                        <input
                          required
                          className="w-full rounded border-2 border-[#dfdee2] h-14 p-2 focus:outline-none focus:border-[#5d3ebc] "
                          placeholder="Telefon Numarası"
                        />
                      </div>
                      <input
                        required
                        className="w-full rounded border-2 border-[#dfdee2] h-14 p-2 focus:outline-none focus:border-[#5d3ebc] "
                        placeholder="Ad Soyad"
                      />
                      <input
                        required
                        className="w-full rounded border-2 border-[#dfdee2] h-14 p-2 focus:outline-none focus:border-[#5d3ebc] "
                        placeholder="E-Posta"
                      />
                      <div className="inline-flex gap-2">
                        <input type="checkbox" />
                        <span className="text-sm text-[#a2a2a2]">
                          Getir’in bana özel kampanya, tanıtım ve fırsatlarından
                          haberdar olmak istiyorum.
                        </span>
                      </div>
                      <p className="text-sm text-[#a2a2a2]">
                        Kişisel verilerinize dair Aydınlatma Metni için{" "}
                        <a href="#" className="text-primary underline">
                          tıklayınız.
                        </a>{" "}
                        Üye olmakla,{" "}
                        <a href="#" className="text-primary underline">
                          Kullanım Koşulları
                        </a>{" "}
                        hükümlerini kabul etmektesiniz.
                      </p>
                      <button
                        type="button"
                        className="w-full mt-4 text-center font-semibold bg-[#5d3ebc] text-white rounded-lg h-12 hover:bg-[#7849f7]"
                      >
                        Kayıt Ol
                      </button>
                    </div>
                  </div>
                  <div className="w-full h-14 flex items-center justify-center text-[#697488] bg-[#f5f5f5] text-base mt-1">
                    <span>Getir'e üyeyseniz </span>
                    <a className="ms-1 text-[#5d3ebc] font-semibold">
                      Giriş Yap
                    </a>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default SignUp;
