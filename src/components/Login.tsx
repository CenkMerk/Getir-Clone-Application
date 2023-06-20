//Bu componenti "Navbar.tsx" componentinde kullandım.
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { FaUser } from "react-icons/fa";
import LoginOrSignup from "./LoginOrSignup";

const Login = () => {
  let [isOpen, setIsOpen] = useState(false); //State that determines whether the modal is open or closed.
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
            <FaUser className="w-5 h-5" />
          </div>
          <span className="text-base items-center leading-5 text-[#dbdbff] hidden lg:flex">
            Giriş yap
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
                  <div className="w-full px-6 py-1 pt-6">
                    <LoginOrSignup />
                  </div>
                  <p className="text-sm text-[#a2a2a2] pb-4">
                    Kişisel verilerinize dair Aydınlatma Metni için{" "}
                    <a href="#" className="text-primary underline">
                      tıklayınız.
                    </a>
                  </p>
                  <div className="w-full h-14 flex items-center justify-center text-[#697488] bg-[#f5f5f5] text-base mt-1">
                    <span>Hala kayıt olmadınız mı? </span>
                    <a className="ms-1 text-[#5d3ebc] font-semibold">
                      Kayıt Ol
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

export default Login;
