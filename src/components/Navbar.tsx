//Bu componenti "App.tsx" de kullandım.
import { NavLink } from "react-router-dom";
import { NavItems } from "../constants";
import ChangeLanguage from "./ChangeLanguage";
import Login from "./Login";
import SignUp from "./SignUp";

const Navbar = () => {
  return (
    <div className="lg:sticky lg:z-20">
      <nav className="px-1.5 lg:px-8 md:px-4 h-10 md:h-12 bg-[#4c3398]">
        <div className="flex justify-between items-center w-full h-full mx-auto max-w-screen-xl">
          <div className="inline-flex items-center h-full">
            {NavItems.map((item, index) => (
              <div key={index} className="inline-flex mr-px mt-[5px]">
                <div className="flex items-center h-full">
                  <NavLink
                    to={`${item.link}`}
                    className="inline-flex items-center p-3 hover:bg-primary max-[375px]:px-2 max-[375px]:py-[10px] rounded-t-md"
                  >
                    <figure
                      className={`flex items-center justify-center w-full h-full overflow-hidden m-0 brightness-[0.05] invert-[.90]`}
                    >
                      <img src={item.img} alt="logo" className="w-auto h-3.5 md:h-4 object-contain" />
                    </figure>
                  </NavLink>
                </div>
              </div>
            ))}
          </div>

          <div className="items-center text-white hidden md:flex">
            <ChangeLanguage />
            <Login />
            <SignUp/>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
