//Bu componenti "Hero.tsx" ve "Login.tsx" componentinde kullandım

import { phones } from "../constants";
import ReactFlagsSelect from "react-flags-select";
import { useState } from "react";
const LoginOrSignup = () => {
  const [selected, setSelected] = useState("TR");
  return (
    <>
      <div className="flex justify-center text-[#5d3ebc] font-semibold mb-6">
        Giriş yap veya kayıt ol
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
          <div className="w-full">
            <input
              required
              className="w-full rounded border-2 border-[#dfdee2] h-14 p-1 focus:outline-none focus:border-[#5d3ebc]"
              placeholder="Telefon Numarası"
            />
          </div>
        </div>
        <button className="rounded-lg font-semibold h-12 text-primary bg-brandYellow hover:bg-primary hover:text-brandYellow transition-all duration-200 text-base md:text-lg">
          Telefon numarası ile devam et
        </button>
      </div>
    </>
  );
};

export default LoginOrSignup;
