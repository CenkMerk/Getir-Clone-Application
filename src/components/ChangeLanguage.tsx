//Bu componenti "Navbar.tsx" componentinde kullandım.
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState, ChangeEvent, FormEvent } from "react";
import { RiGlobalLine } from "react-icons/ri";

const ChangeLanguage = () => {
  let [isOpen, setIsOpen] = useState(false); //Modal'ın açık yada kapalı olduğunu belirleyen state
  function closeModal() {
    setIsOpen(false); //Modal'ı kapatan fonskiyon
  }
  function openModal() {
    setIsOpen(true); //Modal'ı açan fonksiyon
  }

  const [selectedOption, setSelectedOption] = useState("Türkçe"); //Radio buton grubunda seçili olan seçeneği tutan state
  const handleOptionChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(e.target.value); //Kullanıcının girişine göre seçilen seçeneği güncellemekten sorumlu fonksiyon.
  };
  const handleSubmit = (e: FormEvent) => {
    //Form gönderimini sağlayan fonksiyon.
    e.preventDefault();
    setIsOpen(false);
  };
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
            <RiGlobalLine className="w-6 h-6" />
          </div>
          <span className="text-base items-center leading-5 text-[#dbdbff] hidden lg:flex">
            {selectedOption}
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
                <Dialog.Panel className="flex flex-col items-center w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="div"
                    className="flex justify-center text-[#5d3ebc] font-semibold mb-5"
                  >
                    Dil Değiştir
                  </Dialog.Title>
                  <div className="mt-2 w-full">
                    <form>
                      <label className="flex justify-between items-center border border-solid border-purple-200 p-4 rounded-t-lg">
                        <div className="flex gap-1">
                          <input
                            type="radio"
                            value="Türkçe"
                            checked={selectedOption === "Türkçe"}
                            onChange={handleOptionChange}
                            style={{ accentColor: "#5d3ebc" }}
                            className="w-5 h-5"
                          />
                          <span>Türkçe</span>
                        </div>

                        <div>
                          <img src="Turkflag.svg" alt="Turkflag" />
                        </div>
                      </label>
                      <label className="flex justify-between items-center border border-solid border-purple-200 p-4 rounded-b-lg border-t-0">
                        <div className="flex gap-1">
                          <input
                            type="radio"
                            value="English"
                            checked={selectedOption === "English"}
                            onChange={handleOptionChange}
                            style={{ accentColor: "#5d3ebc" }}
                            className="w-5 h-5"
                          />
                          <span>English</span>
                        </div>

                        <div>
                          <img src="usaflag.svg" alt="usaflag" />
                        </div>
                      </label>
                    </form>
                  </div>

                  <button
                    type="button"
                    className="w-full mt-4 text-center font-semibold bg-[#5d3ebc] text-white rounded-lg h-12 hover:bg-[#7849f7]"
                    onClick={handleSubmit}
                  >
                    Güncelle
                  </button>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default ChangeLanguage;
